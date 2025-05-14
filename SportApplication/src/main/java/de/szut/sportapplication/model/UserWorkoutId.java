package de.szut.sportapplication.model;

import java.util.Objects;

    public class UserWorkoutId implements java.io.Serializable {

        private int userId;
        private int workoutId;

        public UserWorkoutId() {}

        public UserWorkoutId(int userId, int workoutId) {
            this.userId = userId;
            this.workoutId = workoutId;
        }

        @Override
        public boolean equals(Object other) {
            if (this == other) return true;
            if (!(other instanceof de.szut.sportapplication.model.UserWorkoutId that)) return false;
            return Objects.equals(userId, that.userId) &&
                    Objects.equals(workoutId, that.workoutId);
        }

        @Override
        public int hashCode() {
            return Objects.hash(userId, workoutId);
        }
    }
