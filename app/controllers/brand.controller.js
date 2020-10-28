const Brand = require("../models/brand.model.js");

exports.findAll = async (req, res) => {
  try {
    const brand = await Brand.findAll()
    res.status(200).send(brand)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar as marcas."
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const brand = await brand.findByPk(req.params.id)
    res.status(200).send(brand)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar as marcas."
    });
  }
};
