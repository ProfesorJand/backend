const { Router } = require('express');

const router = Router();
const repositories = require('../json/github/repositories.json');

router.get('/', async (req, res) => {
  return res.json({ hola: 'get' });
});

router.get('/repositories', async (req, res) => {
  console.log(repositories);
  return res.json(repositories);
});

router.get('/organitations', async (req, res) => {
  console.log(repositories);
  return res.json(repositories);
});

module.exports = router;
