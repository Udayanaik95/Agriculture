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
//Initial Ver&Date:   		1.0, 23/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Agriculturelandusechild Object

module.exports = (sequelize, Sequelize) => {
    const Agriculturelandusechild = sequelize.define("Agriculturelandusechild", {

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
    }},
    {
        freezeTableName: true,
        tableName: "agriculturelandusechild"
    });
return Agriculturelandusechild;
};
