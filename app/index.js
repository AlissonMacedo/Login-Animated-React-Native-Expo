import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export default class MusicApp extends Component {

  render() {
    return(
      <View style={{ flex: 1, justifyContent: "flex-end" }} >
        <View style={{...StyleSheet.absoluteFill}} >
          <Image 
          source={require('../assets/background.jpeg')}
          style={{ flex: 1, width: null, height: null }}
          />
        </View>
        <View style={{height: height / 3}} >
            <View style={styles.button } >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }} >SIGN IN</Text>
            </View>
            <View style={{ ...styles.button, backgroundColor: '#2e71DC' }} >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >SIGN IN WITH FACEBOOK</Text>
            </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#FFF',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  }
})