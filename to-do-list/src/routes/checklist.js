const express = require('express');
const router = express.Router();

const checkilists = require('../models/checklist')

router.get('/', async (req, res) => {
    try {
        let checkilists = await checkilists.find({});
        res.status(200).json(checkilists);
    } catch (error) {
        res.status(422).json(error)
    }
})
router.post('/', async (req, res) => {
    let { name } = req.body;

    try {
        let checkilists = await checkilists.created({ name })
        res.status(200).json(checkilists);
    } catch (error) {
        res.status(422).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let checkilists = await checkilists.findByid(req.params.id);
        res.status(200).json(checkilists);
    } catch (error) {
        res.status(422).json(error)
    }
})

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`DELETE ID: ${req.params.id}`);
})
module.exports = router;