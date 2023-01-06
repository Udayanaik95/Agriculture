// =================================================================================
// Name of the Program: 	irrigation.controller.js
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

// grab the Irrigation Object
const NGStageModel = require("../../models");
const Irrigation = NGStageModel.irrigations;
const NGDBFunc = require('../../lib/NGAISequelizeLib')
const NGIrrigationObjName = 'Irrigation';
const config = require('config');

exports.iIrrigationSave = function (req, res) {
    NGDBFunc.ngaisave(Irrigation, req.body, function (result) {
        if (!result) {
            console.log("Could not create the irrigation object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the irrigation object" + result);
        }
    });
};

exports.iIrrigationFindAll = function (req, res) {
    NGDBFunc.ngaifind(Irrigation, function (result) {
        if (!result) {
            console.log("Could not find any Irrigation objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iIrrigationFindById = function(req, res) {
    var searchName = 'irrigationid';
    var searchValue = req.params.Irrigationid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(Irrigation, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.Irrigationid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iIrrigationUpdate = function(req, res) {
    var searchName = 'irrigationid';
    var searchValue = req.params.Irrigationid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(Irrigation, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.Irrigationid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });   
};

exports.iIrrigationDelete = function(req, res) {
    var searchName = 'irrigationid';
    var searchValue = req.params.Irrigationid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(Irrigation, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.Irrigationid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the Irrigation record with destroy" + result);
            res.send(result);
        }
    });
};


