var express = require('express');
var router = express.Router();
var model = require('../model');
var Post = model.Post;

/* GET home page. */
router.get('/', function(req, res, next) {
	Post.find({}, function(err, items){
		res.render('index', { title: 'Entry List', items: items })
	});
});

router.form = function(req, res){
  res.render('form', { title: 'New Entry' })
};

router.create = function(req, res){
	var newPost = new Post(req.body);
	newPost.save(function(err){
		if (err)
		{
			console.log(err);
			res.redirect('back');
		}
		else
		{
			res.redirect('/');
		}
    });
};

module.exports = router;
