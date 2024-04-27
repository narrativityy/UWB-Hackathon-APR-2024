const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/config");

app.use(express.json(), express.urlencoded({ extended: true }), cors({ origin: 'http://localhost:5173', credentials: true }));

const AllMyUserRoutes = require("./routes/user-routes");
const AllMyAnalysisRoutes = require("./routes/analysis-routes");
AllMyUserRoutes(app);
AllMyAnalysisRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );