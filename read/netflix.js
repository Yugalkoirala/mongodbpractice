use("netflix")
    /*
    db.movies.insertOne({
        name:"Oppenheimer",
        director:"Nolan",
        runtime:180,
        status:"Running",
        rating:8.3,
        genre:["Thriller","Action","War","Sci-Fi"]
    }) */

/*
 db.movies.insertMany([{
    name:"Barbie",
    director:"Dunno",
    runtime:150,
    status:"Now Showing",
    rating:7.5,
    genre:["Drama","Comedy","Fantasy","Adventure"]
},
{
    name:"Oppenheimer",
    director:"Nolan",
    runtime:180,
    status:"Running",
    rating:8.3,
    genre:["Thriller","Action","War","Sci-Fi"]
},
{
    name:"Salar",
    director:"Prashant Neel",
    runtime:130,
    status:"Coming Soon",
    rating:8.1,
    genre:["Thriller","Action","War","Drama"]
},
{
    name:"Dune",
    director:"Robert",
    runtime:160,
    status:"Ended",
    rating:7.8,
    genre:["Adventure","Action","War","Sci-Fi"]
}  ,
{
     name:"Shawshank Redemption",
    director:"Elon",
    runtime:120,
    status:"Ended",
    rating:9.1,
    genre:["Prison","Drama","Crime Fiction","Mystery"]
}
]) */

//Deleting/Removing 
//db.movies.deleteOne({name:"Salar"})

//db.movies.find({rating:7.8})
//db.movies.find({director:"Prashant Neel"})
//FindOne Throws Object{} but Find throws array[]
//db.movies.findOne({_id:ObjectId('64bf9de164f871c155ea909a')})

//find movies whose rating is greator than 8
//rating>8
//$gt is used for greater than
//db.movies.find({rating:{$gt:8}})

//find movies whose rating is less than 8
//rating<8
//$lt is used for lesser than
//db.movies.find({rating:{$lt:8}})

//find movies whose rating is greater than  equal to 7.8
//rating>=7.8
//$gte is used for greater than equal
//db.movies.find({rating:{$gte:7.8}})

//find movies whose rating is less than  equal to 7.8
//rating<=7.8
//$gte is used for less than equal
//db.movies.find({rating:{$lte:7.8}})

//e$q is used for equals to but it is not mandatory to use because it can
//be done by just doing {rating:8.3} this
//db.movies.find({rating:{$eq:8.3}})

//$ne is used for not equals to
//db.movies.find({rating:{$ne:8.3}})

//LOGOCAL OPERATORS=>$and, $or, $not, $nor
//$or
//runtime:120 or runtime:160
//db.movies.find({$or:[{runtime:120},{runtime:160}]})

//db.movies.find({genre:"War"})

//db.movies.find({$and:[{genre:"War"},{genre:"Sci-Fi"}]})
//db.movies.find({$or:[{genre:"War"},{genre:"Sci-Fi"},{rating:{$gte:7.8}}]})

// db.movies.find({$or:[{director:"Elon"},{director:"Robert"}]})

/*
db.movies.insertOne({
    name:"Shutter Island",
    director:"Nolan",
    runtime:160,
    status:"Running",
    rating:8.3,
    genre:["Thriller","Action","War","Sci-Fi"]
})*/

// db.movies.find()

// db.movies.find([{$and:[{director:"Nolan"},{runtime:160}]}])
// db.movies.find({status:"Running",genre:"Sci-Fi"})

// db.movies.find({$and:[{rating:{$lt:8}},{status:"Ended"},{genre:"War"}]})

// db.movies.find({director:{$not:{$eq:"Nolan"}}})
// equivalent
// db.movies.find({director:{$ne:"Nolan"}})

// db.movies.find()
// ? $in
// ? find movies whose rating is either 9.1 or 7.8 or 8.3

// db.movies.find({$or:[{rating:9.1},{rating:7.8},{rating:8.3}]})
// db.movies.find({rating:{$in:[9.1,7.8,8.3]}})

// db.movies.find({director:{$in:["Elon","Nolan"]}})

// ?$ nin

db.movies.find({ director: { $nin: ["Elon", "Nolan"] } })