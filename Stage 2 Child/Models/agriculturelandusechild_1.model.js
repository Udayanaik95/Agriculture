// =================================================================================
// Name of the Program: 	Agriculturelandusechild.model.js
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

// The fields and database configuration for the Agriculturelandusechild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Agriculturelandusechildsch = require('./ACPDM.model');

var Agriculturelandusechild = sequelize.define('agriculturelandusechild', {

    agriculturelanduseid: {
        type: Sequelize.INTEGER,
        autoIncreent: true,
        primaryKey: true,
        allowNull: true
    },
    landname: {
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
    croppingintensity: {
        type: Sequelize.FLOAT,
        allowNull: true
    }
});

    //create all the defined tables in the specified database.
Agriculturelandusechild.sync({alter: true});
console.log('Agriculturelandusechild table has been successfully created, if one doesn\'t exist ');

// export Agriculturelandusechild model for use in other files.
module.exports = Agriculturelandusechild;