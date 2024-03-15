const express = require('express');
const Home = require('./home');
const Seroptimo = require('./seroptimo.js');
const TFT = require('./tft.js');
const GITHUB = require('./github.js');

const router = express();
router.use(express.json());

/* Rutas */
router.use('/home', Home);
router.use('/seroptimo', Seroptimo);
router.use('/tft', TFT);
router.use('/github', GITHUB);

// router.all('*', (req, res) => {
//   console.log('Redirect - ejecutandose');
//   return res.send('');
// });

module.exports = router;
