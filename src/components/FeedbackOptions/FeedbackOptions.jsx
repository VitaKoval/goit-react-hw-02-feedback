import React from 'react';
import { VoiceButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => (
    <VoiceButton
      type="button"
      key={option}
      data-voice={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </VoiceButton>
  ));
};
