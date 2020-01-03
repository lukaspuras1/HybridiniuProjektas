import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation-tabs'

import { Icon } from 'react-native-ui-kitten'


import FoodMenu from '../screens/FoodMenu'
import CompletedOrders from '../screens/CompletedOrders'
import AddCv from '../screens/AddCv'
import Profile from '../screens/Profile'

const TabNavigator = createBottomTabNavigator(
    {
      FoodMenu: {
        screen: FoodMenu,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name='book-open-outline'
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}

            />
          )
        }
      },
      CompletedOrders: {
        screen: CompletedOrders,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name='bell-outline'
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}

            />
          )
        }
      }
    },
    
    {
      tabBarOptions: {
        showLabel: false
      }
    }
  )  

export default createAppContainer(TabNavigator)