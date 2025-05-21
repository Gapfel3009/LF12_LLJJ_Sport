import {Exercise} from './exercise';

export class Workout {
  workoutID: number | null;
  title: string | null;
  description: string | null;
  creator: string | null;
  exercises:Exercise[] | null;

  constructor(workoutID: number, title: string, description: string, creator:string, exercises:Exercise[]);
  constructor();
  constructor(
    workoutID?: number,
    title?: string,
    description?: string,
    creator?:string,
    exercises?:Exercise[]
  ){
    this.workoutID = workoutID ?? null;
    this.title = title ?? null;
    this.description = description ?? null;
    this.exercises = exercises ?? null;
    this.creator = creator ?? null;
}

}
