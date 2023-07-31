use("netflix")

// ?project
// ?sort
// ?skip
// ?limit

// db.shows.find({name:"Under the Dome"},{name:1,genres:1,_id:0})

// db.shows.find({},{name:1,rating:1})

// db.shows.find({}).limit(3)

// db.shows.find({}).skip(3)

// db.shows.find({}).skip(3).limit(2)

db.shows.find({ rating: { $gt: 7 } })