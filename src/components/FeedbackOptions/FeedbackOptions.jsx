import React from 'react';
import PropTypes from 'prop-types';
import { VoiceButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => (
    <VoiceButton
      type="button"
      key={option}
      data-voice={option}
      onClick={()=>onLeaveFeedback(option)}
    >
      {option}
    </VoiceButton>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func,
};
