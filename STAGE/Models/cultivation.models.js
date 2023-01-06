// =================================================================================
// Name of the Program: 	Cultivation.model.js
// Description: 			This program is the schema for the Cultivation object and acts
//                          as a child object to ACPDM object.
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 07/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// The fields and database configuration for the Farm Object

module.exports = (sequelize, Sequelize) => {
    const Cultivation = sequelize.define("cultivation", {
        cultivationid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cultivationname: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        userid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        parcelid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        crop: {
            type: Sequelize.STRING,
            allowNull: true
        },
        variety: {
            type: Sequelize.STRING,
            allowNull: true
        },
        cstartdate: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        cenddate: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        pluscodeid: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        createdby: {
            type: Sequelize.STRING,

        },
        lastmodifiedby: {
            type: Sequelize.STRING,

        }
    });
    return Cultivation;
};