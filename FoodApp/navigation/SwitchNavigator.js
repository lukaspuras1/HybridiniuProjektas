import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'


import AddCv from '../screens/AddCv'
import FoodMenu from '../screens/FoodMenu'


const SwitchNavigator = createSwitchNavigator(
    {
        FoodMenu: {screen:FoodMenu},
        AddCv: {screen:AddCv}
    },
    {
        initialRouteName: 'AddCv'
    }
)


export default createAppContainer(SwitchNavigator)