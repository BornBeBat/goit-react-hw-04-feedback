import React, { Component } from 'react';
import {
  FeedbackOptions,
  StatContainer,
  Notification,
} from 'components';
import { Feedback, Title } from './App.styled';
import { countTotalFeedback } from 'utils';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <Feedback>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onClick={this.onLeaveFeedback}
        />
        <Title>Statistics</Title>
        {countTotalFeedback(this.state) > 0 ? (
          <StatContainer
            options={{
              ...this.state,
              total: countTotalFeedback(this.state),
            }}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Feedback>
    );
  }
}
