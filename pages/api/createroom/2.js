import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);

  if (!client.isConnected()) {
    await client.connect();
  }

  return client;
}

export default async function handler(req, res) {
  try {
    const { adminId } = req.query;

    if (req.method === 'GET') {
      // Retrieve the room with the provided roomId
      const client = await connectToDatabase();
      const db = client.db('database');
      const collection = db.collection('requests');

      const room = await collection.findOne({ adminUser: adminId });

      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      return res.status(200).json(room);
    } else if (req.method === 'DELETE') {
      // Delete the room with the provided roomId
      const client = await connectToDatabase();
      const db = client.db('database');
      const collection = db.collection('requests');

      const deleteResult = await collection.deleteOne({ roomId });

      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ error: 'Room not found' });
      }

      return res.status(204).end();
    } else if (req.method === 'POST') {
      // Create a new room
      const data = req.body;

      const client = await connectToDatabase();
      const db = client.db('database');
      const collection = db.collection('requests');

      // const newRoom = {
      //   roomId: generateRoomId(), // Generate a new roomId (implement your logic)
      //   roomName,
      // };

      await collection.insertOne(data);

      return res.status(201).json(data);
    } else {
      // Handle other HTTP methods if needed
      return res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
