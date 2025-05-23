import {Exercise} from './exercise';

export class Workout {
  workoutId: number | null;
  title: string | null;
  description: string | null;
  creator: string | null;
  exercises:Exercise[] | null;

  constructor(workoutId: number, title: string, description: string, creator:string, exercises:Exercise[]);
  constructor();
  constructor(
    workoutId?: number,
    title?: string,
    description?: string,
    creator?:string,
    exercises?:Exercise[]
  ){
    this.workoutId = workoutId ?? null;
    this.title = title ?? null;
    this.description = description ?? null;
    this.exercises = exercises ?? null;
    this.creator = creator ?? null;
}

}
