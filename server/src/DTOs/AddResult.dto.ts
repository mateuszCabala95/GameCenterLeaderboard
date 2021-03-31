import { IsNumber, IsString, MinLength } from 'class-validator';
import { AddResult } from '../out_spec';


class AddResultDTO implements AddResult{

  @IsString()
  @MinLength(3)
  player!: string

  @IsNumber()
  score!: number;

}

export default AddResultDTO
