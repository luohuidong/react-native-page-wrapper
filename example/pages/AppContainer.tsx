import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Home'
import DetailScreen from './Detail'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerShown: false
    },
  }
);

export default createAppContainer(AppNavigator);
