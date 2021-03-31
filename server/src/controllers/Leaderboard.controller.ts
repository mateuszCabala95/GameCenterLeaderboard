import IController from '../interfaces/Controller.interface';
import { Request, Response, Router } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

class LeaderboardController implements IController {

  path: string = '/leaderboards';
  router: Router = Router();
  private readonly _service = new LeaderboardService();

  constructor() {
    this.initRouts()
  }

  private initRouts = (): void => {
    this.router.get(this.path, this.getTop10);
    this.router.post(this.path, this.addResult)
  };


  private getTop10 = async (req: Request, res: Response) => {
    const result = await this._service.getTop10();

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(503).end();
    }

  };

  private addResult = async (req: Request, res: Response): Promise<void> => {
    const result = await this._service.addResult(req.body);

    if (result) {
      res.status(201).json(result);
    } else {
      res.status(503).end();
    }

  };


}

export default LeaderboardController;
