import React from 'react';
import objects from '../../lib/data/objects';
import ItemList from '../ItemList';
import ObjectTile from '../ObjectTile';

const Dashboard = () => <ItemList Component={ObjectTile} items={objects} />;

export default Dashboard;
