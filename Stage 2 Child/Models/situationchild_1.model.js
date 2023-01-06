// =================================================================================
// Name of the Program: 	Situationchild.model.js
// Description: 			This program is the schema for the Situation object and acts
//                          as a child object to ACDPM object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.a object and acts
//                          as a child object to user object.i@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 16/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Situationchild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Situationchildsch = require('./ACPDM.model');

var Situationchild = sequelize.define('situationchild', {
        conditionid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        	allowNull: false
        },
        overalcondname: {
            type: Sequelize.STRING, 
            allowNull: true
        },
        districtid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        conditionname: {
        	type: Sequelize.STRING,
        	allowNull: true
        },
        condduration: {
            type: Sequelize.STRING,
            allowNull: true
        },
        mfsituation:{
            type: Sequelize.STRING,
            allowNull: true
        },
        cropsystem: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmeasuresname1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmeasuresdesc1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmeasuresname2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmeasuresdesc2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmeasuresname3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sgmeasuresdesc3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sgmeasuresname4: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sgmeasuresdesc4: {
            type: Sequelize.STRING,
            allowNull: false
        },
        remarkonimplemntion: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    
//create all the defined tables in the specified database.
Situationchild.sync({alter: true});
console.log('Situationchild table has been successfully created, if one doesn\'t exist ');

// export Situationchild model for use in other files.
module.exports = Situationchild;

