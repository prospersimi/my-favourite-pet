$(document).ready(function(){
  $(".clickable").click(function(){
    $(".former").slideToggle();
    $(".latter").slideToggle();
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("button#yellow").click(function(){
    $("body").removeClass("dark");
    $("body").addClass();
  });
});
