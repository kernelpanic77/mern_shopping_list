const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

// @route GET api/items 
// @desc get all items
// @access Public
router.get('/', (req, res) =>{
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items 
// @desc post an item
// @access Public
router.post('/', function(req, res){
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
            .then(item => res.json(item));

});

// @route DELETE api/items 
// @desc delete an item
// @access Public
router.delete('/:id', function(req, res){
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false}));
});


module.exports = router;
