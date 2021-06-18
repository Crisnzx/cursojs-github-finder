class Github {

   constructor () {
      this.config = {
         headers: {
            Authorization: 'token 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'
         }
      }
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
   }

   async getUser(userName) {
      const profileResponse = await fetch(`https://api.github.com/users/${userName}`, this.config);
      
      const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config)


      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return {
         profile,
         repos
      }
   }

}