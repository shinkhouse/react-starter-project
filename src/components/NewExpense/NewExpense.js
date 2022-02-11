import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const savedExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpenseData(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={savedExpenseDataHandler}></ExpenseForm>
    </div>;
};

export default NewExpense;
