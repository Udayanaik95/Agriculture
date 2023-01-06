// =================================================================================
// Name of the Program: 	Horticulture.model.js
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

// The fields and database configuration for the Horticulture Object

module.exports = (sequelize, Sequelize) => {
    const Horticulture = sequelize.define("horticulture", {
        hccdid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        hccfname: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        distid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        hctype: {
            type: Sequelize.STRING,
            allowNull: true
        },
        totalarea: {
            type: Sequelize.STRING,
            allowNull: true
        },
        irrigated: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rained: {
            type: Sequelize.FLOAT,
            allowNull: true
        }}, {
            freezeTableName: true,
            tableName: "horticultures"
        });
    return Horticulture;
};
