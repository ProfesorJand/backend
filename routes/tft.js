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

module.exports = router;
