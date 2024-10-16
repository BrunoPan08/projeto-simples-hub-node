const express = require('express');
const cors = require('cors');
const user = require('./config');
const app = express()
app.use(express.json());
app.use(cors());

app.get("/", async(req, res) => {
    const snapshot = await user.get();
    const list = snapshot.docs.map((docs)=>docs.data())
    res.send(list);
})

app.listen(4000, () => console.log("Is running"));