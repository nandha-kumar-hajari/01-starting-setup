import React ,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./expenses.css"
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const fiteredExpenses=
    props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear
    })
 

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
  
        {fiteredExpenses.length===0?(<p className='para'>No Expenses Found</p>):(fiteredExpenses.map(expense=><ExpenseItem title={expense.title} amount={expense.amount}date={expense.date} key={expense.id}/>))}
      </Card>
    </div>
  );
};

export default Expenses;