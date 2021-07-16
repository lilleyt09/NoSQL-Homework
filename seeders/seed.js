const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/workouts', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const workoutsSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: 'cardio',
        name: 'Run',
        duration: 45,
        distance: 2.5,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: 'cardio',
        name: 'Run',
        duration: 40,
        distance: 2.5,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: 'cardio',
        name: 'Run',
        duration: 50,
        distance: 2.7,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: 'cardio',
        name: 'Run',
        duration: 50,
        distance: 3,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 205,
        reps: 5,
        sets: 5,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 205,
        reps: 5,
        sets: 5,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: 'cardio',
        name: 'Run',
        duration: 60,
        distance: 3,
      },
    ],
  },
];

db.Workouts.deleteMany({})
  .then(() => db.Workouts.collection.insertMany(workoutsSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
