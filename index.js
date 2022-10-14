import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from './serviceAccount.js';

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore();

// const newProducts = {
//     name: "Shampoo",
//     oz: "24oz",
//     price: "$19.99",
// }


// db.collection('Products').add(newProducts)
// .then(doc=> console.log('New products added', doc.id))
// .catch(console.error)

// db.collection('Products').get()
//     .then(collection => [
//         collection.docs.forEach(doc => {
//             console.log(doc.id, doc.data())

//         })
// ])
// .catch(console.error)


db.collection('Products')
    .doc('6o8SOCejJar7COAnzgW7')
    .update({ getProducts: 'nail clipers', price: "$10.99" })
    .then(getProducts)
    .catch(console.error)

function getProducts() {
    db.collection('Products').doc('6o8SOCejJar7COAnzgW7').get()
        .then(doc => console.log(doc.data()))
        .catch(console.error)
}
