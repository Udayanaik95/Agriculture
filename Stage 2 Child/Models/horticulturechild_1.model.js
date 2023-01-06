// =================================================================================
// Name of the Program: 	Horticulturechild.model.js
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

// The fields and database configuration for the Horticulturechild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Horticulturechildsch = require('./ACPDM.model');

var Horticulturechild = sequelize.define('horticulturechild', {
        hccdid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        hccfname: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        distid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        hctype: {
            type: Sequelize.STRING,
            allowNull: true
        },
        totalarea: {
            type: Sequelize.STRING,
            allowNull: true
        },
        irrigated: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rained: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        createdby: {
            type: Sequelize.INTEGER,
        },
        lastmodifiedby: {
            type: Sequelize.INTEGER,
        }
    });

//create all the defined tables in the specified database.
Horticulturechild.sync({alter: true});
console.log('Horticulturechild table has been successfully created, if one doesn\'t exist ');

// export Horticulturechild model for use in other files.
module.exports = Horticulturechild;