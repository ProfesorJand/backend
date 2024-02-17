const { Router } = require('express');
const dotenv = require('dotenv');
dotenv.config();
const TEMPLATE_ID = process.env.TEMPLATE_ID_DOSHA;
const SERVICE_ID = process.env.SERVICE_ID_DOSHA;
const EMAIL = process.env.EMAIL;
const DOSHA_URL_VATA = process.env.DOSHA_URL_VATA;
const DOSHA_URL_PITTA = process.env.DOSHA_URL_PITTA;
const DOSHA_URL_KAPHA = process.env.DOSHA_URL_KAPHA;
const DOSHA_URL_VATA_PITTA = process.env.DOSHA_URL_VATA_PITTA;
const DOSHA_URL_VATA_KAPHA = process.env.DOSHA_URL_VATA_KAPHA;
const DOSHA_URL_PITTA_KAPHA = process.env.DOSHA_URL_PITTA_KAPHA;
const DOSHA_URL_TRIDOSHA = process.env.DOSHA_URL_TRIDOSHA;
const VATA_ID = process.env.VATA_ID;
const PITTA_ID = process.env.PITTA_ID;
const KAPHA_ID = process.env.KAPHA_ID;
const VATA_PITTA_ID = process.env.VATA_PITTA_ID;
const VATA_KAPHA_ID = process.env.VATA_KAPHA_ID;
const PITTA_KAPHA_ID = process.env.PITTA_KAPHA_ID;
const TRIDOSHA_ID = process.env.TRIDOSHA_ID;

const router = Router();

router.get('/', async (req, res) => {
  console.log('seroptimo-ejecutandose');
  return res.json({
    status: 200,
    email: { TEMPLATE_ID, SERVICE_ID, EMAIL },
    doshaInfo: {
      [VATA_ID]: {
        nombre: 'Vata',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${VATA_ID}`,
        doshaURL: DOSHA_URL_VATA,
      },
      [PITTA_ID]: {
        nombre: 'Pitta',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${PITTA_ID}`,
        doshaURL: DOSHA_URL_PITTA,
      },
      [KAPHA_ID]: {
        nombre: 'Kapha',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${KAPHA_ID}`,
        doshaURL: DOSHA_URL_KAPHA,
      },
      [VATA_PITTA_ID]: {
        nombre: 'Vata - Pitta',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${VATA_PITTA_ID}`,
        doshaURL: DOSHA_URL_VATA_PITTA,
      },
      [VATA_KAPHA_ID]: {
        nombre: 'Vata - Kapha',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${VATA_KAPHA_ID}`,
        doshaURL: DOSHA_URL_VATA_KAPHA,
      },
      [PITTA_KAPHA_ID]: {
        nombre: 'Pitta - Kapha',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${PITTA_KAPHA_ID}`,
        doshaURL: DOSHA_URL_PITTA_KAPHA,
      },
      [TRIDOSHA_ID]: {
        nombre: 'Tridosha',
        paypalURL: `https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${TRIDOSHA_ID}`,
        doshaURL: DOSHA_URL_TRIDOSHA,
      },
    },
  });
});

module.exports = router;
