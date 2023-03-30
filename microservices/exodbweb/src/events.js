
const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';
  
    router.get('/planet', function (req, res, next) {
      db.query(
        'SELECT * FROM Planet',
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

    router.get('/robots', function (req, res, next) {
      let planet = req.query.planet;
      if (planet) {
        db.query(
          'SELECT '+
            'r.RID AS RID, '+
            'r.thread_id AS thread_id, '+
            'r.x_pos AS x_pos, '+
            'r.y_pos AS y_pos, '+
            'r.dir AS dir, '+
            'p.planet_name AS planet '+
          'FROM Robot r, Planet p '+
          'WHERE r.PID = p.PID AND p.planet_name = "' + planet + '"',
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
      } else {
        db.query(
          'SELECT '+
            'r.RID AS RID, '+
            'r.thread_id AS thread_id, '+
            'r.x_pos AS x_pos, '+
            'r.y_pos AS y_pos, '+
            'r.dir AS dir, '+
            'p.planet_name AS planet '+
          'FROM Robot r, Planet p '+
          'WHERE r.PID = p.PID',
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
      }
  });

  router.get('/data', function (req, res, next) {
    let planet = req.query.planet;
      if (planet) {
        db.query(
          'SELECT '+
            'd.DID AS DID, '+
            'p.planet_name AS planet, '+
            'd.scan_timestamp AS scan_timestamp, '+
            'd.temp AS temp, '+
            'd.ground AS ground, '+
            'd.x_pos AS x_pos, '+
            'd.y_pos AS y_pos '+
          'FROM PlanetData d, Planet p '+
          'WHERE d.PID = p.PID AND p.planet_name = "' + planet + '"',
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
      } else {
        db.query(
          'SELECT '+
            'd.DID AS DID, '+
            'p.planet_name AS planet, '+
            'd.scan_timestamp AS scan_timestamp, '+
            'd.temp AS temp, '+
            'd.ground AS ground, '+
            'd.x_pos AS x_pos, '+
            'd.y_pos AS y_pos '+
          'FROM PlanetData d, Planet p '+
          'WHERE d.PID = p.PID',
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
      }
});

    return router;
}
  
module.exports = createRouter;
