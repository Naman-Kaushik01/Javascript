let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);

    alert(`Hii Your name is ${user.value} and Your password is set to ${pass.value}`);
})