import {Exercise} from './exercise';

export class Workout {
  workoutId: number | null;
  title: string | null;
  description: string | null;
  userID: number | null;
  exercises:Exercise[] | null;

  constructor(title: string, description: string, userID:number, workoutId: number,exercises:Exercise[]);
  constructor(title: string, description: string, userID:number, workoutId: number);
  constructor(title: string, description: string, userID:number);
  constructor(
    title?: string,
    description?: string,
    userID?:number,
    workoutId?: number,
    exercises?:Exercise[]
  ){
    this.workoutId = workoutId ?? null;
    this.title = title ?? null;
    this.description = description ?? null;
    this.exercises = exercises ?? null;
    this.userID = userID ?? null;
}

}
