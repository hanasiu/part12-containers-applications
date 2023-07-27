const express = require('express');
const redis = require('../redis')
const router = express.Router();
const { getAsync, setAsync } = require('../redis/index');
const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async(req, res) => {
  let value = await getAsync("added_todos");
  console.log(value);
  if(value === null || value === undefined) {
    setAsync("added_todos", 0);
    value = await getAsync("added_todos");
  }
  res.send({"added_todos": value});
})

module.exports = router;
