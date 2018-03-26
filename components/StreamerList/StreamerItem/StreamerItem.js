import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Linking } from 'react-native';

const StreamerItem = props => {
    var imgW = 400;
    var imgH = 225;
    var imgURI = props.data.thumbnail_url.replace("{width}",imgW).replace("{height}",imgH);
    var streamURL = "https://twitch.tv/streams/"+props.data.id+"/channel/"+props.data.user_id;
    
    streamerClicked = () => {
        Linking.openURL(streamURL).catch(err => console.error('An error occurred', err));
    }
    
    return (
        <TouchableHighlight underlayColor='white' onPress={streamerClicked}>
        <View style={styles.container}>
            <Text style={styles.text}>{props.data.title}</Text>
            <Image 
                style={{width: imgW, height: imgH}}
                source={{uri: imgURI}}
            />
        </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 15
    }
});

export default StreamerItem;