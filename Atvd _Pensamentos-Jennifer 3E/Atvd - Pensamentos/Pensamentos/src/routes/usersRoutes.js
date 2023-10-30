const express = require("express");

const UsersController = require("../controllers/UsersController");

const router = express.Router();

//  Rota para cadastrar os usuários 
router.post("/users", UsersController.createUser);

// Rota para encontrar todos os registros do usuários cadastrados na aplicação




// Rota para 
router.put("/users/:id", UsersController.updateUser);

// Rota para deletar um registro em específico no banco de dados
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router;