import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":0,"category":"","type":"Income","date":"2022-03-11","id":"930a1ed0-5d10-428f-89d8-8c5c5b1a4115"},{"amount":5000,"category":"Savings","type":"Income","date":"2022-03-09","id":"18a7f634-470e-4630-8521-f3d9b23a8a0f"},{"amount":2000,"category":"Extra income","type":"Income","date":"2022-03-11","id":"89ea79a9-7c21-461a-a8ae-e8578556c70d"},{"amount":75,"category":"House","type":"Expense","date":"2022-03-15","id":"3b9432cd-24b7-4914-b86a-012cfda3a1d9"},{"amount":200,"category":"Phone","type":"Expense","date":"2022-03-12","id":"66073b7d-79e2-46f6-bb5f-02a5ff25ed59"},{"amount":500,"category":"Food","type":"Expense","date":"2022-03-10","id":"cd8eab1c-75a7-42f5-823e-e17354e3cba9"},{"amount":50000,"category":"Salary","type":"Income","date":"2022-03-07","id":"622e8712-2d20-403e-8a8e-b574994cc4cc"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions , dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })

    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount
    ,0)

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction, 
            transactions, 
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}