// import { MongoClient } from 'mongodb';
// client = new MongoClient(uri, options)
// clientPromise = client.connect();
// export default clientPromise;

import mongoose from 'mongoose'
import { config } from '../config'

const { DATABASE_URL } = config
const options = {}

let client: null | Promise<typeof mongoose>
let clientPromise

client = mongoose.connect(DATABASE_URL, options)

export const connect = async () => {
  await client
}

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})
