const github = new Github();
const ui = new UI();

const userNameUI = document.querySelector('#username');
const everythingUI = document.querySelector('#everything');

const alertUI = document.querySelector('#alert');

let userName;

userNameUI.addEventListener('keyup', (e) => {
   userName = userNameUI.value;
   if(userName !== '') {

      github.getUser(userName)
         .then(data => {
            if(data.profile.message !== 'Not Found'){
               // Show profile
               UI.displayProfile(data.profile);
               alertUI.className = 'off';
               profileUI.className = 'on';
            } else {
               // Show alert
               alertUI.className = 'on';
               profileUI.className = 'off';
            }
         })
      profileUI.className = 'on';
      
   } else {
      UI.hideAll(profileUI, alertUI);

   }
});