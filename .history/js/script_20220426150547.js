var input = document.querySelector("#submit");


input.addEventListener("click", function(e) {

    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const content = document.querySelector("main");

    content.innerHTML="<h2> Test Name </h2";
    console.log(name + " " + email)
    
})