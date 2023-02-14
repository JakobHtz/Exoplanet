
const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';
  
    router.get('/robots', function (req, res, next) {
      db.query(
        'SELECT * FROM Robot',
        [owner, 10*(req.params.page || 0)],
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).json({status: 'error'});
          } else {
            res.status(200).json(results);
          }
        }
      );
  });

  router.get('/data', function (req, res, next) {
    db.query(
      'SELECT * FROM PlanetData',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
});

    return router;
}
  
module.exports = createRouter;
