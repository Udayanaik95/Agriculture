// =================================================================================
// Name of the Program: 	Sowingwindowchild.model.js
// Description: 			This program is the schema for the SowingWindow object and acts
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

// The fields and database configuration for the Sowingwindowchild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Sowingwindowchildsch = require('./ACPDM.model');

var Sowingwindowchild = sequelize.define('sowingwindowchild', {
        swmc5id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        swmc5name: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        districkid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        crop1name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crop1window: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crop2name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crop2window: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crop3name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crop3window: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crop4name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        crop4window: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

//create all the defined tables in the specified database.
Sowingwindowchild.sync({alter: true});
console.log('Sowingwindowchild table has been successfully created, if one doesn\'t exist ');

// export Sowingwindowchild model for use in other files.
module.exports = Sowingwindowchild;   