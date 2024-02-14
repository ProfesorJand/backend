const express = require('express');
const Home = require('./home');
const Seroptimo = require('./seroptimo.js');

const router = express();
router.use(express.json());

/* Rutas */
router.use('/home', Home);
router.use('/seroptimo', Seroptimo);

// router.all('*', (req, res) => {
//   console.log('Redirect - ejecutandose');
//   return res.send('');
// });

module.exports = router;
