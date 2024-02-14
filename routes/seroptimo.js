const { Router } = require('express');
const TEMPLATE_ID = process.env.TEMPLATE_ID_DOSHA;
const SERVICE_ID = process.env.SERVICE_ID_DOSHA;

const router = Router();

router.get('/', async (req, res) => {
  console.log('seroptimo-ejecutandose');
  return res.json({
    status: 200,
    email: { TEMPLATE_ID, SERVICE_ID },
    doshaInfo: {
      XJC8VUSHPD2PS: {
        nombre: 'Vata',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XJC8VUSHPD2PS',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/VATA_AVANZADO.pdf',
      },
      R3PUP33ADCJX4: {
        nombre: 'Pitta',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R3PUP33ADCJX4',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/PITTA_AVANZADO.pdf',
      },
      E3YZB2C7UTZXU: {
        nombre: 'Kapha',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E3YZB2C7UTZXU',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/KAPHA_AVANZADO.pdf',
      },
      YJAURZSHQRR5L: {
        nombre: 'Vata - Pitta',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YJAURZSHQRR5L',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/VATA_PITTA_AVANZADO.pdf',
      },
      BU744MRJJ6GU4: {
        nombre: 'Vata - Kapha',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BU744MRJJ6GU4',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/VATA_KAPHA_AVANZADO.pdf',
      },
      GBKLE4B85GUNE: {
        nombre: 'Pitta - Kapha',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GBKLE4B85GUNE',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/PITTA_KAPHA_AVANZADO.pdf',
      },
      Y9E6FD7D5GQWG: {
        nombre: 'Tridosha',
        paypalURL:
          'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GBKLE4B85GUNE',
        doshaURL:
          'https://guiadeparche.com/ser-optimo/avanzado/TRIDOSHA_AVANZADO.pdf',
      },
    },
  });
});

module.exports = router;
