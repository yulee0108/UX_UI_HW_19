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
    $(".workGrid1 img").css("width", "500px");
    $(".workGrid1 img").css("height", "700px");
});
$(".workGrid1").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
    $(".workGrid1 img").css("width", "481px");
    $(".workGrid1 img").css("height", "611px");
});
$(".workGrid2").hover(function(){
    $(this).css("background-color", "#CE5959");
    $(".workGrid2 img").css("width", "500px");
    $(".workGrid2 img").css("height", "700px");
});
$(".workGrid2").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
    $(".workGrid2 img").css("width", "481px");
    $(".workGrid2 img").css("height", "611px");
});
$(".workGrid3").hover(function(){
    $(this).css("background-color", "#CE5959");
    $(".workGrid3 img").css("width", "500px");
    $(".workGrid3 img").css("height", "700px");
});
$(".workGrid3").mouseleave(function(){
    $(this).css("background-color", "#E0E0E0");
    $(".workGrid3 img").css("width", "481px");
    $(".workGrid3 img").css("height", "611px");
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

