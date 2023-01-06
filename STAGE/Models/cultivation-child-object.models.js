// =================================================================================
// Name of the Program: 	CultivationChildObject.model.js
// Description: 			This program is the schema for the CultivationChildObject object
// Name of the Client: 		Nacstergen AI P Ltd
// Author:					Udaya Naik
// Organization:			Nacstergen AI Pvt. Ltd.
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
//Initial Ver&Date:   		1.0, 07/12/2022
// ----------------------------------------------------------------------------------
//REVISION HISTORY
//Version No  :   Revision Date:     Author:		   Details

// ==================================================================================

// The fields and database configuration for the Case

var Sequelize = require('sequelize');
var config = require('config');
var sequelize = new Sequelize(config.ITSSRCDBDev);
//const ITSSUserSch = require('./ITSSRCUserModel');
//const ITSSRCVehicleSch = require('./ITSSRCVehicleModel');
const Cultivation = require('./cultivation.model')


var CCObject = sequelize.define('ccobject', {
    ccobjectid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    ccobjectname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    plannedactiondate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    action: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cropcalid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    yieldplanned: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    yieldgrade: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    yieldplanneddate: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    deviation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    reason: {
        type: Sequelize.STRING,
        allowNull: true
    },
    actionstatus: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusdate: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    yieldachieved: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    yielddeliverydate: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    createdby: {
        type: Sequelize.INTEGER

    },
    lastmodifiedby: {
        type: Sequelize.INTEGER,

    }
});

GFChild.GeoFance = GeoFence.hasMany(ITSSCGeoFenceDetailSch, {
    foreignKey: 'gfid',
    sourceKey: 'gfenceid',
    onDelete: 'cascade'
});



GFChild.associate = function(models) {
    GFChild.belongsTo(GeoFance, {
        foreignKey: 'groupid',
        targetKey: 'groupid'
    });
};

GroupDetail.belongsTo(ITSSRCVehicleSch, {
    foreignKey: 'vehicleid',
    targetKey: 'vehicleid'
});

GroupDetail.belongsTo(ITSSUserSch, {
    foreignKey: 'userid',
    sourceKey: 'userId'
});

//create all the defined tables in the specified database.
GroupDetail.sync();
console.log('GroupDetail table has been successfully created, if one doesn\'t exist ');

// export ULeave model for use in other files.
module.exports = GroupDetail;