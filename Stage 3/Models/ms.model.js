// =================================================================================
// Name of the Program: 	ms.model.js
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

// The fields and database configuration for the Ms Object

module.exports = (sequelize, Sequelize) => {
    const Ms = sequelize.define("ms", {
        msid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        msname: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        acpid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        distid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        area: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        prcnt: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: true
        }},
        {
            freezeTableName: true,
            tableName: "ms"
        });
        return Ms;
        };
        