import * as express from 'express'
import { DemoRoutes } from './demo.route';

const app = express();

export class AppRoutes {
  get routes() {
    app.use("/demo", new DemoRoutes().routes);
    return app;
  }
}