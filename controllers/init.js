/**
 * @author rnevesphp - Romeu Neves
 * @class init
 */

class init {
   /**
    * @constructor 
    */
   constructor() {
      console.log('verificando sesión...')

      this.login;
      this.account;
      this.session = sessionStorage;
      this.varSession = this.session.getItem("auth");

      this.verifySession();
   }

   /**
    * @method verifySession verifica nuestro sesionStorage a fin de encontrar algun usuario loggeado
    */
   verifySession() {
      if (this.varSession == null || this.varSession == "") {
         console.log('Ningun usuario autenticado....')
         this.runLogin();

      } else {
         console.log('Accediendo la cuenta...')
         this.runAccount();
      }
   }

   /**
    * @method runLogin responsable de ir a parte principal de la web para que el usuario se registre o realice el login 
    */
   runLogin() {
      this.login = new auth();
   }

   /**
    * @method runAccount metodo que lleva el usuario a su cuenta y le muestra el dashboard principal
    */
   runAccount() {
      this.account = new initialPage();
      this.ct = new creator()
      this.ct.dashElem()
   }
}