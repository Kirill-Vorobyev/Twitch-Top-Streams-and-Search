package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"./twitch"
)

func main() {
	var port string = os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	fmt.Println("Booting the server on port", port)

	// Configure a sample route
	http.HandleFunc("/Search", route_search)
	http.HandleFunc("/GetTop20", route_getTop20)

	// Run your server
	http.ListenAndServe(":"+port, nil)
}

func route_search(w http.ResponseWriter, r *http.Request) {
	query := r.RequestURI[8:]
	fmt.Println("route_Search: ", query)
	resultBytes := twitch.Search(query)
	var placeholder interface{}
	json.NewDecoder(resultBytes.Body).Decode(&placeholder)
	json.NewEncoder(w).Encode(placeholder)
	defer resultBytes.Body.Close()
}

func route_getTop20(w http.ResponseWriter, r *http.Request) {
	fmt.Println("route_getTop20")
	resultBytes := twitch.GetTop20()
	var placeholder interface{}
	json.NewDecoder(resultBytes.Body).Decode(&placeholder)
	json.NewEncoder(w).Encode(placeholder)
	defer resultBytes.Body.Close()
}
