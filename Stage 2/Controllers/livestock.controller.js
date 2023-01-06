// =================================================================================
// Name of the Program: 	livestock.controller.js
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

// grab the Livestock Object
const NGStageModel = require("../../models");
const Livestock = NGStageModel.livestocks;
const NGDBFunc = require('../../lib/NGAISequelizeLib')
const NGLivestockObjName = 'Livestock';
const config = require('config');

exports.iLivestockSave = function (req, res) {
    NGDBFunc.ngaisave(Livestock, req.body, function (result) {
        if (!result) {
            console.log("Could not create the livestock object in the controller");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
            console.log("We have successfully created the livestock object" + result);
        }
    });
};

exports.iLivestockFindAll = function (req, res) {
    NGDBFunc.ngaifind(Livestock, function (result) {
        if (!result) {
            console.log("Could not find any Livestock objects to display");
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iLivestockFindById = function(req, res) {
    var searchName = 'livestockid';
    var searchValue = req.params.Livestockid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaifindone(Livestock, iQuery, function(result) {
        if (!result) {
            console.log("Could not find any records for the requested ID" + req.params.Livestockid);
        } else if (result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });
};

exports.iLivestockUpdate = function(req, res) {
    var searchName = 'livestockid';
    var searchValue = req.params.Livestockid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaiupdate(Livestock, req.body, iQuery, function(result) {
        if (!result) {
            console.log("The update failed for the following id: " + req.params.Livestockid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    });   
};

exports.iLivestockDelete = function(req, res) {
    var searchName = 'livestockid';
    var searchValue = req.params.Livestockid;
    var iQuery = {};
    iQuery[searchName] = searchValue;
    NGDBFunc.ngaidelete(Livestock, iQuery, function(result) {
        if (!result) {
            console.log("Deletion did not happen for the requested id: " + req.params.Livestockid);
        } else if(result.Error || result.errorCode) {
            res.status(500).send(result);
        } else {
            console.log("You have deleted the Livestock record with destroy" + result);
            res.send(result);
        }
    });
};


