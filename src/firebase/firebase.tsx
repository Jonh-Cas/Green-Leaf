import { FirebaseApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { Alert } from "react-native";
import { app as config } from "./config";


class firebaseApp {
    
    app: FirebaseApp;
    auth: Auth;


  constructor(){
       this.app = config;
       this.auth = getAuth(this.app)
  }

   createNewUser = (email: string, password:string) => {
       return new Promise( (resolve, reject) => {
          try {
            createUserWithEmailAndPassword( this.auth, email, password )
            .then( resp => {
              console.log(resp.user);
              if( resp.operationType === 'signIn' ){
                sendEmailVerification(resp.user).then( () => {
                  resolve('sendEmail')
               })
              }else{
                resolve( 'failed' )
              }
           })
          } catch (error) {
            reject(error)
          }

      })
      .catch( err => console.log(err) )
  }

}

export default new firebaseApp;