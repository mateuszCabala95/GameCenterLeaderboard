import { AddResult, Score } from '../out_spec';
import ScoreModel from '../models/Score.model';
import PlayerModel from '../models/Player.model';

class LeaderboardService {

  getTop10 = (): Promise<Score[]> => {

    return ScoreModel.find().sort({score: 'desc'}).limit(10).populate("player")
      .then((result: Score[]) => {
        return result
      })
      .catch((e: { message: string | undefined; }) => {
        new Error(e.message)
      })
  }

  addResult = (resultFromReq: AddResult): Promise<Score> => {

    let {score, player: name} = resultFromReq

    const player = new PlayerModel({name})
    player.save().then().catch((e: { message: string | undefined; }) => {
      new Error(e.message)
    })

    return ScoreModel.create({
      player,
      score
    }).then(result => result).catch((e: { message: string | undefined; }) => {
      new Error(e.message)
    })

  }

}

export default LeaderboardService
