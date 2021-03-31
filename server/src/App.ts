import cors from 'cors';
import express, { Application } from 'express';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import 'dotenv/config';


class App {

  private readonly _app: Application = express();
  private readonly _port = process.env.PORT;

  constructor(controllers: []) {
    this.connectWithDB();
    this.initMiddlewares();
    this.initControllers(controllers);
  }

  private connectWithDB = (): void => {
    const mongoServer = new MongoMemoryServer();

    mongoServer.getUri().then((mongoUri) => {
      const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      };

      mongoose.connect(mongoUri, mongooseOpts)
        .then(() => console.log('Connected With DB'))
        .catch(e => console.log(e.message));
    });
  };

  private initMiddlewares = (): void => {
    this._app.use(express.json());
    this._app.use(cors());
  };

  private initControllers = (controllers: []) => {

  };

  public listen = (): void => {
    this._app.listen(this._port, () => {
      console.log('Server works')
    });
  };


}

export default App;
