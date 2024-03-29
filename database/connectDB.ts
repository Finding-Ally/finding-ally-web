// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const url = process.env.MONGODB_URI
const options = {
  // other options...
  connectTimeoutMS: 60000,
}


let client
let clientPromise : Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).

    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise: Promise<MongoClient>;
    };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(url, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise; 
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(url, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise