import React from 'react';
import logo from '../../static/logo-big.png';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import BitButton from "../widgets/BitButton";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }

                    {
                        user
                            ? <BitButton onClick={signOut} text='Sign out' />
                            : <BitButton onClick={signInWithGoogle} text='Sign in with Google'/>
                    }
                </header>
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(App);
