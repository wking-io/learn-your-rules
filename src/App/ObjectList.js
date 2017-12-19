import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import quizTypes from '../lib/data/quizTypes';
import { media } from '../lib/media';

const ObjectList = ({ objects, Item, ...props }) => {
  const isMinimal = objects.length < 3;
  return (
    <BlockList>
      {objects.map((object, i) => (
        <Item
          index={i}
          isMinimal={isMinimal}
          key={object.id}
          object={object}
          quizTypes={quizTypes}
          {...props}
        />
      ))}
    </BlockList>
  );
};

ObjectList.propTypes = {
  Item: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  objects: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ObjectList;

const BlockList = styled.section`
  margin: 8rem 0 0;

  ${media.m`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12rem 0 0;
`};
`;
