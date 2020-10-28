const Carros = require("../models/carros.model.js");

exports.findAll = async (req, res) => {
  try {
    const carros = await Carros.findAll()
    res.status(200).send(carros)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os carros."
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const carros = await Carros.findByPk(req.params.id)
    res.status(200).send(carros)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os carros."
    });
  }
};
