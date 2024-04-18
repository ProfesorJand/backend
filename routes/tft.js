const { Router } = require('express');
const fs = require('fs');
const version = '14.3';
const url = `https://raw.communitydragon.org/${version}/cdragon/tft/es_ar.json`;

const router = Router();

router.get('/champions', async (req, res) => {
  const champions = require('../json/tft/champions.json');
  console.log('championsTFT-ejecutandose');
  console.log(champions);
  return res.json(champions);
});

router.get('updateChampions', async (req, res) => {
  try {
    const data = await fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        fs.writeFile(
          '/json/tft/champions.json',
          JSON.stringify(data.sets['10'].champions),
          (err) => {
            if (err) {
              throw new Error('Something went wrong.');
            }
            console.log('JSON written to file. Contents:');
          }
        );
        return data;
      });
  } catch (error) {
    console.log(error);
  }
});

router.get('/meta', async (req, res) => {
  const meta = require('../json/tft/meta.json');
  console.log('meta-ejecutandose');
  console.log(meta);
  return res.json(meta);
});

router.put('/meta', async (req, res) => {
  const { newComp, Tier } = req.body;
  console.log('newComp', newComp);
  console.log('Tier', Tier);
  const meta = require('../json/tft/meta.json');
  meta[Tier].push(newComp);
  console.log('meta-post-ejecutandose');
  console.log(meta);
  console.log('dirname', __dirname);
  fs.writeFile(
    __dirname + '/../json/tft/meta.json',
    JSON.stringify(meta, null, ' '),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('JSON written to file. Contents:');
    }
  );
  return res.json(meta);
});

router.post('/meta', (req, res) => {
  const newMeta = req.body;
  fs.writeFile(
    __dirname + '/../json/tft/meta.json',
    JSON.stringify(newMeta, null, ' '),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('JSON written to file. Contents:');
    }
  );
  return res.json(newMeta);
});

module.exports = router;
