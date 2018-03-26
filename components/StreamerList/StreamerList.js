import React from 'react';
import { FlatList, Text} from 'react-native';
import StreamerItem from './StreamerItem/StreamerItem';

const StreamerList = props => {
    return (
        <FlatList
        data={props.data} 
        keyExtractor={(item, index)=>{return item.user_id}}
        renderItem={({item}) => <StreamerItem data={item}/>}
        />
    );
};

export default StreamerList;