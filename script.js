const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// to submit the form

const sform = document.querySelector("#btn");
let contect = document.querySelector("#contect-container");



sform.addEventListener("click" , (event)=>{
    event.preventDefault();  // to prevent autosubmitting the form 

    let Name = document.querySelector("#name").value;
    let eMail = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let desc = document.querySelector("#desc").value;
    let form = document.querySelector(".form-1");

    if(Name === '' || eMail === '' || number === '' || desc === ''){
        alert('Please fill all fields');
    }
    else{
            form.innerHTML = `<div class="inndiv">
        THANK YOU , ${Name} your request has been submitted
        </div>`;
    }
})
