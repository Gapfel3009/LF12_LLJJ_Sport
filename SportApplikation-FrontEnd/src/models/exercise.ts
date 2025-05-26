export class Exercise {
  exerciseID: number;
  name: string;
  description: string;
  hasWeights: boolean;
  gifLink: string;
  xpTotal: number;
  xpChest: number;
  xpBack: number;
  xpShoulders: number;
  xpLegs: number;
  xpTriceps: number;
  xpAbs: number;
  xpGlutes: number;
  xpBiceps: number;
  xpFlexibility: number;
  numSets: number;
  numReps: number;
  weightAmount: number;

  //TODO: Constructor anpassen, erstmal für Testzwecke nur halb
  constructor(ExerciseID: number,Name: string,Description: string,gifLink: string, hasWeight:boolean, repetitions: number, sets:number, weight:number);
  constructor(ExerciseID: number,Name: string,Description: string,gifLink: string, hasWeight:boolean);
  constructor();
  constructor(
    ExerciseID?: number,
    Name?: string,
    Description?: string,
    gifLink?: string,
    hasWeight?:boolean,
    repetitions?:number,
    sets?:number,
    weight?:number,
  ){
  this.exerciseID = ExerciseID ?? 0;
  this.name = Name ?? "";
  this.description = Description ?? "";
  this.gifLink = gifLink ?? "";
  this.numReps = repetitions ?? 0;
  this.numSets = sets ?? 0;
  this.hasWeights = hasWeight ?? false;
  this.weightAmount = weight ?? 0;
  this.xpTotal = 0;
  this.xpChest = 0;
  this.xpBack = 0;
  this.xpLegs = 0;
  this.xpTriceps = 0;
  this.xpGlutes = 0;
  this.xpBiceps = 0;
  this.xpFlexibility = 0;
  this.xpShoulders = 0;
  this.xpAbs = 0;
}

  static fromJson(json: any): Exercise {
    const e = new Exercise();
    e.exerciseID = json.exerciseID;
    e.name = json.name;
    e.description = json.description;
    e.hasWeights = json.hasWeights;
    e.gifLink = json.gifLink;
    e.xpTotal = json.xpTotal;
    e.xpChest = json.xpChest;
    e.xpBack = json.xpBack;
    e.xpShoulders = json.xpShoulders;
    e.xpLegs = json.xpLegs;
    e.xpTriceps = json.xpTriceps;
    e.xpAbs = json.xpAbs;
    e.xpGlutes = json.xpGlutes;
    e.xpBiceps = json.xpBiceps;
    e.xpFlexibility = json.xpFlexibility;
    e.numSets = json.numSets ?? 0;
    e.numReps = json.numReps ?? 0;
    e.weightAmount = json.weightAmount ?? 0;

    return e;
  }

  static fromWorkoutExerciseJson(json: any): Exercise {
    const e = new Exercise();

    const exJson = json.exercise;

    e.exerciseID = exJson.exerciseID;
    e.name = exJson.name;
    e.description = exJson.description;
    e.hasWeights = exJson.hasWeights;
    e.gifLink = exJson.gifLink;
    e.xpTotal = exJson.xpTotal;
    e.xpChest = exJson.xpChest;
    e.xpBack = exJson.xpBack;
    e.xpShoulders = exJson.xpShoulders;
    e.xpLegs = exJson.xpLegs;
    e.xpTriceps = exJson.xpTriceps;
    e.xpAbs = exJson.xpAbs;
    e.xpGlutes = exJson.xpGlutes;
    e.xpBiceps = exJson.xpBiceps;
    e.xpFlexibility = exJson.xpFlexibility;
    e.numSets = json.numSets ?? 0;
    e.numReps = json.numReps ?? 0;
    e.weightAmount = json.weightAmount ?? 0;

    return e;
  }
}

