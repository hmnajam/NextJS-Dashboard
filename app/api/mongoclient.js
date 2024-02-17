import { MongoClient, ServerApiVersion } from 'mongodb';

const mongoURL =
  'mongodb+srv://najam1:cGxJ0o74fNAXDg4t@cluster0.sxwdi4w.mongodb.net/?retryWrites=true&w=majority';

export const mongoClient = new MongoClient(mongoURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default mongoClient;
