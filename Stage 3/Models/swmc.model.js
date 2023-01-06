// =================================================================================
// Name of the Program: 	swmc.model.js
// Description: 			This program is the schema for the SowingWindow object and acts
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

// The fields and database configuration for the Swmc Object

module.exports = (sequelize, Sequelize) => {
    const Swmc = sequelize.define("swmc", {
        swmcid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        swmcname: {
            type: Sequelize.STRING,
            allowNull: true,
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
        crp1name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crp1window: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crp2name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crp2window: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crp3name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crp3window: {
            type: Sequelize.STRING,
            allowNull: true
        },
        crp4name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        crp4window: {
            type: Sequelize.STRING,
            allowNull: true
        }},
        {
            freezeTableName: true,
            tableName: "swmc"
        });
        return Swmc;
        };