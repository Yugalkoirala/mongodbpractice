use("3pm")

// db.person.find()

// ?delete=>removes the whole document not the field
// ?deleteOne
// ?deleteMany

// db.person.deleteMany({"name.first":"victor"})

// db.person.find({"name.first":"victor"}).count()

// db.person.deleteOne({_id:ObjectId("64c6a965d24e28f7f0433c1f")})
// db.person.find({_id:ObjectId("64c6a965d24e28f7f0433c1f")})

// ?delete the person whose name is maeva wilson

// db.person.find({"name.first":"maeva","name.last":"wilson"})
// db.person.deleteOne({"name.first":"maeva","name.last":"wilson"})