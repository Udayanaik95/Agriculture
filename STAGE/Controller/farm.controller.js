// =================================================================================
// Name of the Program: 	farm.controller.js
// Description: 			This program contains the function to save, update 
//							view, viewall and delete farm Object
// Name of the Client: 		Hydenmet Solutions Private Limited
// Author:					Udaya Naik
// Organization:			Nacstergen AI P Ltd
//							#458, 38th Cross, Rajajinagar 2nd Block, Bangalore 560010
//							Ph: +91-80-23424051, e-Mail: conversation.ai@nacstergen.ai
//							URL: www.nacstergen.ai
// Initial Ver&Date:   		1.0, 08/11/2022
// ----------------------------------------------------------------------------------
// REVISION HISTORY
// Version No  :   Revision Date:     Author:		   Details
//
// ==================================================================================

// grab the Farm Object
const NGStageModel = require("../../models");
const Farm = NGStageModel.farms;
const NGDBFunc = require('../../lib/NGAISequelizeLib')
const NGFarmObjName = 'Farm';
const config = require('config');

exports.iFarmSave = function (req, res) {
    NGDBFunc.ngaisave(Farm, req.body, function (result) {
        if (!result) {
            console.log("Could not create the farm object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the farm object" + result);
        }
    });
};

exports.iFarmFindAll = function (req, res) {
    NGDBFunc.ngaifind(Farm, function (result) {
        if (!result) {
            console.log("Could not find any Farm objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iFarmFindById = function(req, res) {
    var searchName = 'farmid';
    var searchValue = req.params.Farmid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(Farm, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.Farmid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iFarmUpdate = function(req, res) {
    var searchName = 'farmid';
    var searchValue = req.params.Farmid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(Farm, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.Farmid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });   
};

exports.iFarmDelete = function(req, res) {
    var searchName = 'farmid';
    var searchValue = req.params.Farmid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(Farm, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.Farmid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the Farm record with destroy" + result);
            res.send(result);
        }
    });
};


