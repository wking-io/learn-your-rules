import React from 'react';
import icons from '../lib/icons';
import { primary } from '../lib/colors';

const QuizIcon = ({ icon, color, width, height, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 50" {...props}>
    <path fill={primary} style={{ opacity: '0.5' }} d={icons[icon]} />
    <path fill={primary} d="M0 0v50h30l15-15V0zm32.5 44v-6.5H39zm10-9H30v12.5H2.5v-45h40z" />
  </svg>
);

export default QuizIcon;
