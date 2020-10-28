module.exports = app => {
    const brand = require("../controllers/brand.controller.js");
  
    app.get("/brand", brand.findAll);
  
    app.get("/brand/:id", brand.findOne);
  };