use("3pm")
    /*
    db.friends.insertMany([
        {
            name:"Rohan",
            hobbies:["Singing","Books"],
            sportData:[
                {
                    title:"Football",
                    frequency:3
                },
                {
                    title:"Cricket",
                    frequency:2
                }
            ]
        },{
            name:"Dipesh",
            hobbies:["Books","Guitar","Hiking"],
            sportData:[
                {
                    title:"Football",
                    frequency:5
                },
                {
                    title:"Tennis",
                    frequency:1
                },
                {
                    title:"Volleyball",
                    frequency:6
                }
            ]
        },{
            name:"Aakash",
            hobbies:["Hiking","Foods","Singing"],
            sportData:[
                {
                    title:"E-gaming",
                    frequency:3
                },
                {
                    title:"Football",
                    frequency:2
                },
                {
                    title:"Basketball",
                    frequency:7
                }
            ]
        }
    ])*/

// db.friends.find()

// find friends whose hobbies is singing
// db.friends.find({hobbies:"Singing"})


// !$in is equivalent of $or

// ? $or
// find friends whose hobbies is books or foods
// db.friends.find({$or:[{hobbies:"Books"},{hobbies:"Foods"}]})
// OR

// ? $in
// db.friends.find({
// hobbies:{$in:["Books","Foods"]}
// })


// !$all is equivalent of $and

// ? $and
// db.friends.find({$and:[{hobbies:"Foods"},{hobbies:"Hiking"}]})
// OR

// ? $all
// db.friends.find({
//     hobbies:{$all:["Foods","Hiking"]}
// })


// ? $size
// db.friends.find({
//     hobbies:{$size:2}
// })


// ? $elemMatch
// *condition should match on same element of array

// db.friends.find({
//     sportData:{
//         $elemMatch:{
//             title:"Cricket",
//             frequency:{$lt:3}
//         }
//     }
// })