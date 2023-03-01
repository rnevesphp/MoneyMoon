class init {
   constructor() {
      console.log('AQUI LLEGA EL MAAAAAIN')

      this.login;
      this.account;
      this.session = sessionStorage;
      this.varSession = this.session.getItem("auth");

      this.verifySession();
   }

   verifySession() {
      if (this.varSession == null || this.varSession == "") {
         console.log('tirando pal registro / login')
         this.runLogin();

      } else {
         console.log('tirando pa la cuenta')
         this.runAccount();
      }
   }

   runLogin() {
      this.login = new auth();
   }

   runAccount() {
      this.account = new initialPage();
   }
}