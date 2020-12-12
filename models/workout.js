//require the mongoose package
const mongoose = require("mongoose");

//set up schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
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
                required: "Enter the duration"
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
            distance: {
                type: Number,
                    }
            }
        ]
    },{
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }

);

workoutSchema.virtual('totalDuration')
    .get(function () {
        return this.exercises.map(e => e.duration).reduce((d, a) => a + d, 0)
    });

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;