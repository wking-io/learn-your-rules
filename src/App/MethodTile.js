import React from 'react';
import PropTypes from 'prop-types';
import sample from 'lodash.sample';
import { UnderlineExternalLink } from './Buttons';
import SubHeading from './SubHeading';
import Copy from './Copy';
import Tile from './Tile';
import NumberedHeader from './NumberedHeader';
import CodeBlock from './CodeBlock';

const MethodTile = ({ item, index, size }) => {
  const question = sample(item.questions);
  return (
    <Tile size={size}>
      <NumberedHeader number={index} />
      <main>
        <UnderlineExternalLink
          className="mt6 mb5 dib"
          href={item.referenceUrl}
          large="true"
          proper="true"
        >
          {item.name}
        </UnderlineExternalLink>
        <Copy>{item.description}</Copy>
        <SubHeading>Example:</SubHeading>
        <CodeBlock>{question(item.name)}</CodeBlock>
      </main>
    </Tile>
  );
};

MethodTile.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    referenceUrl: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.string.isRequired,
};

export default MethodTile;
