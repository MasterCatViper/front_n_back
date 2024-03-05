import express from "express"

const app = express()

app.get('/',(req,res) => {
    res.send(`Server is ready`)
});
//get jokes 
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            name: "Joke 1",
            joke: "This is a joke"
        },
        {
            id: 2,
            name: "Joke 2",
            joke: "This is a joke"
        },
        {
            id: 3,
            name: "Joke 3",
            joke: "This is a joke"
        },
        {
            id: 4,
            name: "Joke 4",
            joke: "This is a joke"
        },
        {
            id: 5,
            name: "Joke 5",
            joke: "This is a joke"
        }
        
    ];
    res.send(jokes)
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is loading at ${port}`)
})