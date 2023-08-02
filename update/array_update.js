use("3pm")

// ? update Array

// db.scores.find()

// db.scores.updateOne({name:"Sanjeev",
// "scores.subject":"Science"
// },
// {
//     $set:{
//         "scores.$.subject":"Commerce"
//     }
// })

// db.scores.find()

//* $ operator => matching object

// ?change social to dataScience of Anit
// db.scores.updateOne({name:"Anit",
// "scores.subject":"Social"
// },
// {
//     $set:{
//         "scores.$.subject":"DataScience"
//     }
// })

// db.scores.find()

// ?increase sandip's social marks by 15

// db.scores.updateOne(
//     {
//       name: "Sandip",
//       "scores.subject": "Social"
//     },
//     {
//       $inc: {
//         "scores.$.obtained": 15
//       }
//     }
//   );

//   db.scores.find();

// ?update marks of all subjects
// db.scores.updateOne(
//         {
//           name: "Sandip",
//           "scores.subject": "Social"
//         },
//         {
//           $set: {
//             "scores.$[].obtained": 69
//           }
//         }
//       );

// db.scores.find();

//? decrease marks of every subject by 5 of sandip
// db.scores.updateOne(
//     {
//       name: "Sandip"
//     },
//     {
//       $inc: {
//         "scores.$[].obtained": -5
//       }
//     }
//   );

// db.scores.find();