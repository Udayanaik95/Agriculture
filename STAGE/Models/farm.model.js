// =================================================================================
// Name of the Program: 	Farm.model.js
// Description: 			This program is the schema for the Farm object and acts
//                          as a child object to user object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 08/11/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Farm Object

module.exports = (sequelize, Sequelize) => {
    const Farm = sequelize.define("farm", {
        farmid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        	allowNull: false
        },
        farmname: {
            type: Sequelize.STRING, 
            allowNull: false, 
            unique: true
        },
        geofanccid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        parcelid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        pluscodeid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        descp:{
            type: Sequelize.STRING
        },
        createdby: {
            type: Sequelize.INTEGER,
            
        },
        lastmodifiedby: {
            type: Sequelize.INTEGER,
            
        }
    });
    return Farm;
};

