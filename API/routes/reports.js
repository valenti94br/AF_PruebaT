const express = require("express")
const ReportController = require("../controllers/ReportController")
const router = express.Router()

router.post("/createReport",ReportController.createReport)
router.get("/getAllReports",ReportController.getAll)
router.get("/getById/:_id",ReportController.getById)
router.delete("/deleteReportById/:_id",ReportController.delete)
router.put("/updateReportById/:_id",ReportController.update)

module.exports = router