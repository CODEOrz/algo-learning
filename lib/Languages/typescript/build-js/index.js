"use strict";
var Days;
(function (Days) {
    Days["red"] = "\u7EA2\u8272";
    Days[Days["blue"] = 2] = "blue";
})(Days || (Days = {}));
;
console.log(Days["red"]); // true
console.log(Days[2]); // true
