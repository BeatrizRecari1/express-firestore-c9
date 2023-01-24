import { cert, initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
// TODO: need to import serviceAccount from secret file

export default function dbConnect() {
    // chech if NOT connected
    if(!getApps().length === 0) {
        // connect
            initializeApp({
                credential: cert(serviceAccount)
            })
    }
    // return db-connection
    return getFirestore()
}