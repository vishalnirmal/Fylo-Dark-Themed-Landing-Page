var email = document.querySelector("#email");
var form = document.querySelector(".input-email");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    var pattern = /\w+@\w+\.\w+/g;
    var reg = RegExp(pattern);
    if(reg.test(formData.get("email")))
        form.classList.remove("active");
    else
        form.classList.add("active");
});