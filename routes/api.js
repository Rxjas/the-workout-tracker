const router = require("express").Router();
const Workout = require("../models/workout");

//get route for the workouts
router.get("/api/workouts", ({ body }, res) => {
    Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

//Put route to push excercise into workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

//post route to create the workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            console.log(dbWorkout);
        })
        .catch((error) => {
            console.log(error);
        });
});

//get route for those in range
router.get("/api/workouts/range", (req, res) => {
    var days = new Date();
    days.setDate(days.getDate() - 7)
    Workout.find({ day: { "$gte": days } }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;