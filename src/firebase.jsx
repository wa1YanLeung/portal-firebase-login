import firebase from 'firebase/app'
import "firebase/auth"

// FireBase/Project name: Portal/Project settings/General
// Under "Your apps". Select CDN.
const app = firebase.initializeApp({
    //Fill in config here.
})

export const auth = app.auth()

export default app