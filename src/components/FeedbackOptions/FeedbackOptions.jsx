import React from 'react';
import { Container, VoiceButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ option, onLeaveFeedback }) => (
  <Container>
    <VoiceButton type="button" data-voice="good" onClick={onLeaveFeedback}>
      Good
    </VoiceButton>
    <VoiceButton type="button" data-voice="neutral" onClick={onLeaveFeedback}>
      Neutral
    </VoiceButton>
    <VoiceButton type="button" data-voice="bad" onClick={onLeaveFeedback}>
      Bad
    </VoiceButton>
  </Container>
);
