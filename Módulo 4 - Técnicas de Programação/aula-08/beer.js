const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('dentro do router de /beer' + '\n' + req.BoraSerTech);
}); // dentro do router de /beer Bora Ser Tech com a Lets Code

router.post('/', (req, res) => {
  const body = req.body;
  res.json({ "message-from-body": body.message })
}); //{  "message-from-body": "OLAAA"  }

module.exports = router;