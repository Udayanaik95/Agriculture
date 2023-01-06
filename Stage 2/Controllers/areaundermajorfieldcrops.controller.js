// =================================================================================
// Name of the Program: 	areaundermajorfieldcrops.controller.js
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

// grab the Areaundermajorfieldcrops Object
const NGStageModel = require("../../models");
const Areaundermajorfieldcrops = NGStageModel.areaundermajorfieldcropss;
const NGDBFunc = require('../../lib/NGAISequelizeLib')
const NGAreaundermajorfieldcropsObjName = 'Areaundermajorfieldcrops';
const config = require('config');

exports.iAreaundermajorfieldcropsSave = function (req, res) {
    NGDBFunc.ngaisave(Areaundermajorfieldcrops, req.body, function (result) {
        if (!result) {
            console.log("Could not create the areaundermajorfieldcrops object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the areaundermajorfieldcrops object" + result);
        }
    });
};

exports.iAreaundermajorfieldcropsFindAll = function (req, res) {
    NGDBFunc.ngaifind(Areaundermajorfieldcrops, function (result) {
        if (!result) {
            console.log("Could not find any Areaundermajorfieldcrops objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iAreaundermajorfieldcropsFindById = function(req, res) {
    var searchName = 'areaundermajorfieldcropsid';
    var searchValue = req.params.Areaundermajorfieldcropsid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(Areaundermajorfieldcrops, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.Areaundermajorfieldcropsid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iAreaundermajorfieldcropsUpdate = function(req, res) {
    var searchName = 'areaundermajorfieldcropsid';
    var searchValue = req.params.Areaundermajorfieldcropsid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(Areaundermajorfieldcrops, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.Areaundermajorfieldcropsid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });   
};

exports.iAreaundermajorfieldcropsDelete = function(req, res) {
    var searchName = 'areaundermajorfieldcropsid';
    var searchValue = req.params.Areaundermajorfieldcropsid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(Areaundermajorfieldcrops, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.Areaundermajorfieldcropsid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the Areaundermajorfieldcrops record with destroy" + result);
            res.send(result);
        }
    });
};


