CREATE TABLE if not exists avatar
(
    avatar_id SERIAL PRIMARY KEY,
    filename  VARCHAR(255),
    full_path VARCHAR(255)
);
CREATE TABLE if not exists app_user
(
    user_id        SERIAL PRIMARY KEY,
    email_address  VARCHAR(255) NOT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    username       VARCHAR(100),
    avatar_id      INTEGER REFERENCES avatar (avatar_id),
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
    title      VARCHAR(100),
    userid    INTEGER,
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
    );
CREATE TABLE if not exists user_workout
(
    user_workout_id SERIAL PRIMARY KEY,
    user_id      INTEGER NOT NULL REFERENCES app_user (user_id),
    workout_id   INTEGER NOT NULL REFERENCES workout (workout_id)
    );
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


-- Testdaten --
INSERT INTO workout (title, userid, description)
SELECT 'Ganzkörper Workout', 1, 'Einsteigerfreundliches Ganzkörpertraining'
WHERE NOT EXISTS (SELECT 1 FROM workout);

INSERT INTO workout (title, userid, description)
SELECT 'Cardio Blast', 1, 'Intensives Ausdauertraining'
WHERE NOT EXISTS (
    SELECT 1 FROM workout WHERE title = 'Cardio Blast');
--Avatar--
INSERT INTO avatar (filename, full_path)
SELECT 'avatar2.png', 'C:\Ordern\avatar2.png'
WHERE NOT EXISTS (SELECT 1 FROM avatar);

INSERT INTO avatar (filename, full_path)
SELECT 'avatar3.png', 'C:\Ordern\avatar3.png'
WHERE NOT EXISTS (
    SELECT 1 FROM avatar WHERE filename = 'avatar3.png');
--User--
INSERT INTO app_user (email_address, password_hash, username, avatar_id, streak, xp_total)
SELECT 'user1@example.com', 'hash1', 'userAdmin', 1, 1, 250
WHERE NOT EXISTS (SELECT 1 FROM app_user);
INSERT INTO app_user (email_address, password_hash, username, avatar_id, streak, xp_total)
SELECT 'testuser1@example.com', 'hash1', 'testuser', 1, 1, 250
WHERE NOT EXISTS (
    SELECT 1 FROM app_user WHERE username = 'testuser');
--Exercise--
INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Push Ups', 'Klassische Liegestütze', NULL, FALSE,
       100, 50, 0, 20, 0, 10, 10, 0, 10, 0
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Push Ups');

INSERT INTO exercise (
    name, description, gif_link, has_weights,
    xp_total, xp_chest, xp_back, xp_shoulders, xp_legs,
    xp_triceps, xp_abs, xp_glutes, xp_biceps, xp_flexibility
)
SELECT 'Lunges', 'Ausfallschritte mit Körpergewicht', NULL, FALSE,
       120, 0, 10, 10, 60, 0, 10, 10, 0, 20
WHERE NOT EXISTS (SELECT 1 FROM exercise WHERE name = 'Lunges');

INSERT INTO user_workout (user_id, workout_id)
SELECT 1, 1
WHERE NOT EXISTS (
    SELECT 1 FROM user_workout WHERE user_id = 1 AND workout_id = 1
);

INSERT INTO user_workout (user_id, workout_id)
SELECT 1, 2
WHERE NOT EXISTS (
    SELECT 1 FROM user_workout WHERE user_id = 1 AND workout_id = 2
);

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
SELECT 2, 2, 1, 4, 12, NULL
WHERE NOT EXISTS (
    SELECT 1 FROM workout_exercise WHERE workout_id = 2 AND exercise_id = 2
);