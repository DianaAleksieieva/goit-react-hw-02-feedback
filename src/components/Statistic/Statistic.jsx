import React from 'react';

const Statistic = ({ title, good, neutral, bad, total,goodFeedbackPercent }) => { return <div>
            <h2>{title}</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {goodFeedbackPercent}%</p>
        </div>
    }
    
export default Statistic