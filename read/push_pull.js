use("3pm")

// db.scores.find()

// ?remove subjects whose obtaines is leass than 68 in Dipesh

// db.scores.updateOne({
//     name:"Dipesh"
// },
// {
//     $pull:{
//         scores:{obtained:{$lt:68}}
//     }
// })

// db.scores.find()

// ?remove DataScience subject from Anit's scores
// db.scores.updateOne({
//     name:"Anit"
// },
// {
//     $pull:{
//         scores:{subject:"DataScience"}
//     }
// })

// OR
// db.scores.updateOne({
//     name:"Anit"
// },
// {
//     $pullAll:{
//         scores:[
//             {
//                 subject:"Math",
//                 obtained:73
//             }
//         ]
//     }
// })

// ?add following scores on Anit
// ?subject:"Computer",obtained:95
// ?subject:"Data mining",obtained:82

db.scores.updateOne({
    name: "Anit"
}, {
    $push: {
        $each: {

        }

        subject: "Computer",
        obtained: 95
    }
})

db.scores.find()