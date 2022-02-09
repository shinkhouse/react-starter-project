import Card from '../UI/Card';
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
        <Card className='expenses'>
            {expenseItems}
        </Card>
    );
}

export default Expenses;