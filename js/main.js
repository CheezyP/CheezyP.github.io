//Controls Navbar Hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}
//Contact Me
var index = 1;
document.getElementById('comment-toggle').addEventListener("click", function () {
    var options = ['Show Comments', 'Hide Comments'];
    if (index == 1) {
        document.getElementById('comment-toggle').innerHTML = options[index];
        index--;
        console.log(index);
    } else {
        document.getElementById('comment-toggle').innerHTML = options[index];
        index++;
        console.log(index);
    }
})