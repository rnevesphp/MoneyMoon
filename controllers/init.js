/**
 * @author rnevesphp - Romeu Neves
 * @class init verify, register, save and do the login
 * 
 * @version 1.0.1
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
    * @method runLogin Responsable de ir a parte principal de la web para que el usuario se registre o realice el login 
    * @this login representa la creación de una nueva clase que actua para el login del usuario.
    */
   runLogin() {
      this.login = new auth();
   }

   /**
    * @method runAccount Metodo que lleva el usuario a su cuenta y le muestra el dashboard principal
    * @this ct representa la llamada a una nueva clase creator
    */
   runAccount() {
      this.account = new initialPage();
      this.ct = new creator()
      this.ct.dashElem()
   }
}