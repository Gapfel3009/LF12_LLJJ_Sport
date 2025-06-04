-- CREATE TABLE if not exists avatar
-- (
--     avatar_id SERIAL PRIMARY KEY,
--     filename  VARCHAR(255),
--     full_path TEXT
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
    title      VARCHAR(100),
    creator    VARCHAR(100),
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
