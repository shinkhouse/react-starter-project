import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('2022-02-10');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData);
        resetForm();
    }

    const resetForm = () => {
        setTitle('');
        setDate('2022-02-10');
        setAmount('');
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max={new Date()}
                        onChange={dateChangeHandler}
                        required
                        value={date}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
