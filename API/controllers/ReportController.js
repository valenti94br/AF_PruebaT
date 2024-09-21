const Report = require("../models/Report");

const ReportController = {
    async createReport(req, res) {
        try {
            const report = await Report.create(req.body)
            res.status(201).send(report)
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'There was a problem creating the news', error })
        }
    },
    async getAll(req, res) {
        try {
            const reports = await Report.find()
            res.send(reports)
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'There was a problem loading the news', error })
        }
    },
    async getById(req, res) {
        try {
            const report = await Report.findById(req.params._id)
            res.send(report)
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'There was a problem loading the news item', error })
        }
    },
    async delete(req, res) {
        try {
            const report = await Report.findByIdAndDelete(req.params._id);
            res.send({ message: 'News deleted', report });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'There was a problem deleting the news', error })
        }
    },
    async update(req, res) {
        try {
            const report = await Report.findByIdAndUpdate(
                req.params._id,
                { ...req.body, archived: true },
                { new: true }
            );
            res.send({ message: 'News updated', report });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'There was a problem updating the news', error });
        }
    }
    
};

module.exports = ReportController;
