/** 
 * @class auth Make all verifications to register and logger users
 * 
 * @version 1.0.1
 * 
*/
class auth {
   /**
    * @author Romeu Neves - TheUncoder
    * 
    * @constructor 
   */
   constructor() {
      console.log("HOLA AUTH.....");

      this.nDash;
      this.auth = "auth";

      this.storage = localStorage;
      this.sStorage = sessionStorage;

      this.regBtn = document.getElementById("regBtn");
      this.regBtn.addEventListener("click", this.Reg.bind(this));

      this.logBtn = document.getElementById("logBtn");
      this.logBtn.addEventListener("click", this.login.bind(this));
   }

   /**
    * @method Reg catch all info used on register and verify if is null or void 
    * and send this info to a JSON to save the info into the LocalStorage. 
    */
   Reg() {
      this.user = document.getElementById("name_register").value;
      this.userMail = document.getElementById("email_reg").value;
      this.userPass = document.getElementById("password_reg").value;

      this.userInfoToSetted = this.createUser()

      /**
       * Operación ternaria - Sustituir el operacional IF por Ternaria a fin de dejar el código optimizado
       */
      this.user == "" || this.user == null &&
         this.userMail == "" || this.userMail == null &&
         this.userPass == "" || this.userPass == null
         ?
         console.log("Rellena los campos de registro") : console.log("Registrado correctamente...")
      this.setUserLocally(this.auth, this.userInfoToSetted);
   }

   /**
    * @method createUser create an object with the user infor
    * @returns an object with the user information
   */
   createUser() {
      this.InfoUserReg = {
         username: this.user,
         mail: this.userMail,
         password: this.userPass,
      };

      console.log(this.InfoUserReg);
      return this.InfoUserReg;
   }

   /**
    * @method setUserLocally insert the user info into the LocalStorage
    * 
    * @param {string} user - is the key used to find the user credentials into localStorage.
    * @param {string} infoUser - Is the object with all the user credentials used to register.
    */
   setUserLocally(user, infoUser) {
      this.storage.setItem(user, JSON.stringify(infoUser));

      console.log("Datos recogidos\nDatos registrados");
      this.reloadPage();
   }

   /**
   * @method reloadPage refresh the page after the user completes the register 
   */
   reloadPage() {
      window.alert("Estás registrado correctamente....\nHaz el login");
      location.reload();
   }

   /**
    * @method login get all the user info used to login and check if this info is 
    * info is null or void 
    */
   login() {
      this.userLog = document.getElementById("nameLog").value;
      this.mailLog = document.getElementById("mailLog").value;
      this.passLog = document.getElementById("passLog").value;

      this.userLog == "" || this.userLog == null &&
         this.mailLog == "" || this.mailLog == null &&
         this.passLog == "" || this.passLog == null
         ? console.log("campos del login vacio") : console.log('Verificando datos de login')
      this.verifyLocal();
   }

   /**
    * @method getUser get the user information and insert into an object with his credentials
    * 
    * @returns an object with your attributes thats contains mail and password used 
    * for register
    */
   getUser() {
      console.log("Datos recogidos");
      this.showInfoUser = JSON.parse(this.storage.getItem(this.auth));

      this.userDataInsideStorage = {
         username: this.showInfoUser.username,
         mail: this.showInfoUser.mail,
         password: this.showInfoUser.password
      }
      return this.userDataInsideStorage;
   }

   /**
    * @method verifyLocal we use to make a localStorage verification, 
    * if the user exists. 
    */
   verifyLocal() {
      this.storage.getItem(this.auth) == null ||
         this.storage.getItem(this.auth) == "" ? console.log(`Usuario no encontrado`) : console.log(`Usuario encontrado`)
      this.verifyAuth();
   }

   /**
    * @method verifyAuth verify if the info of user used to login is the same info 
    * used on register. 
    */
   verifyAuth() {
      this.userInfo = this.getUser(this.auth);

      console.log(this.userInfo)

      this.nameSeted = this.userInfo.username
      this.mailSeted = this.userInfo.mail
      this.passSeted = this.userInfo.password

      console.log(`Name: ${this.nameSeted}\nMail: ${this.mailSeted}\nPass: ${this.passSeted}`);

      this.InfoUserLog = {
         username: this.nameSeted,
         mail: this.mailSeted,
         password: this.passSeted
      }

      if (this.nameSeted == this.userLog) {
         if (this.mailSeted == this.mailLog) {
            if (this.passSeted == this.passLog) {
               console.log("Datos correctos...");
               this.userLogged(this.auth, this.InfoUserLog);
            } else {
               console.log("contraseña invalida");
            }
         } else {
            console.log("correo invalido");
         }
      } else {
         console.log('Usuario invalido')
      }
   }

   /**
    * @method userLogged is the responsible to call's the next class that's create 
    * a new dashboard with the user login 
    */
   userLogged(StorageKey, storageValue) {
      this.sStorage.setItem(StorageKey, JSON.stringify(storageValue))

      this.nDash = new initialPage();
   }
}