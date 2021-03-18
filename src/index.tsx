import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.scss';
import App from './main/ui/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './main/bll/store';

const firebaseConfig = {
    apiKey: "AIzaSyCuCDnRkQehVcZFZxKL89UaCmunK9dAHsw",
    authDomain: "online-shop-43cbb.firebaseapp.com",
    databaseURL: "https://online-shop-43cbb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "online-shop-43cbb",
    storageBucket: "online-shop-43cbb.appspot.com",
    messagingSenderId: "460984895052",
    appId: "1:460984895052:web:6f6c52938a4209250356e9"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,document.getElementById('root')
)

