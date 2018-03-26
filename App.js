import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import StreamerList from './components/StreamerList/StreamerList';
import DataRetriever from './components/DataRetriever/DataRetriever';
import Banner from './components/Banner/Banner';

export default class App extends React.Component {
  state = {
    query: '',
    dataType: 'top20',
    response: {"data":[]}
  }

  saveResponseToState = (newResponse) => {
    this.setState({response : newResponse});
  }

  handleQueryChange = (newQuery) => {
    if(newQuery === ''){
      this.setState({query: newQuery,dataType: 'top20'});
    }else{
      this.setState({query: newQuery,dataType: 'search'});
    }
  } 

  updateList = () => {
    
  }

  render() {
    // -- render logic start --
    var streamerListToRender = <Text></Text>
    //decide whether to show the list or a message
    if(this.state.response.data.length == 0 && this.state.query == ''){//message if loading top 20
      streamerListToRender = <Text>Loading List...</Text>
    }else if(this.state.response.data.length == 0 && this.state.query != ""){//message if search returned nothing
      streamerListToRender = <Text>Streamer Not Found or Not Currently Live...</Text>
    }else{//display list
      streamerListToRender = <StreamerList
        data={this.state.response.data}/>
    }
    // -- render logic end --

    
    return (
      // -- things to render --
      <View style={styles.container}>
        <DataRetriever saveResponse={this.saveResponseToState} dataType={this.state.dataType} searchQuery={this.state.query}/>
        <Banner query={this.state.query} onQueryChanged={this.handleQueryChange}/>
        {streamerListToRender}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
