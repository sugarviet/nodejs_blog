module.exports = {
    multipleMongooseToObject : function(mongooseArray){
        return mongooseArray.map(mogoose => mogoose.toObject());
    },
    mogooseToObject: function(mogoose){
        return mogoose ? mogoose.toObject() : mogoose;
    }
}