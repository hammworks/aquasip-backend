const express = require('express'); const router = express.Router();

router.get('/', (req, res) => res.send('Customer List'));

module.exports = router;