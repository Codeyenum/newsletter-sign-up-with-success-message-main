const form = document.querySelector("form");
let input = document.querySelector("input");
let small = document.querySelector("small");
let heroImage = document.querySelector(".hero-img");
let successContainer = document.querySelector(".success-msg-container");
let dismissBtn = successContainer.querySelector("button");
let formContainer = form.parentElement;
let emailContainer = successContainer.querySelector("strong");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = input.value;
    if (regEx.test(input.value.trim())) {
        input.classList.remove("error")
        input.classList.add("success")
        small.classList.remove("error")

        heroImage.classList.add("hide");
        formContainer.classList.add("hide");
        successContainer.classList.add("show");
        emailContainer.innerHTML = email;
    } else {
        input.classList.add("error")
        small.classList.add("error")
        input.classList.remove("success")
    }
})

dismissBtn.addEventListener("click", () => {
    input.classList.remove("error")
    input.classList.remove("success")
    small.classList.remove("error")

    heroImage.classList.toggle("hide");
    formContainer.classList.toggle("hide");
    successContainer.classList.toggle("show");

    input.value = "";
})