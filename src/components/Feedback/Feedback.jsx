import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { FeedbackForm, FeedbackWrapper, FeedbackBtn } from './Feedback.styled';
import { Section } from '../Section/Section';
// import { Statistics } from '../Statistics/Statistics';

const feedBackStatusName = ['good', 'neutral', 'bad'];

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  render() {
    return (
      <FeedbackForm>
        <FeedbackWrapper>
          <Section title="Please leave feedback" />
          <FeedbackBtn>
            <FeedbackOptions
              options={feedBackStatusName}
              onButtonClick={this.handleClick}
            />
          </FeedbackBtn>
        </FeedbackWrapper>
        <FeedbackWrapper>
          <Section title="Statistics" />

          {/* <Statistics options={feedBackStatusName} state={this.state} /> */}
        </FeedbackWrapper>
      </FeedbackForm>
    );
  }
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
