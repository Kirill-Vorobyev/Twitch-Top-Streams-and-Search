import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default class Search extends React.Component {
    state = {
        query: ""
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.props.submitQuery(this.state.query);
        }
    }

    handleInputChanged = (text) => {
        this.setState({query:text});
    }

    componentDidMount = () => {
        this.setState({query: this.props.query});
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.query != this.props.query){
            this.setState({query: nextProps.query});
        }
    }
    
    render() {
        return (
            <View style={styles.searchLayout}>
                <TextInput style={styles.textInput} onChangeText={this.handleInputChanged} value={this.state.query}></TextInput>
                <Button title="Search" onPress={() => this.props.onQueryChanged(this.state.query)} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    searchLayout: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        width: 100,
        color: 'white'
    }
});