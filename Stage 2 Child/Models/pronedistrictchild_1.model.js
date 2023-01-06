// =================================================================================
// Name of the Program: 	Pronedistrictchild.model.js
// Description: 			This program is the schema for the ProneDistrict object and acts
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

// The fields and database configuration for the Pronedistrictchild Object

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.NGAISTAGEDBDev);
const Pronedistrictchildsch = require('./ACPDM.model');

var Pronedistrictchild = sequelize.define('pronedistrictchild', {
        mconid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        	allowNull: false
        },
        mconname: {
            type: Sequelize.STRING, 
            allowNull: false, 
            unique: true
        },
        districtid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        regular: {
            type: Sequelize.STRING,
            allowNull: true
        },
        occassional: {
            type: Sequelize.STRING,
            allowNull: true
        },
        none: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

//create all the defined tables in the specified database.
Pronedistrictchild.sync({alter: true});
console.log('Pronedistrictchild table has been successfully created, if one doesn\'t exist ');

// export Pronedistrictchild model for use in other files.
module.exports = Pronedistrictchild;
