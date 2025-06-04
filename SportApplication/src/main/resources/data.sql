-- CREATE TABLE if not exists avatar
-- (
--     avatar_id SERIAL PRIMARY KEY,
--     filename  VARCHAR(255),
--     full_path VARCHAR(255)
-- );
CREATE TABLE if not exists app_user
(
    user_id        SERIAL PRIMARY KEY,
    email_address  VARCHAR(255) NOT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    username       VARCHAR(100),
    avatar_id      INTEGER,
    last_workout   TIMESTAMP,
    streak         INTEGER,
    xp_total       INTEGER,
    xp_chest       INTEGER,
    xp_back        INTEGER,
    xp_shoulders   INTEGER,
    xp_legs        INTEGER,
    xp_triceps     INTEGER,
    xp_abs         INTEGER,
    xp_glutes      INTEGER,
    xp_biceps      INTEGER,
    xp_flexibility INTEGER
    );
CREATE TABLE if not exists workout
(
    workout_id SERIAL PRIMARY KEY,
    title      VARCHAR(100) NOT NULL,
    userid    INTEGER NOT NULL REFERENCES app_user (user_id),
    description VARCHAR(255)
    );
CREATE TABLE if not exists  exercise
(
    exercise_id    SERIAL PRIMARY KEY,
    name           VARCHAR(255),
    description    TEXT,
    gif_link       TEXT,
    has_weights    BOOLEAN,
    xp_total       INTEGER,
    xp_chest       INTEGER,
    xp_back        INTEGER,
    xp_shoulders   INTEGER,
    xp_legs        INTEGER,
    xp_triceps     INTEGER,
    xp_abs         INTEGER,
    xp_glutes      INTEGER,
    xp_biceps      INTEGER,
    xp_flexibility INTEGER
    );/*
CREATE TABLE if not exists user_workout
(
    user_workout_id SERIAL PRIMARY KEY,
    user_id      INTEGER NOT NULL REFERENCES app_user (user_id),
    workout_id   INTEGER NOT NULL REFERENCES workout (workout_id)
    );*/
CREATE TABLE if not exists workout_exercise
(
    workout_exercise_id SERIAL PRIMARY KEY,
    workout_id     INTEGER NOT NULL REFERENCES workout (workout_id),
    exercise_id    INTEGER NOT NULL REFERENCES exercise (exercise_id),
    exercise_order INTEGER,
    number_of_sets INTEGER,
    number_of_reps INTEGER,
    weight_amount  INTEGER
    );



-- --Avatar--
-- INSERT INTO avatar (filename, full_path)
-- SELECT 'avatar2.png', 'C:\Ordern\avatar2.png'
-- WHERE NOT EXISTS (SELECT 1 FROM avatar);
--
-- INSERT INTO avatar (filename, full_path)
-- SELECT 'avatar3.png', 'C:\Ordern\avatar3.png'
-- WHERE NOT EXISTS (
--     SELECT 1 FROM avatar WHERE filename = 'avatar3.png');
--User--
INSERT INTO app_user (email_address, password_hash, username, avatar_id, streak, xp_total)
SELECT 'admin', '$2a$10$VCeM7thQ7fOf.yxUOEtDsOL5U6F9Yy5jCE0FJ4VpZoF4NjCr0p5Qm', 'admin', 1, 1, 250
WHERE NOT EXISTS (SELECT 1 FROM app_user);

INSERT INTO app_user (email_address, password_hash, username, avatar_id, streak, xp_total)
SELECT 'foo', '$2a$10$GP1hwKD2QNl8QvQ.re7vlO18B4KIqzIf5GsiKzQB0UNzEfi24FK9i', 'testuser', 1, 1, 250
WHERE NOT EXISTS (
    SELECT 1 FROM app_user WHERE username = 'testuser');
-- Testdaten --
INSERT INTO workout (title, userid, description)
SELECT 'Ganzkörper Workout', 1, 'Einsteigerfreundliches Ganzkörpertraining'
WHERE NOT EXISTS (SELECT 1 FROM workout);

INSERT INTO workout (title, userid, description)
SELECT 'Cardio Blast', 1, 'Intensives Ausdauertraining'
WHERE NOT EXISTS (
    SELECT 1 FROM workout WHERE title = 'Cardio Blast');
INSERT INTO workout (title, userid, description)
SELECT 'DiscoPumper', 2, 'Intensives Discotraining'
WHERE NOT EXISTS (
    SELECT 1 FROM workout WHERE title = 'DiscoPumper');
--Exercise--
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Push Ups', 'Klassische Liegestütze', 'https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif', FALSE,
       100, 50, 0, 20, 0, 10, 10, 0, 10, 0
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Push Ups');

INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Lunges', 'Ausfallschritte mit Körpergewicht', 'https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif', FALSE,
       120, 0, 10, 10, 60, 0, 10, 10, 0, 20
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Lunges');
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Bankdrücken', 'Dullieübung', 'https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif', FALSE,
       120, 0, 10, 10, 60, 0, 10, 10, 0, 20
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Bankdrücken');
-- Curls
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Curls', 'Für die Discoboyz', 'https://fitnessprogramer.com/wp-content/uploads/2023/09/shadow-boxing-workout.gif', FALSE,
       120, 0, 10, 10, 60, 0, 10, 10, 0, 20
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Curls');

-- Push-Up
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Push-Up', 'The push-up is one of the most effective bodyweight exercises for building upper body strength, endurance, and stability. It engages multiple muscle groups, including the chest, shoulders, triceps, and core. Suitable for all fitness levels, push-ups can be modified or progressed to match individual goals. It requires no equipment and is a fundamental movement used in calisthenic, strength training, sports conditioning, and rehabilitation programs.', 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif', TRUE,
       100, 40, 0, 30, 0, 30, 0, 0, 0, 0
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Push-Up');

-- Straddle Planche
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Straddle Planche', 'The Straddle Planche is an advanced bodyweight exercise that demonstrates extreme core strength, shoulder stability, and total body control. It involves suspending your body parallel to the ground, supported only by your hands, while your legs are spread wide apart in a straddle position. It is popular in calisthenics, gymnastics, and street workout routines, requiring months or years of consistent training to achieve.', 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Straddle-Planche.gif', TRUE,
       150, 20, 10, 50, 10, 10, 30, 0, 0, 20
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Straddle Planche');

-- Single Arm Raise Push-up
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Single Arm Raise Push-up', 'The Single Arm Raise Push-Up is a push-up variation in which one arm briefly leaves the ground at the top of the movement. This brief one-arm support increases load on the working side and challenges your balance and rotational control. It is often used to improve unilateral strength, coordination, and postural integrity.', 'https://fitnessprogramer.com/wp-content/uploads/2022/08/Single-Arm-Raise-Push-up.gif', FALSE,
       110, 30, 0, 30, 0, 30, 10, 0, 10, 0
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Single Arm Raise Push-up');

-- Archer Push-Up
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Archer Push-Up', 'The Archer Push-Up is a horizontal pushing exercise where one arm performs the majority of the work while the other extends outward for balance and support. It targets the same muscles as a standard push-up but increases the load on one side. This movement is frequently used in calisthenics and functional training as a stepping stone toward single-arm push-ups.', 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Archer-Push-Up.gif', FALSE,
       115, 35, 0, 35, 0, 25, 10, 0, 10, 0
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Archer Push-Up');

-- Chest Tap Push-up
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Chest Tap Push-up', 'Gibt nix', 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Chest-Tap-Push-up.gif', FALSE,
       100, 30, 0, 25, 0, 25, 10, 0, 10, 0
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Chest Tap Push-up');

-- Lean Planche
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Lean Planche', 'The Lean Planche is a bodyweight exercise where the body is held at a forward lean while balancing on the hands. This movement builds strength in the shoulders, core, and arms, and is often used as a precursor to the more difficult Straddle and Full Planche. By leaning your body forward while maintaining support on your hands, the Lean Planche provides a foundation to build strength and control for mastering more advanced calisthenic moves.', 'https://fitnessprogramer.com/wp-content/uploads/2025/04/lean-planche.png', FALSE,
       130, 20, 10, 40, 10, 10, 30, 0, 10, 10
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Lean Planche');

/*INSERT INTO user_workout (user_id, workout_id)
SELECT 1, 1
WHERE NOT EXISTS (
    SELECT 1 FROM user_workout WHERE user_id = 1 AND workout_id = 1
);

INSERT INTO user_workout (user_id, workout_id)
SELECT 1, 2
WHERE NOT EXISTS (
    SELECT 1 FROM user_workout WHERE user_id = 1 AND workout_id = 2
);
*/
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 1, 1, 1, 3, 15, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 1 AND exercise_id = 1
);
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 1, 7, 2, 3, 15, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 1 AND exercise_id = 7
);
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 1, 9, 3, 3, 15, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 1 AND exercise_id = 9
);

INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 2, 2, 1, 4, 12, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 2 AND exercise_id = 2
);
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 3, 2, 1, 4, 12, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 3 AND exercise_id = 2
);
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 3, 1, 2, 4, 12, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 3 AND exercise_id = 1
);
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 3, 3, 3, 4, 12, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 3 AND exercise_id = 3
);
INSERT INTO workout_exercise (
    workout_id, exercise_id, exercise_order, number_of_sets, number_of_reps, weight_amount
)
SELECT 3, 4, 4, 4, 12, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 3 AND exercise_id = 4
);