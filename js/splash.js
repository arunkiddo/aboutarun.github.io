(function() {
 var preload = document.getElementById("preload");
 var loading =0;
var id = setInterval(frame,64)

function frame() {
if(loading == 1)
clearInterval(id);
windows.open("index.html,"self");
 } else {
loading = loading + 1;
if(loading == 1) {
preload.style.animation = "fadeout is ease"
}
}
}
})();
