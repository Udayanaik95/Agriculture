// =================================================================================
// Name of the Program: 	ACPDM.routes.js
// Description: 			This program is the role for the Role object and acts
//                          as a child object to role/company object.
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

// The fields and database configuration for the ACPDM Object

module.exports = app => {
    const acpdms = require("../controllers/ACPDM.controller.js");
    var NGACPDMrouter = require("express").Router();

    // Create a new ACPDM
    NGACPDMrouter.post("/", acpdms.iACPDMSave);

    // Retrieve/View all ACPDMs
    NGACPDMrouter.get("/", acpdms.iACPDMFindAll);

    // Retrieve/View a single ACPDM with id
    NGACPDMrouter.get("/:ACPDMid", acpdms.iACPDMFindById);

    // Update a ACPDM with id
    NGACPDMrouter.put("/:ACPDMid", acpdms.iACPDMUpdate);

    // Delete a ACPDM with id
    NGACPDMrouter.delete("/:ACPDMid", acpdms.iACPDMDelete);

    app.use("/api/acpdms", NGACPDMrouter);
};