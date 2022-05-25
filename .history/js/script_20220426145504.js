var input = document.querySelector("#submit");


input.addEventListener("click", function(e) {

    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    console.log(name + email)
    
})