// =================================================================================
// Name of the Program: 	sourceofirrigationchild.model.js
// Description: 			This program is the schema for the Farm object and acts
//                          as a child object to user object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 09/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Sourceofirrigationchild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Sourceofirrigationchildsch = require('./ACPDM.model');

var Sourceofirrigationchild = sequelize.define('sourceofirrigationchild', {
        sourceofirrigationid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    srcobjectname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    dictid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    number: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    area: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    percentage: {
        type: Sequelize.FLOAT,
        allowNull: true  
            
    }
});

//create all the defined tables in the specified database.
Sourceofirrigationchild.sync({alter: true});
console.log('Sourceofirrigationchild table has been successfully created, if one doesn\'t exist ');

// export Sourceofirrigationchild model for use in other files.
module.exports = Sourceofirrigationchild;