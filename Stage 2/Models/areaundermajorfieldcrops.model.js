// =================================================================================
// Name of the Program: 	areaundermajorfieldcrops.model.js
// Description: 			This program is the schema for the Areaundermajorfieldcrops object and acts
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

// The fields and database configuration for the Areaundermajorfieldcrops Object

module.exports = (sequelize, Sequelize) => {
    const Areaundermajorfieldcrops = sequelize.define("areaundermajorfieldcrops", {
        areaundermajorfieldcropsid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },

        fldcrpobjectname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        dictid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },

        totarea: {
            type: Sequelize.FLOAT,
            allowNull: true  
        },

        irrigated: {
            type: Sequelize.FLOAT,
            allowNull: true  
        },

        rainfed: {
            type: Sequelize.FLOAT,
            allowNull: true  
            
        }
    });
    return Areaundermajorfieldcrops;
};