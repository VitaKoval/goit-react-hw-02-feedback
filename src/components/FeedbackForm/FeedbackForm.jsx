import React from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export class FeedbackForm extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    // console.log(option);
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = options => {
    return Object.values(options).reduce((acc, option) => {
      return acc + option;
    }, 0);
  };

  countPositiveFeedbackPercentage = ({ good }) =>
    good === 0
      ? 0
      : Math.ceil((good / this.countTotalFeedback(this.state)) * 100);

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          
          {(this.countTotalFeedback(this.state) === 0) ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          )}
        </Section>
      </div>
    );
  }
}
