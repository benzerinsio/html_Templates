import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  /*"date" here stands for the value we're passing in the expenseItem */

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      {/* Alternative to props.date -> props.expenses.date (for the case of passing the full object) -- expense[0]*/}
    </div>
  );
}

export default ExpenseDate;
