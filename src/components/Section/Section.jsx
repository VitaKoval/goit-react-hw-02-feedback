import React from 'react';
import PropTypes from 'prop-types';
import { Group } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Group>
      {title && <h2>{title}</h2>}
      {children}
    </Group>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
