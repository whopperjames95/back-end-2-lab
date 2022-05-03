const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

app.listen(4004, () => {
    console.log("Port is running on 4004");
})


//endpoints:

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse); 