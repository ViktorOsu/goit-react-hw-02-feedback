import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import { countTotalFeedback } from '../../utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from '../../utils/countPositiveFeedbackPercentage';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ options, state }) => {
  const hasFeedback = Object.values(state).some(item => item > 0);

  return hasFeedback ? (
    <StatList>
      {options.map(text => (
        <StatItem key={text}>
          {text}: {state[text]}
        </StatItem>
      ))}

      <StatItem>Total: {countTotalFeedback(state)} </StatItem>

      <StatItem>
        Positive feedback:
        {countPositiveFeedbackPercentage(state.good, countTotalFeedback(state))}
        %
      </StatItem>
    </StatList>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};

Statistics.propTypes = {
  options: PropTypes.array,
  state: PropTypes.object,
  message: PropTypes.string,
};
