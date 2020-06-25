

var myVar;
function myFunction(){
  myVar = setTimeout(showPage, 2000);
}


/*
function showPage(){
  $("#loader").css("display",  "none");
  $("#myDiv").css("display", "block");
}
*/

/*
function showPage(){
  $("#loader").css("display",  "none");
  //$("#myDiv").load("file:///home/patlip/Dokumenty/Ala/stronka/stronka/index2.html")
  window.location.href = "file:///home/patlip/Dokumenty/Ala/stronka/stronka/index2.html";
}
*/

function showPage(){
  $("#loader").css("display",  "none");
  $("#myDiv").css("opacity", "1");
}
