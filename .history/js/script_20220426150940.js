var input = document.querySelector("#submit");


input.addEventListener("click", function(e) {

    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const content = document.querySelector("main");

    content.innerHTML= `<h2> ${name} obrigado por confirmar seu interesse em participar do Horti em casa <br> já mandamos as orientações para o seu e-mail ${email}</h2`;
    console.log(name + " " + email)
    
})