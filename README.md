# Twitch Top Streams + Search

## Description
React-native front end + GoLang api server to search and retrieve Twitch api livestream data

#### Demo Video
[React-native app working together with the go lang api server](https://streamable.com/to1d8)

#### About
 - react-native app contacts go lang api server for all requests.
 - go lang api contacts new twitch helix api for data retrieval.
 - app user sees top 20 twitch streams when app launches.
 - app user can click on any of the image + title cards to open twitch stream.
 - app user can search for currently live twitch streamer by login name.
 - app user can perform a blank search to show top 20 twitch streams.

## Setup

#### APK
There is a debug apk available for testing in the "debug_apk" folder. 
It is hooked up to an instance of the go lang api server.

**Notes:** 
 - *Minimum Android version supported by react-native is Marshmallow 6.0 (APK Level 23)*
 - *It takes approximately 5 seconds for the service, hosting the golang api, to wake from idle.*


#### React Native Front End
**Note:** *I have removed the URL to the twitch go lang api server. You must host the go lang api server and enter the correct url in the DataRetriever component.*

Follow the "Building Projects with Native Code" instructions on the "Getting Started" guide for OS + Target Platform specific instructions.
https://facebook.github.io/react-native/docs/getting-started.html

*Or simply use the included APK*

All react-native components are located in the components folder.
The call chain starts with index.js which registers the App


#### Go Lang Api Server
**Note:** *I have removed the Twitch API "Client-ID" key value in the go api server. You will need to register your own twitch app and input your key value to access the Twitch API.*

To run the go api server open a command line tool and navigate to the "GoLangApiServer" folder

Enter the following command:
```
go run main.go
```
Test the server by visiting
http://localhost:8080/GetTop20 or 
http://localhost:8080/Search?YourSearchQuery

