use("3pm")

// db.person.find()
// db.person.find().count()

// find user with first name "victor" and set his email to victor@gmail.com
// ?set
// db.person.updateOne({"name.first":"victor"},{
//     $set:{
//         email:"victor@gmail.com"
//     }
// })

// find user with first name carl and state is "wicklow"
// update his email to "carl@gmail.com" and his phone number to 984512652
// db.person.updateOne({"name.first":"carl","location.state":"wicklow"},{
//     $set:{
//         email:"carl@gmail.com",
//         phone:"984512652"
//     }
// })

// db.person.findOne({"name.first":"carl","location.state":"wicklow"})


//  db.scores.insertMany([
//     {
//         name:"Sanjeev",
//         age:23,

//        highestScore:93,
//        location:{
//         temporary:"Ktm",
//         permanent:"Kavre"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:85
//          },  {
//             subject:"Social",
//             obtained:75
//          },  {
//             subject:"Math",
//             obtained:93
//          }
//        ]
//     },
//     {
//         name:"Anit",
//         age:24,

//        highestScore:95,
//        location:{
//         temporary:"Ktm",
//         permanent:"Nepalgunj"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:95
//          },  {
//             subject:"Social",
//             obtained:82
//          },  {
//             subject:"Math",
//             obtained:73
//          }
//        ]
//     },
//     {
//         name:"Dipesh",
//         age:23,

//        highestScore:98,
//        location:{
//         temporary:"Ktm",
//         permanent:"Bhaktapur"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:81
//          },  {
//             subject:"Social",
//             obtained:67
//          },  {
//             subject:"Math",
//             obtained:98
//          }
//        ]
//     }
// ])

// db.scores.find()

// update the age of sanjeev to 24
// db.scores.updateOne({_id:ObjectId("64c6ad4fed58f50c0af9b2db")},{
//     $set:{
//         age:24,
//         "location.temporary":"Lalitpur"
//     }
// })

// db.scores.find()

// ?$inc
// db.scores.updateOne({
//     name:"Anit"
// },{
//     $inc:{
//         age:2
//     }
// })

// db.scores.find()

// increase highest score of " anit " by 3
// db.scores.updateOne({name:"Anit"},{
//         $inc:{
//             highestScore:3
//         }

//     })

// db.scores.find()


// negative value decreases the value
// db.scores.updateOne({name:"Anit"},{
//     $inc:{
//         age:-4
//     }
// })

// db.scores.find()

// decrease the highest marks of each by 10
// db.scores.updateMany({},{
//     $inc:{
//         highestScore:-10
//     }
// })

// db.scores.find()


// ?$mul
// db.scores.updateMany({
//     name:"Dipesh"
// },{
//     $mul:{
//         age:2
//     }
// })

// db.scores.find()


// divide highest score by 4
// db.scores.updateMany({},{
//     $mul:{
//         highestScore:0.25
//     }
// })

// db.scores.find()

// ? $set
// if there is no specified field,it adds the field
// db.scores.updateMany({},{
//     $set:{
//         isBrilliant:true
//     }
// })

// db.scores.find()

// ? $rename => changes field name
// db.scores.updateMany({},{
//     $rename:{
//         age:"totalAge"
//     }
// })

// db.scores.find()

// change highest score to lowest score
// db.scores.updateMany({},{
//     $rename:{
//         highestScore:"lowestScore"
//     }
// })

// db.scores.find()


// find users whose age is greater than or equals to 25 and change field totalAge to age
// db.scores.updateMany({totalAge:{$gt:22}},{
//     $rename:{
//         totalAge:"age"
//     }
// })

// db.scores.find()


// ? $unset=>removes field
// db.scores.updateMany({},{
//     $unset:{
//         isBrilliant:""
//     }
// })

// db.scores.find()