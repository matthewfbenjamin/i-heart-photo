import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Main = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Photo Page
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Main
