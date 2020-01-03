import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AddCV from '../screens/AddCv'
import Profile from '../screens/Profile'
import TabNavigator from './TabNavigator';

export default createDrawerNavigator({
  Profile: {
    screen: TabNavigator
  }
});