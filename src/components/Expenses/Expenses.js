import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    const expenseItems = filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            ));

    let noExpenseMessage = <p>No expenses for {filterYear}</p>

    const onFilterChangedHandler = (filterData) => {
        console.log(filterData);
        setFilterYear(filterData);
    };

    return (
        <div>
            {/* <Card className="expenses"></Card> */}
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onFilterChangedHandler={onFilterChangedHandler}
                />
                {expenseItems.length === 0 ? noExpenseMessage : ''}
                {expenseItems}
            </Card>
        </div>
    );
}

export default Expenses;
