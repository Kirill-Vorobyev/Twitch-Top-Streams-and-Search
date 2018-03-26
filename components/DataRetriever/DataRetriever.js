import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataRetriever extends React.Component {
    
    componentDidMount = () => {
        this.RetrieveData(this.props.dataType,this.props.searchQuery);
    }

    componentWillReceiveProps = (nextProps) => {
        if(this.props.dataType !== nextProps.dataType || this.props.searchQuery !== nextProps.searchQuery){
            this.RetrieveData(nextProps.dataType,nextProps.searchQuery);
        }
    }

    RetrieveData = (dataType,query) => {
        switch (dataType) {
            case 'top20':
                this.GetTop20();
                console.log('DataRetriever GetTop20');
                break;
            case 'search':
                this.SearchStreamers(query);
                console.log('DataRetriever GetTop20');
                break;
            default:
                console.log('Default case!');
        }
    }

    GetTop20 = () => {
        var URL = "https://example-golang-api-host.com/GetTop20";
        this.PerformFetch(URL);
    }

    SearchStreamers = (query) => {
        var URL = "https://example-golang-api-host.com/Search?"+query;
        this.PerformFetch(URL);
    }

    PerformFetch = (URL) => {
        fetch(URL)
        .then(res => res.json())
        .then(newResponse => this.props.saveResponse(newResponse));
    }

    render() {
        return(true);
    }
}