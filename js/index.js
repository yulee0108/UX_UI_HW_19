console.log("Your index,js file is loaded correctily!");

$("button").hover(function(){
    $(this).css("background-color", "#A1DE93");
});
$("button").mouseleave(function(){
    $(this).css("background-color", "#3676E0");
});

$("a").hover(function(){
    $(this).css("color", "#CE5959");
});
$("a").mouseleave(function(){
    $(this).css("color", "white");
});

$(".workGrid1").hover(function(){
    $(this).css("background-color", "#CE5959");
});
$(".workGrid1").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
});
$(".workGrid2").hover(function(){
    $(this).css("background-color", "#CE5959");
});
$(".workGrid2").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
});
$(".workGrid3").hover(function(){
    $(this).css("background-color", "#CE5959");
});
$(".workGrid3").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
});
