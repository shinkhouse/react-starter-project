import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const expenseItems = props.expenses.map((expense) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.key}
        ></ExpenseItem>
    ));

    return (
        <div className='expenses'>
            {expenseItems}
        </div>
    );
}

export default Expenses;