// =================================================================================
// Name of the Program: 	ACDPM.model.js
// Description: 			This program is the schema for the ACDPM object and acts
//                          as a parent object
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 16/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the ACPDM Object

module.exports = (sequelize, Sequelize) => {
    const ACPDM = sequelize.define("acpdm", {
        distid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        distrefid: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        distname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true
        },
        ecozone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        ecosubregion: {
            type: Sequelize.STRING,
            allowNull: true
        },
        agroclimaticzone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        narpzone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        narpdist: {
            type: Sequelize.STRING,
            allowNull: true
        },
        latitude: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        longitude: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        altitude: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        kvkaddress: {
            type: Sequelize.STRING,
            allowNull: true
        },
        geoarea: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        forestarea: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        nonagriuse: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        ppastures: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        wasteland: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        mtcandgroves: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        buncultivableland: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        currfallows: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        otherfallows: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        createdby: {
            type: Sequelize.INTEGER
        },
        lastmodifiedby: {
            type: Sequelize.INTEGER
        }
    });
    return ACPDM;
};