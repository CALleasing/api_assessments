const incomeModel = require("../model/employee");

exports.getIncomeByEmmployeeId = (req, res, next) => {
  const { id, payDate } = req.params;
  // console.log(req.params);
  // const payDate = req.body.payDate;
  // console.log(req.body);

  incomeModel
    .queryIncomeFromEmployeeId({ payDate, id })
    .then(([row]) => {
      console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.postOrPutIncome = (req, res, next) => {
  // const { userid } = req.params;
  const {
    companyName,
    payDate,
    employeeID,
    fullName,
    position,
    department,

    currentIncome_rate,
    currentIncome_salaryDays,
    currentIncome_salary,
    currentIncome_overtimeHoursX1,
    currentIncome_overtimeX1,
    currentIncome_overtimeHoursX1_5,
    currentIncome_overtimeX1_5,
    currentIncome_overtimeHoursX2,
    currentIncome_overtimeX2,
    currentIncome_overtimeHoursX3,
    currentIncome_overtimeX3,
    currentIncome_overtimeOther,
    currentIncome_commission,
    currentIncome_phoneBill,
    currentIncome_bonus,
    currentIncome_salaryCompensation,
    currentIncome_totalIncome,

    currentExpenses_absentDays,
    currentExpenses_absent,
    currentExpenses_lateMinute,
    currentExpenses_late,
    currentExpenses_sickDays,
    currentExpenses_sick,
    currentExpenses_leaveDays,
    currentExpenses_leave,
    currentExpenses_leaveOtherDays,
    currentExpenses_leaveOther,
    currentExpenses_pension,
    currentExpenses_other,
    currentExpenses_vat,
    currentExpenses_advance,
    currentExpenses_socialSecurity,
    currentExpenses_firstInsurance,
    currentExpenses_loan,
    currentExpenses_gasOrPhone,
    currentExpenses_studentLoan,
    currentExpenses_total,

    currentNetIncome,

    cumulativeIncome_salaryDays,
    cumulativeIncome_salary,
    cumulativeIncome_overtimeHoursX1,
    cumulativeIncome_overtimeX1,
    cumulativeIncome_overtimeHoursX1_5,
    cumulativeIncome_overtimeX1_5,
    cumulativeIncome_overtimeHoursX2,
    cumulativeIncome_overtimeX2,
    cumulativeIncome_overtimeHoursX3,
    cumulativeIncome_overtimeX3,
    cumulativeIncome_overtimeOther,
    cumulativeIncome_commission,
    cumulativeIncome_welfare,
    cumulativeIncome_extraMoney,
    cumulativeIncome_otherIncome,
    cumulativeIncome_totalIncome,

    cumulativeExpenses_absentDays,
    cumulativeExpenses_absent,
    cumulativeExpenses_lateDays,
    cumulativeExpenses_late,
    cumulativeExpenses_sickDays,
    cumulativeExpenses_sick,
    cumulativeExpenses_leaveDays,
    cumulativeExpenses_leave,
    cumulativeExpenses_leaveOtherDays,
    cumulativeExpenses_leaveOther,
    cumulativeExpenses_welfare,
    cumulativeExpenses_other,
    cumulativeExpenses_vat,
    cumulativeExpenses_providentFund,
    cumulativeExpenses_socialSecurity,
    cumulativeExpenses_firstInsurance,
    cumulativeExpenses_loan,
    cumulativeExpenses_installment,
    cumulativeExpenses_total,

    cumulativeNetIncome,
  } = req.body;

  incomeModel
    .queryIncomeFromEmployeeId({ payDate, id: employeeID })
    .then(([row]) => {
      if (row.length !== 0) {
        console.log(row);
        incomeModel
          .updateIncome({
            companyName,
            payDate,
            employeeID,
            fullName,
            position,
            department,

            currentIncome_rate,
            currentIncome_salaryDays,
            currentIncome_salary,
            currentIncome_overtimeHoursX1,
            currentIncome_overtimeX1,
            currentIncome_overtimeHoursX1_5,
            currentIncome_overtimeX1_5,
            currentIncome_overtimeHoursX2,
            currentIncome_overtimeX2,
            currentIncome_overtimeHoursX3,
            currentIncome_overtimeX3,
            currentIncome_overtimeOther,
            currentIncome_commission,
            currentIncome_phoneBill,
            currentIncome_bonus,
            currentIncome_salaryCompensation,
            currentIncome_totalIncome,

            currentExpenses_absentDays,
            currentExpenses_absent,
            currentExpenses_lateMinute,
            currentExpenses_late,
            currentExpenses_sickDays,
            currentExpenses_sick,
            currentExpenses_leaveDays,
            currentExpenses_leave,
            currentExpenses_leaveOtherDays,
            currentExpenses_leaveOther,
            currentExpenses_pension,
            currentExpenses_other,
            currentExpenses_vat,
            currentExpenses_advance,
            currentExpenses_socialSecurity,
            currentExpenses_firstInsurance,
            currentExpenses_loan,
            currentExpenses_gasOrPhone,
            currentExpenses_studentLoan,
            currentExpenses_total,

            currentNetIncome,

            cumulativeIncome_salaryDays,
            cumulativeIncome_salary,
            cumulativeIncome_overtimeHoursX1,
            cumulativeIncome_overtimeX1,
            cumulativeIncome_overtimeHoursX1_5,
            cumulativeIncome_overtimeX1_5,
            cumulativeIncome_overtimeHoursX2,
            cumulativeIncome_overtimeX2,
            cumulativeIncome_overtimeHoursX3,
            cumulativeIncome_overtimeX3,
            cumulativeIncome_overtimeOther,
            cumulativeIncome_commission,
            cumulativeIncome_welfare,
            cumulativeIncome_extraMoney,
            cumulativeIncome_otherIncome,
            cumulativeIncome_totalIncome,

            cumulativeExpenses_absentDays,
            cumulativeExpenses_absent,
            cumulativeExpenses_lateDays,
            cumulativeExpenses_late,
            cumulativeExpenses_sickDays,
            cumulativeExpenses_sick,
            cumulativeExpenses_leaveDays,
            cumulativeExpenses_leave,
            cumulativeExpenses_leaveOtherDays,
            cumulativeExpenses_leaveOther,
            cumulativeExpenses_welfare,
            cumulativeExpenses_other,
            cumulativeExpenses_vat,
            cumulativeExpenses_providentFund,
            cumulativeExpenses_socialSecurity,
            cumulativeExpenses_firstInsurance,
            cumulativeExpenses_loan,
            cumulativeExpenses_installment,
            cumulativeExpenses_total,

            cumulativeNetIncome,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        incomeModel
          .insertIncome({
            companyName,
            payDate,
            employeeID,
            fullName,
            position,
            department,

            currentIncome_rate,
            currentIncome_salaryDays,
            currentIncome_salary,
            currentIncome_overtimeHoursX1,
            currentIncome_overtimeX1,
            currentIncome_overtimeHoursX1_5,
            currentIncome_overtimeX1_5,
            currentIncome_overtimeHoursX2,
            currentIncome_overtimeX2,
            currentIncome_overtimeHoursX3,
            currentIncome_overtimeX3,
            currentIncome_overtimeOther,
            currentIncome_commission,
            currentIncome_phoneBill,
            currentIncome_bonus,
            currentIncome_salaryCompensation,
            currentIncome_totalIncome,

            currentExpenses_absentDays,
            currentExpenses_absent,
            currentExpenses_lateMinute,
            currentExpenses_late,
            currentExpenses_sickDays,
            currentExpenses_sick,
            currentExpenses_leaveDays,
            currentExpenses_leave,
            currentExpenses_leaveOtherDays,
            currentExpenses_leaveOther,
            currentExpenses_pension,
            currentExpenses_other,
            currentExpenses_vat,
            currentExpenses_advance,
            currentExpenses_socialSecurity,
            currentExpenses_firstInsurance,
            currentExpenses_loan,
            currentExpenses_gasOrPhone,
            currentExpenses_studentLoan,
            currentExpenses_total,

            currentNetIncome,

            cumulativeIncome_salaryDays,
            cumulativeIncome_salary,
            cumulativeIncome_overtimeHoursX1,
            cumulativeIncome_overtimeX1,
            cumulativeIncome_overtimeHoursX1_5,
            cumulativeIncome_overtimeX1_5,
            cumulativeIncome_overtimeHoursX2,
            cumulativeIncome_overtimeX2,
            cumulativeIncome_overtimeHoursX3,
            cumulativeIncome_overtimeX3,
            cumulativeIncome_overtimeOther,
            cumulativeIncome_commission,
            cumulativeIncome_welfare,
            cumulativeIncome_extraMoney,
            cumulativeIncome_otherIncome,
            cumulativeIncome_totalIncome,

            cumulativeExpenses_absentDays,
            cumulativeExpenses_absent,
            cumulativeExpenses_lateDays,
            cumulativeExpenses_late,
            cumulativeExpenses_sickDays,
            cumulativeExpenses_sick,
            cumulativeExpenses_leaveDays,
            cumulativeExpenses_leave,
            cumulativeExpenses_leaveOtherDays,
            cumulativeExpenses_leaveOther,
            cumulativeExpenses_welfare,
            cumulativeExpenses_other,
            cumulativeExpenses_vat,
            cumulativeExpenses_providentFund,
            cumulativeExpenses_socialSecurity,
            cumulativeExpenses_firstInsurance,
            cumulativeExpenses_loan,
            cumulativeExpenses_installment,
            cumulativeExpenses_total,

            cumulativeNetIncome,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};
