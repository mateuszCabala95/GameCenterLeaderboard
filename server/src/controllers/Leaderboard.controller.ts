import IController from '../interfaces/Controller.interface';
import { Router } from 'express';

class LeaderboardController implements IController{

  path: string = '/leaderboards';
  router: Router = Router();



}

export default LeaderboardController
