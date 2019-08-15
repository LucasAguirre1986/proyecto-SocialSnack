const express = require("express");
const Router = express.Router();
const HomeOffice = require("../../db/models").HomeOffice;
const Employee = require("../../db/models/").Employee;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

Router.post("/", function (req, res) {
    Employee.findOne({
        where: {
            id: req.body.idUser
        }
    }).then(employee => {
        // Instancia del empleado
        HomeOffice.create({
            date: req.body.date,
        })
            .then(newHome => {
                // instancia de home-Office
                return newHome.setEmployeeHomeOffice(employee);
            })
            .then(employeeEvent => res.send(employeeEvent));
    });
});

// GET HOME OFFICE CREADOS
Router.get("/", function (req, res) {
    let month = ((Number(req.query.month) + 1) < 10) ? '0' + (Number(req.query.month) + 1) : (Number(req.query.month) + 1);
    let filter = req.query.year + '-' + month
    HomeOffice.findAll({
        where: {
            date: {
                [Op.like]: filter + '%',
            }
        },
        attributes: ['date'],
        include: [{
            model: Employee,
            as: 'employeeHomeOffice',
            attributes: ['id', 'name', 'surname'],
            where: {
                proyect: req.query.proyect
            }
        }]
    })
        .then(list => res.send(list))
})

// Consulta los proyectos actuales
Router.get('/fetchProyect', function (req, res) {
    Employee.findAll({
        attributes: ['proyect'],
        group: ['proyect'],
        order: ['proyect']
    }).then(resp => res.send(resp))
})

// Consulta los integrantes de cada proyecto
Router.get('/fetchAllowanceProyect/:proyectName', function (req, res) {
    Employee.findAll({
        where: {
            proyect: req.params.proyectName
        },
        attributes: ['name', 'surname'],
    }).then(resp => res.send(resp))
})

// Consulta los integrantes de cada proyecto
Router.get('/birthDay/:month', function (req, res) {
    let month = ((Number(req.params.month) + 1) < 10) ? '0' + (Number(req.params.month) + 1) : (Number(req.params.month) + 1);
    Employee.findAll({
        where: {
            birthdayDate: {
                [Op.like]: '%-' + month + '-%',
            }
        },
        order:['birthdayDate'],
        attributes: ['name', 'surname', 'birthdayDate'],
    }).then(resp => {
        res.send(resp)
    })
})

// ELIMINA UN HOME OFFICE
Router.delete("/:idUser/:date", function (req, res) {
    // Busco el id para asegurar que solo se elimine el id de usuario / date
    HomeOffice.findOne({
        where: {
            date: req.params.date
        },
        include: [{
            model: Employee,
            as: 'employeeHomeOffice',
            where: {
                id: req.params.idUser
            }
        }]
    })
        .then(resp => {
            HomeOffice.destroy({
                where: {
                    id: resp.dataValues.id
                }
            })
            res.sendStatus(204);
        });;
});

module.exports = Router;
