package twitch

import (
	"fmt"
	"net/http"
)

func init() {
	fmt.Println("Initializing Twitch API...")
}

func GetTop20() *http.Response {
	fmt.Println("Getting top 20")
	client := &http.Client{}
	url := "https://api.twitch.tv/helix/streams?first=20"
	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		defer panic(err)
	}

	req.Header.Add("Client-ID", "TwitchApiAppClientIdGoesHere")
	resp, err := client.Do(req)

	if err != nil {
		defer panic(err)
	}

	return resp
}

func Search(username string) *http.Response {
	fmt.Println("Searching Twitch for " + username)
	client := &http.Client{}
	url := "https://api.twitch.tv/helix/streams?user_login=" + username
	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		defer panic(err)
	}

	req.Header.Add("Client-ID", "TwitchApiAppClientIdGoesHere")
	resp, err := client.Do(req)

	if err != nil {
		defer panic(err)
	}

	return resp
}
