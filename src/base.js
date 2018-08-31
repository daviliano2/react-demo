import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdjJpnOKiGZvOWno1JmpccPfqT9D1ZiKc",
  authDomain: "react-catch-tutorial-58142.firebaseapp.com",
  databaseURL: "https://react-catch-tutorial-58142.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }
export default base
