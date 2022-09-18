const Course = require("../model/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /home
  index(req, res) {
    // Course.find({}, function(err, courses, next){
    //     if(!err){
    //     res.json(courses)
    //     }
    //     else{
    //         next(err);
    //         // res.status(400).json({error: 'ERROR'})
    //     }
    // });

    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch((err) => next(err));

    // res.json({
    //     name:'test'
    // });

    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
