const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: '🌍',
    });
});

router.post('/', async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    } catch (error) {
        // console.log(error.name);
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
    // console.log(logEntry);
    // console.log(req.body)
});

module.exports = router;