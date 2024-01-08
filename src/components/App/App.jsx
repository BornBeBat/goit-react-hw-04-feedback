import { useState } from 'react';
import {
  FeedbackOptions,
  StatContainer,
  Notification,
} from 'components';
import { Feedback, Title } from './App.styled';
import { countTotalFeedback } from 'utils';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const stats = { good, neutral, bad };

  const onLeaveFeedback = elem => {
    switch (elem) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  return (
    <Feedback>
      <Title>Please leave feedback</Title>
      <FeedbackOptions
        options={Object.keys(stats)}
        onClick={onLeaveFeedback}
      />
      <Title>Statistics</Title>
      {countTotalFeedback(stats) > 0 ? (
        <StatContainer
          options={{
            ...stats,
            total: countTotalFeedback(stats),
          }}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Feedback>
  );
};
