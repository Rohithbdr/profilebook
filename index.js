let userName = document.getElementById("text");
let pass = document.getElementById("password");
let save = document.querySelector('.sign-btn');
let logined = document.querySelector('.login-btn');
let paragraph = document.getElementById("para");
let register = document.getElementById("register");
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let userInput = document.getElementById("email");
let userPass = document.getElementById("emailPass");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName"); 
let errName = document.getElementById("errorName");
let inputs = document.querySelectorAll('.hell');
let warn = document.getElementById('warning');
let lastWarn = document.getElementById("last-warning")
let emWarn = document.getElementById("email-warning");
let passWarn = document.getElementById("pass-warning");
let dob = document.getElementById("dob");
let dobWarn = document.getElementById("dob-warning");
let genderbtn = document.querySelectorAll('.gender');



let logedFirst = document.getElementById("loged-name");
let logedLast = document.getElementById("loged-Lname");
let profIcon = document.getElementById("profile-icon");
let renderedBg = document.getElementById('render-bg');
let logout = document.getElementById("logout");

let bDate = document.getElementById("day");
let bMonth = document.getElementById("month");
let bYear = document.getElementById("year");
let birthdays = document.querySelectorAll('.birthday');


let userArray = [];

let genders;
let birthdate;


genderbtn.forEach((event) => {
    let presentTAg = event;
    presentTAg.onclick = (tag) => {
         genders = tag.target.value;
         if(bYear.value !== "") {
         birthdate = bDate.value + "/" + bMonth.value + "/" +bYear.value ;
         }
    }
})



firstName.addEventListener("blur" , (event) => {
    if(event.target.value === ""){
        firstName.style.borderColor = "red";
        warn.classList.remove("warns");
    }   else {
        firstName.style.borderColor = "#dddfe2";
        warn.classList.add("warns");
    }
});



lastName.addEventListener("blur" , (event) => {
    if(event.target.value === ""){
        lastName.style.borderColor = "red";
        lastWarn.classList.remove("last-warn");
    } else {
        lastName.style.borderColor = "#dddfe2";
        lastWarn.classList.add("last-warn");
    }
});

text.addEventListener("blur" , (event) => {
    if(event.target.value === "") {
        text.style.borderColor = "red";
        emWarn.classList.remove("email-warn");
    } else {
        text.style.borderColor = "#dddfe2";
        emWarn.classList.add("email-warn");
    }
});

pass.addEventListener("blur", (event) => {
    if(event.target.value === "") {
        pass.style.borderColor = "red";
        passWarn.classList.remove("pass-warn");
    } else {
        pass.style.borderColor = "#dddfe2";
        passWarn.classList.add("pass-warn");
    }
});

dob.addEventListener("change" , (event) => {
    if(event.target.value === "") {
        dob.style.borderColor = "red";
        dobWarn.classList.remove("dob-warn");
    } else {
        dob.style.borderColor = "#dddfe2";
        dobWarn.classList.add("dob-warn");
    }
})

inputs.forEach(function(element) {
    let activeInputs = element;
    activeInputs.onfocus = () => {
        if(firstName.value === "") {
            firstName.style.borderColor = "red";
            // warn.classList.remove("warns");         
        } else {
            firstName.style.borderColor = "#dddfe2";        
        }
    }
})


register.onclick = () => {
    modal.style.display = "block";

    if(firstName.value === "") {
        firstName.style.borderColor = "#dddfe2";
        warn.classList.add("warns");
        lastName.style.borderColor = "#dddfe2";
        lastWarn.classList.add("last-warn");
        text.style.borderColor = "#dddfe2";
        emWarn.classList.add("email-warn");
        pass.style.borderColor = "#dddfe2";
        passWarn.classList.add("pass-warn");
        dob.style.borderColor = "#dddfe2";
        dobWarn.classList.add("dob-warn");
    }
}


close.onclick = function() {
    modal.style.display = "none";
    userName.value = "";
    pass.value = "";
    firstName.value = "";
    lastName.value = "";  
}

 function createObject() {
   return {
        id: userArray.length + 1,
        firstName: firstName.value,
        lastName: lastName.value,
        email: text.value,
        password: pass.value,
        birthday: birthdate,
        gender:   genders
    }
}










save.onclick = function() {
    if(userName.value && pass.value && firstName.value && lastName.value !== "") {

        username.push(userName.value);
        password.push(pass.value);

        let userObject  =  createObject();
        userArray.push(userObject);  
        saved();  
        modal.style.display = "none";
    }   


    if(firstName.value  === "") {
        firstName.style.borderColor = "red";
        warn.classList.remove("warns");
    } if(lastName.value === "") {
        lastName.style.borderColor = "red";
        lastWarn.classList.remove("last-warn");
    } if(text.value === "") {
        text.style.borderColor = "red";
        emWarn.classList.remove("email-warn");
    } if(pass.value === "") {
        pass.style.borderColor = "red";
        passWarn.classList.remove("pass-warn");
        dob.style.borderColor = "red";
        dobWarn.classList.remove("dob-warn");
    } 
       
}

logined.onclick = function () {
    let storedUsername = localStorage.getItem("usernames");
    let parsedUser = JSON.parse(storedUsername);
    let parsedPass = JSON.parse(localStorage.getItem("passwords"));
    let filteredUserList = parsedUser.filter((each) => each.includes(userInput.value));
    let filteredPass = parsedPass.filter((each) => each.includes(userPass.value));


    let parsedUserArray = JSON.parse(localStorage.getItem("users"));
    let filteredUser = parsedUserArray.filter((each) => each.email.includes(userInput.value));
    if((userInput.value === filteredUserList[0]) && (userPass.value === filteredPass[0])){
        logedFirst.textContent = filteredUser[0].firstName + " " + filteredUser[0].lastName;
        alert("Login Succesful");
        document.getElementById("main").style.display = "none";
        document.getElementById('main-2').style.display = "block";
    } else {
    alert("UserName or Password is incorrect");
}
}

profIcon.onclick = () => {
  renderedBg.classList.toggle("showUsers");
}

logout.onclick = function() {
    document.getElementById('main-2').style.display = "none";
    document.getElementById("main").style.display = "flex";
    renderedBg.classList.remove("showUsers");
    alert("You have successfully been logged out");
}


document.getElementById('main-2').style.display = "none";

let username = [];
let password = [];


function saved() {
    localStorage.setItem("usernames" ,JSON.stringify(username));
    localStorage.setItem("passwords" , JSON.stringify(password));
    localStorage.setItem("users" , JSON.stringify(userArray));
    userName.value = "";
    pass.value = "";
    firstName.value = "";
    lastName.value = "";    
}


function login(event) {
    if (event.key === "Enter"){
    console.log(userName.value)
    }
}

userName.addEventListener('keydown',login);