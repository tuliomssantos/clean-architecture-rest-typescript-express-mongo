const mongoose = require("mongoose");
​
export const BudgetSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      require: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { collection: "budgets", strict: false, timestamps:true }
);
​
export const budgetModel = mongoose.model("BudgetSchema", BudgetSchema);