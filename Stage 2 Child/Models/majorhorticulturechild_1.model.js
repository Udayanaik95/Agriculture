// =================================================================================
// Name of the Program: 	Majorhorticulturechild.model.js
// Description: 			This program is the schema for the MajorHorticultre object and acts
//                          as a child object to ACDPM object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 16/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Majorhorticulturechild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Majorhorticulturechildsch = require('./ACPDM.model');

var Majorhorticulturechild = sequelize.define('majorhorticulturechild', {

        mhcropsid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        mhcropsname: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        districkid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        mhtype: {
            type: Sequelize.STRING,
            allowNull: true
        },
        kproduction: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        kproductivity: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        rproduction: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        rproductivity: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        sproduction: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        sproductivity: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        tproduction: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        tproductivity: {
            type: Sequelize.FLOAT,
            allowNull: true
        }
    });
    
//create all the defined tables in the specified database.
Majorhorticulturechild.sync({alter: true});
console.log('Majorhorticulturechild table has been successfully created, if one doesn\'t exist ');

// export Majorhorticulturechild model for use in other files.
module.exports = Majorhorticulturechild;