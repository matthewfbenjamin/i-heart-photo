import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards'

const Main = (props) => {
  return (
    <View style={styles.pageContainer}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.countWrapper}>
          <Image
            style={{ flex: 1, width: '100%', height: undefined }}
            resizeMode="contain"
            source={require('../../assets/thumbs-down.png')} />
          <Text style={[styles.text, styles.countText]}>{props.localDislikeCount}</Text>
        </View>
        <View style={styles.countWrapper}>
          <Image
            style={{ flex: 1, width: '100%', height: undefined }}
            resizeMode="contain"
            source={require('../../assets/favorite-heart.png')} />
          <Text style={[styles.text, styles.countText]}>{props.localLikeCount}</Text>
        </View>
      </View>
      <View style={{ padding: 10, flex: 5 }}>
        <SwipeCards
          cardRemoved={props.cardRemoved}
          showYup={false}
          showNope={false}
          // stack
          // stackOffsetX={0}
          // stackOffsetY={-10}
          dragY={false}
          cards={props.photosIdArr}
          cardKey='id'
          style={styles}
          renderCard={(cardData) => {
            const phoneWidth = props.dimensions.width * 0.75
            return (
              <View style={styles.cardWrapper} onLayout={props.onCardLayout}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1, width: phoneWidth }}
                  source={{ uri: props.photosObject[cardData].urls.regular }}
                />
                <Text style={[styles.text, styles.cardText]}>{props.photosObject[cardData].description || 'No description'}</Text>
              </View>
            )
          }}
          renderNoMoreCards={() => (
            <View>
              <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
          )}
          handleYup={props.handleYup}
          handleNope={props.handleNope}
          handleMaybe={props.handleMaybe}
          hasMaybeAction
        />
      </View>
      <View style={{flex: 1}} />
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  countWrapper: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#e2e2e2',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  cardWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    padding: 20,
    borderColor: '#e2e2e2',
  },
  text: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'transparent',
    color: '#CDCDCD',
  },
  countText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    paddingTop: 20,
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})

export default Main
