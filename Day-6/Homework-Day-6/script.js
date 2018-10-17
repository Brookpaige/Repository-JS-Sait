function makepalette(){

var num=$("#num").val();
var hue=$("input[name='hue']:checked").val();
var lum=$("input[name='lum']:checked").val();
var color=randomColor({
    count: num,
    hue: hue,
    luminosity: lum
});

 console.log("NUM: " + num);
 console.log("HUE: " + hue);
 console.log("LUM: " + lum);
 console.log("CLR: " + color);
$.each(color,function( index,value ) {
    console.log("Got color: " + index+"/"+value);
    var $div=$(document.createElement('DIV'));
    $div.css("background-color", value).css("width", "100px").css("height", "100px");
    $div.html(value);
    $("#pal").append($div);
    //$( "#pal" ).add( "div" );//.css( "background-color: "+ value + "; width: 100px; height: 100px;").html(value);
  });
}

$("#btn").click(makepalette);
