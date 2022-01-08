//TASK 1
//onclick - console

//1.get button
//2.create function
//3.conect button and function

// let btn = document.querySelector('.btn');

// function fun1(){
// console.log('It\'s working!!!');
//   // location.href = 'https://recycle.mikas.dev'; redirect to another page(my page)
// }

// btn.onclick = fun1;








// завдання 2 вивести у консоль текс введений в інпут після нажаття на кнопку
//TASK 2
//1.get the button
//2.get the input
//3.create a function
//4.connect button with function

// let btn = document.querySelector('.btn');
// let input = document.querySelector('.input');

// function outTextToConsole(){
//   console.log(input.value);
// }

// btn.onclick = outTextToConsole;










// завдання 3 вивести у аут текс введений в інпут після нажаття на кнопку
//TASK 3 
//1.get the button
//2.get the input
//3.get the output
//3.create a function
//4.connect button with function

// let btn = document.querySelector('.btn');
// let input = document.querySelector('.input');
// let output = document.querySelector('.out');

// function outTextToHTML (){
// output.innerHTML += ' ' + input.value;
// }

// btn.addEventListener("click", outTextToHTML);










// завдання 4 вивести у аут текс введений в інпут в момент введення
//+
// завдання 5 після нажаття на кнопку якщо довжина тексту менше 6 показати алерт з повідомленням
//+
// завдання 6 вивести у аут текс введений в інпут в момент введення (якщи довжина тексту менше 6 колір бордеру повинен бути червоний)
//TASK 4
//1.get button
//2.get input
//3.get output
//4.create function
//5.connect function with button
//6.validade click
//7.validade change
// let btn = document.querySelector('.btn');
// let input = document.querySelector('.input');
// let output = document.querySelector('.out');

// function validate(){
// if(input.value.length < 6 ){
// alert('Need more than 6 characteres');
// }else{
//   alert('Ok');
// }

// }
// btn.addEventListener('click', validate); 

// function outTextInMoment (){
//   output.innerHTML = input.value;

//   if(input.value.length < 6){
//     input.style = 'border: 3px solid black';
//   }else{
//     input.style = '';
//   }
// }

// input.addEventListener('input', outTextInMoment);


// var colors = ["red", "blue", "green"];
// for (let i = 0; i < colors.length; i++) {
//   let colNum = i + 1;
//   console.log('Color number ' + colNum + ' is ' + colors[i]);
// }


let btn = document.querySelector('.btn');
let inputName = document.querySelector('.firstName');
let inputLastName = document.querySelector('.lastName');
let inputEmail = document.querySelector('.email')
let inputPhone = document.querySelector('.phone');
let inputPassword = document.querySelector('.password');
let inputConfirmation = document.querySelector('.confirmPassword');
let error = document.querySelector('.error')
let allInputs = document.querySelectorAll('.input');

function formValidation(e) {
  e.preventDefault();
  if (inputName.value === '') {
    error.innerHTML = 'Please enter your Name';
    inputName.style = 'border: 1px solid red;' 
  }
  else if (inputLastName.value === '') {
    error.innerHTML = 'Please enter your Last Name';
    inputLastName.style = 'border: 1px solid red;'
  } 
  else if (inputEmail.value === ''){
    error.innerHTML = 'Please enter your Email';
    inputEmail.style = 'border: 1px solid red;'
  }
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))
{
    error.innerHTML = 'Please enter a valid Email';
    inputEmail.style = 'border: 1px solid red;'
  }
  else if (inputPhone.value === ''){
    error.innerHTML = 'Please enter your Phone Number';
    inputPhone.style = 'border: 1px solid red;'
  }
  else if (inputPhone.value.length < 9){
    error.innerHTML = 'Phone number must have min list 9 digits'
    inputPhone.style = 'border: 1px solid red;'
  }
  else if (inputPhone.value.length > 12) {
    error.innerHTML = 'Phone number must have max list 12 digits'
    inputPhone.style = 'border: 1px solid red;'
  }
  else if (inputPassword.value === ''){
    error.innerHTML = 'Please enter your Password';
    inputPassword.style = 'border: 1px solid red;'
  }
  else if (inputPassword.value.length < 8) {
    error.innerHTML = 'Password must have at leaste 8 characters';
    inputPassword.style = 'border: 1px solid red;'
  }
  else if (inputConfirmation.value === ''){
    error.innerHTML = 'Please repeate your Password';
    inputConfirmation.style = 'border: 1px solid red;'
  }
  else if (inputPassword.value !== inputConfirmation.value) {
    error.innerHTML = 'Passwords dont match';
    inputConfirmation.style = 'border: 1px solid red;'
  }
  else {
    alert('Thank you for your registration');
    error.innerHTML = '';
    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].value = '';
    }
  }
for(let i = 0; i < allInputs.length; i++){
  if(allInputs[i].value !== ''){
    allInputs[i].style = '';
  }
}
}

btn.addEventListener('click', formValidation);