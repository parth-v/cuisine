import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import BusinessDisplayScreen from './src/screens/BusinessDisplayScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessDisplay: BusinessDisplayScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);

