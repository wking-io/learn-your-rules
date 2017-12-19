import React from 'react';
import PropTypes from 'prop-types';

const StudyGuide = ({ match: { params: objectId } }) => <div>StudyGuide: {objectId}</div>;

StudyGuide.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      objectId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default StudyGuide;
