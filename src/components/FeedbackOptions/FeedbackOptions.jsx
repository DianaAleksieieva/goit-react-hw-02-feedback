import React from 'react';
import {Button} from "../App.styled";
const FeedbackOptions = ({ AddFeedback }) => { return <div>
    <Button type="button" name="good" onClick={AddFeedback}>Good</Button>
    <Button type="button" name="neutral" onClick={AddFeedback}>Neutral</Button>
        <Button type="button" name="bad" onClick={AddFeedback}>Bad</Button>
</div>
    }
    export default FeedbackOptions