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
    $(".workGrid1 img").css("width", "320px");
    $(".workGrid1 img").css("height", "400px");
});
$(".workGrid1").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
    $(".workGrid1 img").css("width", "300px");
    $(".workGrid1 img").css("height", "380px");
});
$(".workGrid2").hover(function(){
    $(this).css("background-color", "#CE5959");
    $(".workGrid2 img").css("width", "320px");
    $(".workGrid2 img").css("height", "400px");
});
$(".workGrid2").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
    $(".workGrid2 img").css("width", "300px");
    $(".workGrid2 img").css("height", "380px");
});
$(".workGrid3").hover(function(){
    $(this).css("background-color", "#CE5959");
    $(".workGrid3 img").css("width", "320px");
    $(".workGrid3 img").css("height", "400px");
});
$(".workGrid3").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
    $(".workGrid3 img").css("width", "300px");
    $(".workGrid3 img").css("height", "380px");
});
function changeImage(x,image){
    if(x == 1) {
        image.src= 'images/Logo2.png';
    }
    if(x == 2) {
        image.src= 'images/Logo1.png';
    }
}
$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navbar_menu").toggleClass("active");
});

