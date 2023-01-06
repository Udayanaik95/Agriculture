// =================================================================================
// Name of the Program: 	GeoFance.model.js
// Description: 			This program is the schema for the Farm object and acts
//                          as a child object to ACPDM object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 07/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Farm Object

module.exports = (sequelize, Sequelize) => {
    const Farm = sequelize.define("farm", {
        gfid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        	allowNull: false
        },
        gfname: {
            type: Sequelize.STRING, 
            allowNull: false, 
            unique: true
        },
        gfobjname: {
        	type: Sequelize.STRING,
        	allowNull: true
        },
        gfobjid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        parcelid: {
            type: Sequelize.STRING,
            allowNull: true
        },
        shape:{
            type: Sequelize.STRING,
            allowNull:true
        },
        desc:{
            type: Sequelize.STRING,
            allowNull:true
        },
        createdby: {
            type: Sequelize.STRING,
            
        },
        lastmodifiedby: {
            type: Sequelize.STRING,
            
        }
    });
    return Farm;
};

