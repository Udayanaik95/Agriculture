// =================================================================================
// Name of the Program: 	mhc.model.js
// Description: 			This program is the schema for the MajorHorticultre object and acts
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

// The fields and database configuration for the Mhc Object

module.exports = (sequelize, Sequelize) => {
    const Mhc = sequelize.define("mhc", {
        mhcid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        mhcname: {
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
        mhtype: {
            type: Sequelize.STRING,
            allowNull: true
        },
        kprod: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        kpdvty: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        rprod: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        rpdvty: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        sprod: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        spdvty: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        tprod: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        tpdvty: {
            type: Sequelize.FLOAT,
            allowNull: true
        }},
        {
            freezeTableName: true,
            tableName: "mhc"
        });
        return Mhc;
        };
        