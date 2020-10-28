module.exports = app => {
    const carros = require("../controllers/carros.controller.js");
  
    app.get("/carros", carros.findAll);
  
    app.get("/carros/:id", carros.findOne);
  };