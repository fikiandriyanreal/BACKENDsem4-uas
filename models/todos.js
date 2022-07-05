const mongoose = require("mongoose");

const tdsSchema = new mongoose.Schema({
  id: {
    require: true,
    type: String,
  },
  nama: String,
  kegiatan: String,
  hari: String,
  jam: String,
});

module.exports = mongoose.model("Todos", tdsSchema, "todos");
