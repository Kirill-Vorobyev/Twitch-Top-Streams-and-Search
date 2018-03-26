import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Search from './Search/Search'

const Banner = (props) => {
    return (
        <View style={styles.titleBanner}>
            <Text style={styles.titleText}>Twitch Top Streams + Search</Text>
            <Search query={props.query} onQueryChanged={props.onQueryChanged}/>
        </View>
    );
};
const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    top: 0
  },
  titleBanner: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    height: 80,
    width: "100%",
    backgroundColor: '#6441a4'
  }
});

export default Banner;