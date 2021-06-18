class UI {

   static hideAll(userUI, alertUI) {
      userUI.className = 'off';
      alertUI.className = 'off';
   }

   static displayProfile(profile) {

      if(profile.company === null) profile.company = '';
      if(profile.blog === null) profile.blog = '';
      if(profile.location === null) profile.location = '';
   

      console.log(profile);
      profileUI.innerHTML = `
         <div id="img">
            <img src="${profile.avatar_url}" alt="foto">
            <a href="${profile.html_url}" target="_blank" class="button">View Profile</a>
         </div>
         <div id="info">
            <div>
               <div class="top-info c1">
                  <p class="content">Public Repos: ${profile.public_repos}</p>
               </div>
               <div class="top-info c2">
                  <p class="content">Public Gists: ${profile.public_gists}</p>
               </div>
               <div class="top-info c3">
                  <p class="content">Followers: ${profile.followers}</p>
               </div>
               <div class="top-info c4">
                  <p class="content">Following: ${profile.following}</p>
               </div>
            </div>
            <div class="list">
               <ul>
                  <li>Company: ${profile.company}</li>
                  <li>Website/Blog: ${profile.blog}</li>
                  <li>Location: ${profile.location}</li>
                  <li>Member Since: ${profile.created_at}</li>
               </ul>
            </div>
         </div>
      `;

   }

   static displayRepos(repos) {
      let output = '';
      console.log(repos);
      repos.forEach((repo) => {
         output += `
      <li>
         <a href="${repo.html_url}" target="_blank">${repo.name}</a>
         <div>
            <div class="top-info c2">
               <p class="content">Stars: ${repo.stargazers_count}</p>
            </div>
            <div class="top-info c2">
               <p class="content">Watchers: ${repo.watchers_count}</p>
            </div>
            <div class="top-info c2">
               <p class="content">Forks: ${repo.forks_count}</p>
            </div>
         </div>
      </li>
         `;
      });

      document.querySelector('#repositories ul').innerHTML = output;
   }
}

const userUI = document.querySelector('#user');
const profileUI = document.querySelector('#profile');
const reposUI = document.querySelector('#repositories');
const alertUI = document.querySelector('#alert');