const Todos = require("../models/tdsEmbedded");

module.exports = {
  insert: async (req, res) => {
    //Ambil data request dari front end
    const data = new Todos({
      id: req.body.id,
      nama: req.body.nama,
      kegiatan: req.body.kegiatan,
      hari: req.body.hari,
      jam: req.body.jam,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getTodos: async (req, res) => {
    try {
      const result = await Todos.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getTodosById: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Todos.find().where("id").equals(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const filter = { id: req.params.id };
    const updatedData = {
      nama: req.body.nama,
      kegiatan: req.body.kegiatan,
      hari: req.body.hari,
      jam: req.body.jam,
    };
    try {
      let result = await Todos.updateOne(filter, updatedData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { id: req.params.id };
    try {
      await Todos.deleteOne(filter);
      res.send("Data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
