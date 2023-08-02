use("3pm")

// ?Aggregation
// !use $ to denote field

// find person whose gender is male
// db.person.find({gender:"male"})

// ?aggregation=>complex query
// ?only in read operation
// ?consists of pipeline stage
// ?example of stages $match,$lookup,$unwind,$group,$skip,$limit,$project

// db.person.aggregate([
//     {
//         // same as find
//         $match:{gender:"female"}
//     },
//     {
//         // same as {name:1,gender:1}
//         $project:{
//             gender:1,
//             email:1,
//             fullName:{$concat:["$name.first"," ","$name.last"]},
//             dob:1,
//             currentAge:"$dob.age"
//         }
//     },
//     {
//         // sort in ascending order
//         $sort:{
//             currentAge:1
//         }
//     },
//     {
//         $skip:3
//     },
//     {
//         $limit:3
//     }
// ])

// find person whose gender is male and age is greater than 30
// project name, age, email, gender, state, phone
// sort result by age

db.person.aggregate([{
        $match: {
            $and: [
                { gender: "male" },
                { "dob.age": { $gt: 30 } }
            ]
        }
    },
    {
        $project: {
            fullName: { $concat: ["name.first", " ", "name.last"] },
            age: "$dob.age",
            email: 1,
            gender: 1,
            userState: "$location.state",
            phone: 1
        }
    },
    {
        $sort: {
            age: -1
        }
    },
    {
        $skip: 40
    },
    {
        $limit: 20
    }
])

// db.person.find()