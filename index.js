function showpassword() {
    var type_ = document.getElementById("input-password").type;
    document.getElementById("input-password").type = type_ == "password" ? "text" : "password";
    document.getElementById("input-password-again").type = type_ == "password" ? "text" : "password";
}

document.getElementById("input-showpassword").addEventListener("click", showpassword);

function setHeight() {
    var height_ = document.documentElement.scrollHeight;
    document.querySelector("html").style.height = height_ + "px";
    
}
window.addEventListener("resize", setHeight);
window.addEventListener("load", setHeight);