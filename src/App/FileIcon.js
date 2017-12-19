import React from 'react';
import PropTypes from 'prop-types';
import icons from '../lib/icons';
import { primary } from '../lib/colors';

const FileIcon = ({ icon, ...props }) => (
  <svg viewBox="0 0 45 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d={icons[icon]} fill={primary} style={{ opacity: '0.5' }} />
    <path d="M0 0v50h30l15-15V0zm32.5 44v-6.5H39zm10-9H30v12.5H2.5v-45h40z" fill={primary} />
  </svg>
);

FileIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default FileIcon;
