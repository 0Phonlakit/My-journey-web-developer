// without JQuery
// for(var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }


// use JQuery
$("button").click(function(){
    $("h1").css("color", "#006994")
});

// use keypress JQuery
$("input").keypress(function(event){
    $("h1").text(event.key);
});
