// =================================================================================
// Name of the Program: 	groundwateravailabilityanduse.model.js
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

// The fields and database configuration for the Groundwateravailabilityanduse Object

module.exports = (sequelize, Sequelize) => {
    const Groundwateravailabilityanduse = sequelize.define("groundwateravailabilityanduse", {
        groundwateravailabilityanduseid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    gwobjectname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    dictid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    numblock: {
        type: Sequelize.STRING,
        allowNull: true
    },


    percofgwtr: {
        type: Sequelize.FLOAT,
        allowNull: true  
    },

    qtyofwtr: {
        type: Sequelize.STRING,
        allownull: true
            
    }
});
return Groundwateravailabilityanduse;
};