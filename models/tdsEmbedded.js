const mongoose = require("mongoose");

const tdsEmbeddedSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  nama: {
    required: true,
    type: String,
  },
  kegiatan: {
    required: true,
    type: String,
  },
  hari: {
    required: true,
    type: String,
  },
  jam: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Todos", tdsEmbeddedSchema, "todos");
