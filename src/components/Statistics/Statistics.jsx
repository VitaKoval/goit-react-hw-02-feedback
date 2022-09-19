import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsList,
  DataFeedback,
  DataAnalysis,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <DataFeedback>Good: {good} </DataFeedback>
    <DataFeedback>Neutral: {neutral} </DataFeedback>
    <DataFeedback>Bad: {bad} </DataFeedback>

    <DataAnalysis>Total: {total}</DataAnalysis>
    <DataAnalysis>Positive feedback: {positivePercentage}%</DataAnalysis>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
