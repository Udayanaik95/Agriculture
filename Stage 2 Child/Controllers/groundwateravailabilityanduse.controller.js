// =================================================================================
// Name of the Program: 	groundwateravailabilityanduse.controller.js
// Description: 			This program contains the function to save, update 
//							view, viewall and delete farm Object
// Name of the Client: 		Hydenmet Solutions Private Limited
// Author:					Udaya Naik
// Organization:			Nacstergen AI Pvt Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
// Initial Ver&Date:   		1.0, 13/12/2022
// ----------------------------------------------------------------------------------
// REVISION HISTORY
// Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// grab the Groundwateravailabilityanduse Object
const NGStageModel = require("../../models");
const Groundwateravailabilityanduse = NGStageModel.groundwateravailabilityanduses;
const NGDBFunc = require('../../lib/NGAISequelizeLib')
const NGGroundwateravailabilityanduseObjName = 'Groundwateravailabilityanduse';
const config = require('config');

exports.iGroundwateravailabilityanduseSave = function (req, res) {
    NGDBFunc.ngaisave(Groundwateravailabilityanduse, req.body, function (result) {
        if (!result) {
            console.log("Could not create the groundwateravailabilityanduse object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the groundwateravailabilityanduse object" + result);
        }
    });
};

exports.iGroundwateravailabilityanduseFindAll = function (req, res) {
    NGDBFunc.ngaifind(Groundwateravailabilityanduse, function (result) {
        if (!result) {
            console.log("Could not find any Groundwateravailabilityanduse objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iGroundwateravailabilityanduseFindById = function(req, res) {
    var searchName = 'groundwateravailabilityanduseid';
    var searchValue = req.params.Groundwateravailabilityanduseid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(Groundwateravailabilityanduse, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.Groundwateravailabilityanduseid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iGroundwateravailabilityanduseUpdate = function(req, res) {
    var searchName = 'groundwateravailabilityanduseid';
    var searchValue = req.params.Groundwateravailabilityanduseid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(Groundwateravailabilityanduse, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.Groundwateravailabilityanduseid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });   
};

exports.iGroundwateravailabilityanduseDelete = function(req, res) {
    var searchName = 'groundwateravailabilityanduseid';
    var searchValue = req.params.Groundwateravailabilityanduseid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(Groundwateravailabilityanduse, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.Groundwateravailabilityanduseid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the Groundwateravailabilityanduse record with destroy" + result);
            res.send(result);
        }
    });
};


