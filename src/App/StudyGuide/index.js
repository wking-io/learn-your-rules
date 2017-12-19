import React from 'react';
import PropTypes from 'prop-types';
import setupMethods from '../../lib/data/methods';
import ItemList from '../ItemList';
import MethodTile from '../MethodTile';

const StudyGuide = ({ match }) => {
  const { objectId } = match.params;
  const items = setupMethods(objectId).methods;
  const alphaItems = items.sort((a, b) => a.name > b.name);
  return <ItemList Component={MethodTile} fullWidth items={alphaItems} />;
};

StudyGuide.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      objectId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default StudyGuide;
