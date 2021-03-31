import App from './App';
import LeaderboardController from './controllers/Leaderboard.controller';

const app = new App([new LeaderboardController()])

app.listen()
