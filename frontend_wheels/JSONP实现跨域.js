// JSONP
// JSONP是JSON with Padding的缩写。

// 上面提到了，<script>标签的跨域是不受同源策略限制的。
// 那么，我们可不可以这样：我们向后端请求一个js文件，在这个js文件当中，返回一个函数的 #执行#，
// 而我们想要得到的数据，是这个函数的参数。比如，创建一个名叫jsonpData.js'的文件：

showData({
  name: "Crimson fire",
  culture: "Yaaxil"
})

// 在前端发送请求的时候，服务器中，我们把这个js文件发送出去：

if (req.url === '/jsonpData.js') {
  fs.readFile('./jsonpData.js', function (err, file) {
    res.setHeader('Content-Type', 'text/js');
    res.writeHead('200', "OK");
    res.end(file);
  });
}

// 而在前端，我们创建请求对jsonpData.js文件的请求（添加一个script标签），
// 之后，关键的地方来了：我们要在前端定义showData这个函数，来处理传送进来的数据

const s = document.createElement("script");
s.src = "http://localhost:8082/jsonpData.js";
document.body.appendChild(s);

function showData(myObj) {
  document.getElementById("name").innerHTML = myObj.name;
  document.getElementById("culture").innerHTML = myObj.culture;
}

// 这样当jsonpData.js发送到前端的时候，里面的showData函数会按照前端的定义执行，就会把参数的值替换到id为name和culture的元素上。
// 不过JSONP只能处理GET请求，只是权宜之计。

