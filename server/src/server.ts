import express from "express"

const app = express()

app.get("/ads", (request, response) => {
    return response.json([
        { id: 1, name: "ADS 01" },
        { id: 2, name: "ADS 02" },
        { id: 3, name: "ADS 03" },
        { id: 4, name: "ADS last" },
    ])
})

app.listen("3030")