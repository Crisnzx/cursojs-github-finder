class UI {

   static hideAll(profileUI, alertUI) {
      profileUI.className = 'off';
      alertUI.className = 'off';
   }

   static displayProfile(profile) {

      console.log(profile);
      profileUI.innerHTML = `
         <div id="img">
            <img src="${profile.avatar_url}" alt="foto">
            <a href="${profile.html_url}" class="button">View Profile</a>
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
            <div id="list">
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
}

const profileUI = document.querySelector('#profile');