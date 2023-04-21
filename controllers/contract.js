const Contract = require('../models/contract');

exports.postActiveContract = (req, res, next) => {
    const Amount = req.body.amount ;
    const pubKey1 = req.body.pubKey1 ;
    const pubKey2 = req.body.pubKey2 ;
    const recAddress1 = req.body.recAddress1 ;
    const recAddress2 = req.body.recAddress2 ;
    const adId = req.body.adId ;
    const apy = req.body.apy ;
    const ltv = req.body.ltv ;
    const duration = req.body.duration ; 

    const contract = new Contract({
        amount:Amount,
        apy: apy,
        ltv: ltv,
        duration: duration,
        recAddress1: recAddress1,
        recAddress2: recAddress2,
        pubKey1: pubKey1,
        pubKey2: pubKey2,
        adId: adId
    });

    contract
    .save()
    .then( () => {
        console.log('contract created');
    })
    .catch( (err) => {
        console.log(err);
    })

    console.log(req.body);
    res.redirect('/contract');
};

// exports.getOffers = (req, res, next) => {

//     Offer
//     .find()
//     .then(offers => {
//         res.render('offer/allOffer', {
//             pageTitle: 'Adding a offer',
//             offs: offers
//           });
//         // console.log(offers);
//     })
//     .catch(err => console.log(err));

// };

// exports.getContract = (req, res, next) => {
//     const offerId = req.params.offerId;
//     // console.log(offerId);
//     Offer.findById(offerId)
//     .then(offer => {
//       res.render('offer/contract', {
//         offer: offer,
        
//       });
//     })
//     .catch(err => console.log(err));
// }

