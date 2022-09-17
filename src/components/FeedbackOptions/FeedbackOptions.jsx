import React from 'react';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => (
  <div>
    <button type="button" data-voice="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" data-voice="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" data-voice="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);
