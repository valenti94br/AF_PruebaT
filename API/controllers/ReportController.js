const Report = require("../models/Report");

const ReportController = {
    async createReport(req, res) {
        try {
            const report = await Report.create(req.body)
            res.status(201).send(report)
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Ha habido un problema al crear la noticia', error })
        }
    },
    async getAll(req, res) {
        try {
            const reports = await Report.find()
            res.send(reports)
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Ha habido un problema al cargar las noticias', error })
        }
    },
    async getById(req, res) {
        try {
            const report = await Report.findById(req.params._id)
            res.send(report)
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Ha habido un problema al cargar la noticia', error })
        }
    },
    async delete(req, res) {
        try {
            const report = await Report.findByIdAndDelete(req.params._id);
            res.send({ message: 'Noticia eliminada', report });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Ha habido un problema al eliminar la noticia', error })
        }
    },
    async update(req, res) {
        try {
            const report = await Report.findByIdAndUpdate(
                req.params._id,
                { ...req.body, archived: true },
                { new: true }
            );
            res.send({ message: "Noticia actualizada", report });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Ha habido un problema al actualizar la noticia', error });
        }
    }
    
};

module.exports = ReportController;
