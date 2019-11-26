/**
 * @format
 */

import {AppRegistry} from 'react-native';
import mainReduxSetup from './src/mainReduxSetup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => mainReduxSetup);