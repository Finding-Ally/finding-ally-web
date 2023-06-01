import { MongoClient, ObjectId } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('database');
  return next();
}

const handler = nextConnect();

handler.use(database);

handler.post(async (req, res) => {
  const { title, description } = req.body;
  const result = await req.db.collection('request').insertOne({
    title,
    description,
  });
  res.status(201).json(result.ops[0]);
});

handler.get(async (req, res) => {
  const { id } = req.query;
  if (id) {
    const document = await req.db
      .collection('request')
      .findOne({ _id: new ObjectId(id) });
    if (!document) {
      res.status(404).end();
    } else {
      res.status(200).json(document);
    }
  } else {
    const documents = await req.db
      .collection('request')
      .find()
      .toArray();
    res.status(200).json(documents);
  }
});

handler.put(async (req, res) => {
  const { id } = req.query;
  const { title, description } = req.body;
  const result = await req.db.collection('request').updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, description } }
  );
  if (result.modifiedCount === 0) {
    res.status(404).end();
  } else {
    res.status(200).json({ _id: id, title, description });
  }
});

handler.delete(async (req, res) => {
  const { id } = req.query;
  const result = await req.db
    .collection('request')
    .deleteOne({ _id: new ObjectId(id) });
  if (result.deletedCount === 0) {
    res.status(404).end();
  } else {
    res.status(204).end();
  }
});

export default handler;
