const express = require("express");
const productsRoutes = require("./routes/recipes")
const usersRoutes = require("./routes/users")
const healthRoutes = require("./routes/health");

const server = express();
server.use(express.json());

server.use(healthRoutes.router);
server.use(recipesRoutes.router);
server.use(usersRoutes.router);

module.exports = {server}
