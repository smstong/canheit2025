package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
)

//go:embed ui
var UI embed.FS

func main(){
	sub, err := fs.Sub(UI, "ui")
	if err != nil {
		log.Fatal(err)
	}
	http.Handle("/", http.FileServerFS(sub))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
