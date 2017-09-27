use test;

// this is like mysql show tables in a database
db.getCollectionNames();

// rename table (collection name) from restaurants to renamed_restuarants
// rename table (collection name) from restaurants to renamed_restuarants
db.restaurants.renameCollection('renamed_restuarants');

// rename table (collection name) from renamed_restuarants to restaurants
db.renamed_restuarants.renameCollection('restuarants');

db.restaurants.findOne({'name' : 'Wendy\'S'});

db.restaurants.count();

// search with name "Wen" 
// case insensitive
db.restaurants.count({'name' : /Wen/i});

// regular expression
// start with 3 letter and one or more white space character
db.restaurants.findOne({'name' : {$regex: /^\w{3}\s+/});
    
// forEach and limit function
// fetch 10 record 
db.restaurants.find().limit(10).forEach( 
    function(Doc) { 
        print( "restaurant name: " + Doc.name ); 
});
  
 
// sort by name descending
db.restaurants.find().sort({name: -1}).limit(10).forEach( 
	function(Doc) { 
		print( "restaurant name: " + Doc.name ); 
});

// sort ascending and not equal blank string
db.restaurants.find({"name" : {"$ne" : ""}}).sort({name: 1}).limit(10).forEach( 
	function(Doc) { 
		print( "restaurant name: " + Doc.name ); 
});
    
// same as show tables
db.getCollectionNames();

// rename table (collection name) from restaurants to renamed_restuarants
db.restaurants.renameCollection('renamed_restuarants');