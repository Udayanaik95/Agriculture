// =================================================================================
// Name of the Program: 	rf.model.js
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

// The fields and database configuration for the Rf Object

module.exports = (sequelize, Sequelize) => {
    const Rf = sequelize.define("rf", {
        rfid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        rfname: {
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
        season: {
            type: Sequelize.STRING,
            allowNull: true
        },
        mstart: {
            type: Sequelize.STRING,
            allowNull: true
        },
        mend: {
            type: Sequelize.STRING,
            allowNull: true
        },
        avg: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        onset: {
            type: Sequelize.STRING,
            allowNull: true
        },
        cessation: {
            type: Sequelize.STRING,
            allowNull: true
        }},
        {
            freezeTableName: true,
            tableName: "rf"
        });
        return Rf;
        };