import React from 'react';
import objects from '../../lib/data/objects';
import ObjectList from '../ObjectList';
import ObjectTile from '../ObjectTile';

const Dashboard = () => {
  return <ObjectList objects={objects} Item={ObjectTile} />;
};

export default Dashboard;
