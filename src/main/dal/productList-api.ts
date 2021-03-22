import firebase from 'firebase'

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

const productsRef = firebase.database().ref('products/')
    
export const productListAPI = {
    
    addProduct(product: any) {
       productsRef.push (product)
    }
}

export type ProductType = {
    id: string,
    name: string,
    price: string
}

export type CreateProductType = {
    name: string
    price: string
}

export type FetchProductType = {
    [key: string]: CreateProductType
}