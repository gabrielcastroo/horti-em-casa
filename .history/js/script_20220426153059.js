var input = document.querySelector("#submit");


input.addEventListener("click", function(e) {

    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const content = document.querySelector("main");

    content.innerHTML= `<span id="content-user"> ${name} obrigado por confirmar seu interesse em participar do Horti em casa <br> já mandamos as orientações para o seu e-mail ${email} ;)</span>`;
    console.log(name + " " + email)


    
    var segundos = 0;
    var timer = setInterval(
        function testarInteracao(){
            segundos+= 1;
            
            if(segundos == 10){ //Limite máximo em Segundos
                window.location.href = "./index.html";
            } 
            
            console.log(segundos)
        }, 1000);
})

