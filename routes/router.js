const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appLogin = require("../apps/login/controller/ctlLogin");
const appEscolas = require("../apps/escolas/controller/ctlEscolas");

routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/deleteAlunos", appAlunos.DeleteAlunos);

routerApp.get("/getAllCursos", appCursos.GetAllCursos);
routerApp.post("/getCursoByID", appCursos.GetCursoByID);
routerApp.post("/insertCursos", appCursos.InsertCursos);
routerApp.post("/updateCursos", appCursos.UpdateCursos);
routerApp.post("/deleteCursos", appCursos.DeleteCursos);

routerApp.post("/login", appLogin.Login);
routerApp.post("/logout", appLogin.Logout);

routerApp.get("/getAllEscolas", appEscolas.getAllEscolas);
routerApp.post("/getEscolaByID", appLogin.AutenticaJWT, appEscolas.getEscolaById);
routerApp.post("/insertEscola", appLogin.AutenticaJWT, appEscolas.insertEscola);
routerApp.post("/updateEscola", appEscolas.updateEscola);
routerApp.post("/deleteEscola", appEscolas.deleteEscola);

module.exports = routerApp;
