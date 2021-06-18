class Github {

   constructor () {
      this.client_id = '11c4154a4a69b5ee17dd';
      this.client_secret = '0819eff5a0ef6e21ec89fcc476fcd1278cce2b19';
   }
   async getUser(userName) {
      const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 
      const profile = await profileResponse.json();
      
      return {
         profile
      }
   }

}