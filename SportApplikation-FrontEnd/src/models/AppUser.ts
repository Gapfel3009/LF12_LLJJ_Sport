export class AppUser {
  userID: number;
  email: string;
  passwordHash: string;
  lastWorkout: Date;
  username: string;
  streak: number;
  xpTotal: number;
  xpBack: number;
  xpShoulders: number;
  xpLegs: number;
  xpTriceps: number;
  xpAbs: number;
  xpGlutes: number;
  xpBiceps: number;
  xpFlexibility: number;
  avatarID: number;
  flappyHighScore: number = 0;

  constructor(userID: number,
  email: string,
  passwordHash: string,
  lastWorkout: Date,
  username: string,
  streak: number,
  xpTotal: number,
  xpBack: number,
  xpShoulders: number,
  xpLegs: number,
  xpTriceps: number,
  xpAbs: number,
  xpGlutes: number,
  xpBiceps: number,
  xpFlexibility: number,
  avatarID: number,
  flappyHighScore: number) {
    this.userID = userID;
    this.email = email;
    this.passwordHash = passwordHash;
    this.lastWorkout = lastWorkout;
    this.username = username;
    this.streak = streak;
    this.xpTotal = xpTotal;
    this.xpBack = xpBack;
    this.xpShoulders = xpShoulders;
    this.xpLegs =xpLegs;
    this.xpTriceps = xpTriceps;
    this.xpAbs = xpAbs;
    this.xpGlutes = xpGlutes;
    this.xpBiceps = xpBiceps;
    this.xpFlexibility = xpFlexibility;
    this.avatarID = avatarID;
    this.flappyHighScore = flappyHighScore;
  }

  addXpTotal(amount: number): void {
    this.xpTotal += amount;
  }

  addXpBack(amount: number): void {
    this.xpBack += amount;
  }

  addXpShoulders(amount: number): void {
    this.xpShoulders += amount;
  }

  addXpLegs(amount: number): void {
    this.xpLegs += amount;
  }

  addXpTriceps(amount: number): void {
    this.xpTriceps += amount;
  }

  addXpAbs(amount: number): void {
    this.xpAbs += amount;
  }

  addXpGlutes(amount: number): void {
    this.xpGlutes += amount;
  }

  addXpBiceps(amount: number): void {
    this.xpBiceps += amount;
  }

  addXpFlexibility(amount: number): void {
    this.xpFlexibility += amount;
  }

  setLastWorkoutDate(date : Date):void{
    this.lastWorkout = date;
  }
}
