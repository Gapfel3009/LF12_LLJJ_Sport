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
  avatarID: number) {
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
  }

}
