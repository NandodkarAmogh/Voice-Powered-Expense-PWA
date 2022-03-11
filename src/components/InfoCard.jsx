import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
  return (
    <div style={{textAlign: 'center' , padding: '0 10%'}}>
        Try saying: <br />
        Add {isIncome ? 'Income ' : 'Expense '}
        for {isIncome ? '₹5000 ' : '₹1000 '} 
        in Category {isIncome ? 'Investments ' : 'Shopping '} 
        for {isIncome ? 'Monday ' : 'Wednesday '}...
    </div>
  )
}

export default InfoCard