CREATE TABLE Avatar (
                        AvatarID SERIAL PRIMARY KEY,
                        FileName VARCHAR(255),
                        FullPath TEXT
);
CREATE TABLE Users (
                       UserID SERIAL PRIMARY KEY,
                       Email VARCHAR(255) NOT NULL UNIQUE,
                       PasswordHash VARCHAR(255) NOT NULL,
                       Username VARCHAR(100),
                       Streak INTEGER,
                       XP_Total INTEGER DEFAULT 0,
                       XP_Chest INTEGER DEFAULT 0,
                       XP_Back INTEGER DEFAULT 0,
                       XP_Shoulders INTEGER DEFAULT 0,
                       XP_Legs INTEGER DEFAULT 0,
                       XP_Triceps INTEGER DEFAULT 0,
                       XP_Abs INTEGER DEFAULT 0,
                       XP_Glutes INTEGER DEFAULT 0,
                       XP_Biceps INTEGER DEFAULT 0,
                       XP_Flexibility INTEGER DEFAULT 0,
                       AvatarID INTEGER,
                       FOREIGN KEY (AvatarID) REFERENCES Avatar(AvatarID)
);
CREATE TABLE Workout (
                         WorkoutID SERIAL PRIMARY KEY,
                         Title VARCHAR(255),
                         Creator INTEGER,
                         FOREIGN KEY (Creator) REFERENCES Users(UserID)
);
CREATE TABLE Exercise (
                          ExerciseID SERIAL PRIMARY KEY,
                          Name VARCHAR(255),
                          XP_Total INTEGER DEFAULT 0,
                          XP_Chest INTEGER DEFAULT 0,
                          XP_Back INTEGER DEFAULT 0,
                          XP_Shoulders INTEGER DEFAULT 0,
                          XP_Legs INTEGER DEFAULT 0,
                          XP_Triceps INTEGER DEFAULT 0,
                          XP_Abs INTEGER DEFAULT 0,
                          XP_Glutes INTEGER DEFAULT 0,
                          XP_Biceps INTEGER DEFAULT 0,
                          XP_Flexibility INTEGER DEFAULT 0
);
CREATE TABLE User_Workout (
                              UserID INTEGER,
                              WorkoutID INTEGER,
                              PRIMARY KEY (UserID, WorkoutID),
                              FOREIGN KEY (UserID) REFERENCES Users(UserID),
                              FOREIGN KEY (WorkoutID) REFERENCES Workout(WorkoutID)
);
CREATE TABLE Workout_Exercise (
                                  WorkoutID INTEGER,
                                  ExerciseID INTEGER,
                                  Sequence INTEGER,
                                  Num_Sets INTEGER,
                                  Num_Reps INTEGER,
                                  PRIMARY KEY (WorkoutID, ExerciseID),
                                  FOREIGN KEY (WorkoutID) REFERENCES Workout(WorkoutID),
                                  FOREIGN KEY (ExerciseID) REFERENCES Exercise(ExerciseID)
);
