// =================================================================================
// Name of the Program: 	cond.model.js
// Description: 			This program is the schema for the Situation object and acts
//                          as a child object to ACDPM object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.a object and acts
//                          as a child object to user object.i@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0,23/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Cond Object

module.exports = (sequelize, Sequelize) => {
    const Cond = sequelize.define("cond", {
        condid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        	allowNull: false
        },
        condname: {
            type: Sequelize.STRING, 
            allowNull: true
        },
        acpid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        distid: {
        	type: Sequelize.INTEGER,
        	allowNull: true
        },
        ocname: {
        	type: Sequelize.STRING,
        	allowNull: true
        },
        conddur: {
            type: Sequelize.STRING,
            allowNull: true
        },
        mfsituation:{
            type: Sequelize.STRING,
            allowNull: true
        },
        crpsys: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmname1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmdesc1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmname2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmdesc2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sgmname3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sgmdesc3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sgmname4: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sgmdesc4: {
            type: Sequelize.STRING,
            allowNull: false
        },
        remarks: {
            type: Sequelize.STRING,
            allowNull: true
        }},
        {
            freezeTableName: true,
            tableName: "cond"
        });
        return Cond;
        };

