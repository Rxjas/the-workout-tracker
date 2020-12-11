//require the mongoose package
const mongoose = require("mongoose");

//set up schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {type: Date, default: new Date()},
        excercises: [
            {
             type: {
                type: String,
                trim: true,
                required: "Enter the type of workout"
                },
            name: {
                type: String,
                trim: true,
                required: "Enter the name of workout"
                },
            duration: {
                type: Number,
                },
            weight: {
                type: Number,
                },
            reps: {
                type: Number,
                },
            sets: {
                type: Number,
                 },
            duration: {
                type: Number,
                    }
            }
        ]
    },

);



const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;