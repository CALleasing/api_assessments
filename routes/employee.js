const express = require("express");
const incomeController = require("../controller/employee");

const router = express.Router();

router.get("/income/:id/:payDate", incomeController.getIncomeByEmmployeeId);

router.post("/income", incomeController.postOrPutIncome);

module.exports = router;
