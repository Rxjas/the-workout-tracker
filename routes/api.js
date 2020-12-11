const router = require("express").Router();
const db = require("../models/workout.js");

// GET workouts route
router.get('/', async (req, res) => {
    db.find({})
    .sort({ day: -1 })
    .then(dbWorkouts =>{
        res.json(dbWorkouts)
    })
    .catch (error => {
        console.log(error)
        res.status(400).json(error)
    });
});

// POST workouts route NEW WORKOUT
router.post('/', async ({ body }, res) => {
    try {
        const results = await db.create(body);
        res.json(results);
    }
    catch (error) {
        console.log('POST: ' + error)
        res.status(400).json(error)
    }
});

// PUT route
router.put('/:id', async (req, res) => {
    const { params, body } = req;
    try {
        let savedExercises = [];
        const prevWorkout = await db.findById(params.id);
        savedExercises = prevWorkout.exercises;
        totalExercises = [...savedExercises, body];
        res.json(await db.findByIdAndUpdate(params.id, { exercises: totalExercises }));  
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
});

// get route for workout range
router.get('/range', async (req, res) => {
    try {
        const result = await db.find({}).sort({ day: -1 }).limit(7);
        res.json(result);
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
});
//export all above in router
module.exports = router;