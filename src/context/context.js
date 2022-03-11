import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":75,"category":"House","type":"Expense","date":"2022-03-15","id":"3b9432cd-24b7-4914-b86a-012cfda3a1d9"},{"amount":50,"category":"Business","type":"Income","date":"2022-03-15","id":"4b8d1090-9f25-48ea-a981-a1aa5df723e7"},{"amount":50,"category":"Business","type":"Income","date":"2022-03-15","id":"b7eae7dd-c546-42b7-be12-a192e9697b91"},{"amount":200,"category":"Phone","type":"Expense","date":"2022-03-12","id":"66073b7d-79e2-46f6-bb5f-02a5ff25ed59"},{"amount":500,"category":"Food","type":"Expense","date":"2022-03-10","id":"cd8eab1c-75a7-42f5-823e-e17354e3cba9"},{"amount":50000,"category":"Salary","type":"Income","date":"2022-03-07","id":"622e8712-2d20-403e-8a8e-b574994cc4cc"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions , dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })

    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction, 
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}