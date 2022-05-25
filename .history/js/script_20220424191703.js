var input = document. querySelector("#send");


input.addEventListener("click", function(e) {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    console.log(name + email)
    
})