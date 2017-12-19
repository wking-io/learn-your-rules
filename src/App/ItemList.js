import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../lib/media';

const ItemList = ({ items, Component, fullWidth, ...props }) => {
  const size = fullWidth ? 'full' : items.length < 3 ? 'minimal' : 'default';
  return (
    <BlockList>
      {items.map((item, i) => (
        <Component index={i} item={item} key={item.id} size={size} {...props} />
      ))}
    </BlockList>
  );
};

ItemList.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  fullWidth: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

ItemList.defaultProps = {
  fullWidth: false,
};

export default ItemList;

const BlockList = styled.section`
  margin: 8rem 0 0;

  ${media.m`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12rem 0 0;
`};
`;
