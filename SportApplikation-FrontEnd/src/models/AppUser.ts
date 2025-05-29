export class AppUser {
  userID: number;
  email: string;
  passwordHash: string;
  lastWorkout: Date;
  username: string;
  streak: number;
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
  avatarID: number;
  flappyHighScore: number = 0;

  constructor(userID: number,
  email: string,
  passwordHash: string,
  lastWorkout: Date,
  username: string,
  streak: number,
  xpTotal: number,
  xpChest: number,
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
    this.xpChest = xpChest;
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
}
