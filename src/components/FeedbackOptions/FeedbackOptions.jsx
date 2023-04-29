import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptList, FeedBackOptBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onButtonClick }) => {
  return (
    <FeedbackOptList>
      {options.map(text => (
        <FeedBackOptBtn key={text} onClick={() => onButtonClick(text)}>
          {text}
        </FeedBackOptBtn>
      ))}
    </FeedbackOptList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
