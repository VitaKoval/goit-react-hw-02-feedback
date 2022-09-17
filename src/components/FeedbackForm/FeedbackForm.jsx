import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export class FeedbackForm extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = evt => {
    console.log(evt.target.dataset.voice);
    const datasetVoice = evt.target.dataset.voice;

    if (datasetVoice === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (datasetVoice === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (datasetVoice === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    good === 0 ? 0 : Math.ceil((good / (good + neutral + bad)) * 100);

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </div>
        <div>
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </div>
      </div>
    );
  }
}
