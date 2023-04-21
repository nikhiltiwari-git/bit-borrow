const Offer = require('../models/offer');

exports.getAddOffer = (req, res, next) => {
    res.render('./offer/editOffer');
};

exports.postAddOffer = (req, res, next) => {
    const type = req.body.type ;
    const minAmount = req.body.minAmount ;
    const maxAmount = req.body.maxAmount ;
    const apy = req.body.apy ;
    const ltv = req.body.ltv ;
    const timeFrame = req.body.timeFrame ;
    const publicKey = req.body.publicKey ;
    const recAddress = req.body.recAddress ;

    const offer = new Offer({
        type: type,
        minAmount: minAmount,
        maxAmount: maxAmount, 
        apy: apy,
        ltv: ltv,
        timeFrame: timeFrame,
        publicKey: publicKey,
        recAddress: recAddress
    });

    offer
    .save()
    .then( () => {
        console.log('product created');
    })
    .catch( (err) => {
        console.log(err);
    })

    console.log(req.body);
    res.redirect('/offer');
};

exports.getOffers = (req, res, next) => {

    Offer
    .find()
    .then(offers => {
        res.render('offer/allOffer', {
            pageTitle: 'Adding a offer',
            offs: offers
          });
        // console.log(offers);
    })
    .catch(err => console.log(err));

};

exports.getContract = (req, res, next) => {
    const offerId = req.params.offerId;
    // console.log(offerId);
    Offer.findById(offerId)
    .then(offer => {
      res.render('offer/contract', {
        offer: offer,
        
      });
    })
    .catch(err => console.log(err));
}

