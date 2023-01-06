// =================================================================================
// Name of the Program: 	sourceofirrigation.controller.js
// Description: 			This program contains the function to save, update 
//							view, viewall and delete areaundermajorfieldcrops Object
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

// grab the Sourcesofirrigation Object
const NGStageModel = require("../../models");
const Sourcesofirrigation = NGStageModel.sourcesofirrigations;
const NGDBFunc = require('../../lib/NGAISequelizeLib')
const NGSourcesofirrigationObjName = 'Sourcesofirrigation';
const config = require('config');

exports.iSourcesofirrigationSave = function (req, res) {
    NGDBFunc.ngaisave(Sourcesofirrigation, req.body, function (result) {
        if (!result) {
            console.log("Could not create the sourcesofirrigation object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the sourcesofirrigation object" + result);
        }
    });
};

exports.iSourcesofirrigationFindAll = function (req, res) {
    NGDBFunc.ngaifind(Sourcesofirrigation, function (result) {
        if (!result) {
            console.log("Could not find any Sourcesofirrigation objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iSourcesofirrigationFindById = function(req, res) {
    var searchName = 'sourcesofirrigationid';
    var searchValue = req.params.Sourcesofirrigationid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(Sourcesofirrigation, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.Sourcesofirrigationid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iSourcesofirrigationUpdate = function(req, res) {
    var searchName = 'sourcesofirrigationid';
    var searchValue = req.params.Sourcesofirrigationid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(Sourcesofirrigation, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.Sourcesofirrigationid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });   
};

exports.iSourcesofirrigationDelete = function(req, res) {
    var searchName = 'sourcesofirrigationid';
    var searchValue = req.params.Sourcesofirrigationid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(Sourcesofirrigation, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.Sourcesofirrigationid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the Sourcesofirrigation record with destroy" + result);
            res.send(result);
        }
    });
};


