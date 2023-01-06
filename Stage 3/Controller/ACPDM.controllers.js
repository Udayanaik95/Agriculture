// =================================================================================
// Name of the Program: 	ACPDM.controller.js
// Description: 			This program contains the function to save, update 
//							view, viewall and delete acpdm Object
// Name of the Client: 		Hydenmet Solutions Private Limited
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
// Initial Ver&Date:   		1.0, 16/12/2022
// ----------------------------------------------------------------------------------
// REVISION HISTORY
// Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// grab the ACPDM Object
const NGStageModel = require("../models");
const ACPDM = NGStageModel.acpdms;
const NGDBFunc = require('../lib/NGAISequelizeLib')
const NGACPDMObjName = 'ACPDM';
const config = require('config');

exports.iACPDMSave = function(req, res) {
    NGDBFunc.ngaisave(ACPDM, req.body, function(result) {
        if (!result) {
            console.log("Could not create the acpdm object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the acpdm object" + result);
        }
    });
};

exports.iACPDMFindAll = function(req, res) {
    NGDBFunc.ngaifind(ACPDM, function(result) {
        if (!result) {
            console.log("Could not find any ACPDM objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iACPDMFindById = function(req, res) {
    var searchName = 'acpdmid';
    var searchValue = req.params.ACPDMid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(ACPDM, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.ACPDMid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iACPDMUpdate = function(req, res) {
    var searchName = 'acpdmid';
    var searchValue = req.params.ACPDMid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(ACPDM, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.ACPDMid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iACPDMDelete = function(req, res) {
    var searchName = 'acpdmid';
    var searchValue = req.params.ACPDMid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(ACPDM, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.ACPDMid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the ACPDM record with destroy" + result);
            res.send(result);
        }
    });
};