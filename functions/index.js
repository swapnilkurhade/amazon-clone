const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('sk_test_51PAWbUSIiRRQ4Mh8e4ZarlJ884NM9q4Epdw2pSUSog13uo2Go6CwMVZIyyPjxvZojSrFv3FiUPoJPtbl8IcBY27600Aa7rIfQ4')

// App config
const app = express();
// Middlewares
app.use(cors({ origin : true}));
app.use(express.json());
// Api Routes
app.get('/', (req, res)=>{
    res.status(200).send('Hello word')
})

app.post('/payments/create', async(req, res)=>{

    const total = req.query.total;
    console.log('Payment request received....', total)
    const pi = await stripe.paymentIntents.create({
        amount : total,
        currency : 'usd'     
    })

    res.status(201).send({
        clientSecret : pi.client_secret,

    })
})

// Listen command
exports.api = functions.https.onRequest(app);












// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
