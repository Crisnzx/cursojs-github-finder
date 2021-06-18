const github = new Github();

const userNameUI = document.querySelector('#username');
const submitUI = document.querySelector('input[type="submit"]');
const everythingUI = document.querySelector('#everything');



let userName;

submitUI.addEventListener('click', (e) => {
   userName = userNameUI.value;
   if(userName !== '') {

      github.getUser(userName)
         .then(data => {
            if(data.profile.message !== 'Not Found'){
               // Show profile and repositories
               UI.displayProfile(data.profile);
               UI.displayRepos(data.repos);
               alertUI.className = 'off';
               userUI.className = 'on';
            } else {
               // Show alert
               alertUI.className = 'on';
               userUI.className = 'off';
            }
         })
      
   } else {
      UI.hideAll(userUI, alertUI);

   }
   e.preventDefault();
});