
const userNameUI = document.querySelector('#username');
const everythingUI = document.querySelector('#everything');
const profileUI = document.querySelector('#profile');
const alertUI = document.querySelector('#alert');

let userName;

userNameUI.addEventListener('keyup', (e) => {
   userName = userNameUI.value;
   console.log(userName);
   if(userName !== '') {
      profileUI.className = 'on';
      alertUI.className = 'on';
   } else {
      
      profileUI.className = 'off';
      alertUI.className = 'off';
   }
});