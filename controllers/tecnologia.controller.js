var Tecnologia = require('../models/tecnologia.model');

// Creating
exports.create = function(req, res, next) {
  let tecnologia = new Tecnologia(
    {
      nome : req.body.nome,
      backend: req.body.backend,
      frontend: req.body.frontend,
      frameworks: req.body.frameworks
    }
  );
    tecnologia.save(function(err) {
      if(err) {
        return next(err);
      }
        res.send('Registro da Tecnologia efetuado com sucesso')
    })
}

// Reading
exports.details = function (req, res, next) {
  Tecnologia.findById(req.params.id, function (err, tecnologia) {
    if (err) return next(err);
      res.send(tecnologia);
    })
};

// Updating
exports.update = function (req, res, next) {
  Tecnologia.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, tecnologia) {
      if (err) return next(err);
      res.send('Tecnologia atualizada !');
  });
};

// Deleting
exports.delete = function (req, res, next) {
  Tecnologia.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Tecnologia deletada com sucesso !');
  })
};