const express = require('express');
const router = express.Router();

const queries = require('./db/queries');


// *** GET all shows *** //
router.get('/contact/:contactId/page/:pageId', function(req, res, next) {
  queries.getSingle(req.params.contactId)
  .then(function(contact) {

    let response = { page: "Normal" };

    if(contact.mailingstate === 'TX'){
        response.page = "TX_Audit";
    }
    
    res.status(200).json(response);
  })
  .catch(function(error) {
    next(error);
  });
});

module.exports = router;