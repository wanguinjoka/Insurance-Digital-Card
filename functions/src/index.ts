import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const env = functions.config();

import * as algoliasearch from 'algoliasearch';
import { DataSnapshot } from 'firebase-functions/lib/providers/database';

const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('customers_search');

exports.indexCustomers = functions.firestore
    .document('customers/{customersID}')
    .onCreate((snap, context)=>{
        const data = snap.data();
        const objectID =snap.id;

        return index.addObject({
            objectID,
            ...data
        });
    });

exports.unindexCustomers =functions.firestore
    .document('customers/{customersID}')
    .onDelete((snap, conext) =>{
        const objectId = snap.id;
        
        return index.deleteObject(objectId);
    });


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
