export class Exercise {
  ExerciseID: number;
  Name: string;
  Description: string;
  gifLink: string;
  repetitions: number;
  sets: number;
  hasWeight: boolean;
  weight: number;
  XP_Total: number;
  XP_breast: number;
  XP_Back: number;
  XP_leg: number;
  XP_triceps: number;
  XP_ass: number;
  XP_biceps: number;
  XP_flexibility: number;
  XP_shoulder: number;

  //TODO: Constructor anpassen, erstmal für Testzwecke nur halb
  constructor(ExerciseID: number,Name: string,Description: string,gifLink: string, hasWeight:boolean);
  constructor();
  constructor(
    ExerciseID?: number,
    Name?: string,
    Description?: string,
    gifLink?: string,
    hasWeight?:boolean
  ){
  this.ExerciseID = ExerciseID ?? 0;
  this.Name = Name ?? "";
  this.Description = Description ?? "";
  this.gifLink = gifLink ?? "";
  this.repetitions = 0;
  this.sets = 0;
  this.hasWeight = hasWeight ?? false;
  this.weight = 0;
  this.XP_Total = 0;
  this.XP_breast = 0;
  this.XP_Back = 0;
  this.XP_leg = 0;
  this.XP_triceps = 0;
  this.XP_ass = 0;
  this.XP_biceps = 0;
  this.XP_flexibility = 0;
  this.XP_shoulder = 0;
}
}

