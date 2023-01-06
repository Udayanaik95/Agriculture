// =================================================================================
// Name of the Program: 	Majorsoilchild.model.js
// Description: 			This program is the schema for the Rainfall object and acts
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

// The fields and database configuration for the Majorsoilchild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Majorsoilchildsch = require('./ACPDM.model');

var Majorsoilchild = sequelize.define('majorsoilchild', {
        majorsoilid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        msname: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        distid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        area: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        percent: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: true
        },
        createdby: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        lastmodifiedby: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });

//create all the defined tables in the specified database.
Majorsoilchild.sync({alter: true});
console.log('Majorsoilchild table has been successfully created, if one doesn\'t exist ');

// export Majorsoilchild model for use in other files.
module.exports = Majorsoilchild;