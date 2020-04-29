import EventList from './EventList'; 
import EventForm from './EventForm'; 
import { StackNavigator } from 'react-navigation'; 
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    })
  }, 
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an Event',
    })
  }, 
}); 