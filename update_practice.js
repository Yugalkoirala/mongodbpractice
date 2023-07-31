use("3pm")

// db.scores.find()

// db.scores.insertOne({
//     "name": "Santosh",
//     "location": {
//       "temporary": "Bhaktpaur",
//       "permanent": "Lalitpur"
//     },
//     "scores": [
//       {
//         "subject": "Science",
//         "obtained": 72
//       },
//       {
//         "subject": "Social",
//         "obtained": 65
//       },
//       {
//         "subject": "Math",
//         "obtained": 81
//       }
//     ],
//     "lowestScore": 41.5,
//     "age": 24
// })

// db.scores.find()

// ?1.update lowestScore of Dipesh to 51,
// ?temporary location to "Biratnagar"

// db.scores.updateOne({name:"Dipesh"},{
//     $set:{
//         lowestScore:51,
//         "location.temporary":"Biratnagar"
//     }
// })

// db.scores.find()

// ?Change name of Santosh to Sandip

// db.scores.updateOne({name:"Santosh"},{
//         $set:{
//             name:"Sandip"
//         }
//     })

// db.scores.find()

// ?2.increase age of Dipesh by 2
// db.scores.update({name:"Dipesh"},{
//     $inc:{
//         totalAge:2
//     }
// })

// db.scores.find()

// ?3.decrease lowestScore of Dipesh by 9
// db.scores.update({name:"Dipesh"},{
//         $inc:{
//             lowestScore:-9
//         }
//     })

// db.scores.find()

// ?4. divide age of Anit by 2
// db.scores.update({name:"Anit"},{
//         $mul:{
//             totalAge:0.5
//         }
//     })

// db.scores.find()

// ?5.multiply age of Sanjeev by 1.5
// db.scores.update({name:"Anit"},{
//             $mul:{
//                 totalAge:1.5
//             }
//         })

// db.scores.find()