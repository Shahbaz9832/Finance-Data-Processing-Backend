const Record = require("../models/record.model");

exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find({ createdBy: req.user.id });

    let totalIncome = 0;
    let totalExpense = 0;
    const categoryWise = {}; 

    records.forEach(r => {
      // income / expense
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;

      // category logic
      if (!categoryWise[r.category]) {
        categoryWise[r.category] = 0;
      }
      categoryWise[r.category] += r.amount;
    });

    const recent = await Record.find({ createdBy: req.user.id }).sort({ createdAt: -1 }).limit(5);

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      categoryWise,
      recent 
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};