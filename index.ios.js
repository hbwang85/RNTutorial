/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';  //Component: ReactComponent
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
  NavigatorIOS,
} from 'react-native'

var SearchPage = require('./SearchPage').default

class Project extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{title: 'Project',
                      component: SearchPage,}}/>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'red',
    margin: 80,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Project', () => Project);
