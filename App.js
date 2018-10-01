import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Scene, Router, Stack } from 'react-native-router-flux';

import store from './store'
import Photo from './views/Photo'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="photo" component={Photo} title="I Heart Photos" />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
})