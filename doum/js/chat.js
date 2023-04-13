window.onload = function() {
    document.querySelector(".top_title").innerHTML = localStorage.getItem("username") + " 님";
    $(document.querySelector(".chatBox")).scrollTop($(document.querySelector(".chatBox")).height());

}