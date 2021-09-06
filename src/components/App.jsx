import React from 'react';
import { Container} from "./App.styled";
import Statistic from './Statistic/Statistic.jsx'; 
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';

export default class Feedback extends React.Component {
  static defaultProps = {
    total: 0,
    goodFeedbackPercent: 0,
}
state = {
  good: 0,
  neutral: 0,
  bad: 0,
  visible: false,
}

     addFeedback = (event) => {
        switch (event.target.name) {
            case 'good':
                { this.setState(prevState => { return { good: prevState.good + 1 } }); break }
            case 'neutral':
                { this.setState(prevState => { return { neutral: prevState.neutral + 1 } }); break }
            case 'bad':
                { this.setState(prevState => { return { bad: prevState.bad + 1 }}); break}
            default: return console.log('error');
        }
        this.countTotalFeedback();
       this.countPositiveFeedbackPercentage();
       this.showStatistic();
        }
    countTotalFeedback = ({ good, neutral, bad } = this.state) => {
        this.total = good + neutral + bad+1;
        return this.total
    }
    countPositiveFeedbackPercentage = ({ good } = this.state) => {
      this.goodFeedbackPercent = (((good + 1) / this.total) * 100).toFixed(0);
        return this.goodFeedbackPercent
    }
    showStatistic = () => {
        if (this.total !== 0) {
            console.log(this.total !== 0)
             this.setState({ visible: true })
             return
        }
    }
  render({ good, neutral, bad } = this.state ) {
    return <Container><Section title="Please leave feadback"
      feedbackOption = {<FeedbackOptions AddFeedback={this.addFeedback}/> }
      statistic={this.state.visible ? <Statistic title = "Statistics" good={good} neutral={neutral} bad={bad} total={this.total} goodFeedbackPercent={this.goodFeedbackPercent} /> : <h2>No feedback given</h2>}>
        </Section></Container>
      
    }
}

// title="Please leave feadback"
// title="Statistics"