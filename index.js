/**
 * @format
 */
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
