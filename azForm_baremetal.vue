<template>
  <div>
    <i-form
      ref="form"
      :model="fields"
      :label-width="labelWidth"
    >
      <i-form-item
        v-for="(field, key) in fields"
        v-if="!field.hidden"
        :key="key"
        :label="field.label"
        :label-width="field.labelWidth"
        :rules="transRules(field.rules)"
        :prop="`${key}.value`"
      >
        <component
          :is="field.tag || 'ys-input'"
          v-model="field.value"
          v-bind="field"
        />
      </i-form-item>
      <i-form-item>
        <i-row
          type="flex"
          justify="end"
          :gutter="16"
        >
          <i-col>
            <i-button @click="cancelHandler">
              取消
            </i-button>
          </i-col>
          <i-col>
            <i-button
              type="primary"
              @click="submitHandler"
            >
              提交
            </i-button>
          </i-col>
        </i-row>
      </i-form-item>
      <i-spin
        v-if="loading"
        size="large"
        fix
      />
    </i-form>
  </div>
</template>

<script lang="jsx">
  import * as ruleMap from 'common/formRules'
  import { OVERLAY_MODE, SDN_CONTROLLER_TYPE } from 'common/enum'
  import YsInput from 'components/Form/YsInput'
  import YsCheckbox from 'components/Form/YsCheckbox'
  import YsSelect from 'components/Form/YsSelect'
  // import { getRegion } from 'src/views/pages/sys_resource_entry/tool.js'
  import SysInfoGetter from 'common/form_tool/SysInfoGetter.js'
  import RangeInput from '../../component/RangeInput'

  export default {
    components: {
      YsInput,
      YsCheckbox,
      YsSelect,
      RangeInput,
    },
    props: {
      params: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data() {
      return {
        loading: false,
        labelWidth: 140,
        fields: {
          name: {
            label: 'AZ名称',
            value: '',
            placeholder: '',
            data: [],
            rules: ['required', 'name']
          },
          region_uuid: {
            loading: false,
            tag: 'ys-select',
            label: '所属Region',
            value: '',
            placeholder: '',
            data: [],
            rules: ['required']
          },
          link_mode: {
            tag: 'ys-select',
            label: 'Overlay模式',
            value: '',
            placeholder: '',
            data: [],
            rules: ['required']
          },
          sdn_used: {
            tag: 'ys-select',
            label: 'SDN控制器',
            value: SDN_CONTROLLER_TYPE.NULL.value,
            placeholder: '',
            data: [],
            disabled: false,
            rules: ['required'],
          },
          sdn_uri: {
            label: '控制器服务地址',
            value: '',
            placeholder: '',
            rules: ['required'],
            hidden: true,
          },
          sdn_username: {
            label: '控制器用户名',
            value: '',
            placeholder: '',
            rules: ['required'],
            hidden: true,
          },
          sdn_password: {
            label: '控制器密码',
            value: '',
            placeholder: '',
            rules: ['required'],
            hidden: true,
          },
          isModifyControllerPassword: {
            tag: 'YsCheckbox',
            value: false,
            hidden: true,
            data: [
              { label: '修改控制器密码' }
            ]
          },
          newControllerPassword: {
            label: '新密码',
            value: '',
            hidden: true,
            placeholder: '',
            rules: ['required'],
          },
          newControllerPasswordConfirm: {
            label: '确认新密码',
            value: '',
            hidden: true,
            placeholder: '',
            rules: ['required'],
          },
        },
      }
    },
    computed: {
      isEdit() {
        return _.get(this.params, 'row.uuid', false)
      }
    },
    watch: {
      'fields.sdn_used.value'(val) {
        if (val === SDN_CONTROLLER_TYPE.HUAWEI_AC.value
          || val === SDN_CONTROLLER_TYPE.H3C_V_CFC.value) {
          if (this.isEdit) {
            this.fields.isModifyControllerPassword.hidden = false
            this.fields.sdn_uri.hidden = false
            this.fields.sdn_username.hidden = false
            this.fields.sdn_password.hidden = true
          } else {
            this.fields.sdn_uri.hidden = false
            this.fields.sdn_username.hidden = false
            this.fields.sdn_password.hidden = false
          }
        } else {
          this.fields.sdn_uri.hidden = true
          this.fields.sdn_username.hidden = true
          this.fields.sdn_password.hidden = true
        }
      },
      'fields.isModifyControllerPassword.value'(val) {
        this.fields.newControllerPassword.hidden = !val
        this.fields.newControllerPasswordConfirm.hidden = !val
      },
    },
    created() {
      this.fetchData()
      this.initForm()
    },
    methods: {
      transRules(rules) {
        if (rules && rules.length) {
          return _.map(rules, rule => {
            if (typeof rule === 'string') {
              return ruleMap[rule] || rule
            }
            return rule
          })
        }
      },
      resetFields() {
        this.$refs.form && this.$refs.form.resetFields()
      },
      async onSubmit(valid) {
        if (valid) {
          const newControllerPwd = this.fields.newControllerPassword.value
          const newControllerPwdConfirm = this.fields.newControllerPasswordConfirm.value
          if (newControllerPwd !== newControllerPwdConfirm) {
            ys.error('两次输入的控制器密码不一致')
            this.fields.newControllerPassword.value = ''
            this.fields.newControllerPasswordConfirm.value = ''
            return Promise.reject()
          }
          let formData = _.reduce(this.fields, (acc, field, key) => {
            acc[key] = field.value
            return acc
          }, {})
          formData.platform = this.params.platform
          if (this.isEdit) {
            formData.sdn_password = _.get(this.fields, 'newControllerPassword.value', false) || this.fields.sdn_password.value
            await this.$request('/az/update', {
              urlQuery: {
                az_uuid: _.get(this.params, 'row.uuid', '')
              },
              data: formData
            }).then(() => {
              this.$emit('edit')
            })
          } else {
            await this.$request('/az/create', {
              data: formData
            }).then(() => {
              this.$emit('submit')
            })
          }
        }
      },
      submitHandler() {
        this.$refs.form.validate(valid => {
          // iview的bug,此处同步的error会被catch
          setTimeout(() => {
            const result = this.onSubmit(valid)
            if (Object.prototype.toString.call(result) === '[object Promise]') {
              this.loading = true
              result.then(() => {
                if (valid) {
                  this.resetFields()
                }
              }).finally(() => {
                this.loading = false
              })
            } else {
              if (valid) {
                this.resetFields()
              }
            }
          })
        })
      },
      cancelHandler() {
        this.$emit('cancel')
        this.resetFields()
      },
      initForm() {
        if (this.isEdit) {
          this.fields.region_uuid.hidden = true
          this.fields.link_mode.hidden = true
          this.fields.sdn_password.hidden = true
          this.fields.sdn_used.disabled = true
          _.map(this.params.row, (i, key) => {
            if (_.get(this.fields, key, false)) {
              this.fields[key].value = i
            }
          })
        }
      },
      fetchData() {
        // this.fields.region_uuid.loading = true
        // getRegion().then(data => {
        //   this.fields.region_uuid.data = _.map(data, d => {
        //     return {
        //       label: d.name,
        //       value: d.uuid
        //     }
        //   })
        // }).finally(() => {
        //   this.fields.region_uuid.loading = false
        // })
        
        let sysInfo = new SysInfoGetter()
        let a = sysInfo.getRegion(this.fields.region_uuid)
        let b = sysInfo.makeSelections()
        console.log(a)
        console.log(b)
         
        this.fields.link_mode.data = _.map(OVERLAY_MODE, i => {
          return {
            label: i.name,
            value: i.value
          }
        })
        this.fields.sdn_used.data = [
          { label: SDN_CONTROLLER_TYPE.NULL.name, value: SDN_CONTROLLER_TYPE.NULL.value },
          { label: SDN_CONTROLLER_TYPE.NSP_C.name, value: SDN_CONTROLLER_TYPE.NSP_C.value },
        ]
      }
    }
  }
</script>

<style scoped></style>
