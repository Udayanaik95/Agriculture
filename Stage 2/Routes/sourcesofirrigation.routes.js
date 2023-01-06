// =================================================================================
// Name of the Program: 	sourcesofirrigation.routes.js
// Description: 			This program is the role for the Role object and acts
//                          as a child object to role/company object.
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

// The fields and database configuration for the Sourcesofirrigation Object

module.exports = app => {
    const sourcesofirrigations = require("../controllers/User/sourcesofirrigation.controller.js");
    var NGSourcesofirrigationrouter = require("express").Router();
  
    // Create a new Sourcesofirrigation
    NGSourcesofirrigationrouter.post("/", sourcesofirrigations.iSourcesofirrigationSave);
    
    // Retrieve/View all Sourcesofirrigations
    NGSourcesofirrigationrouter.get("/", sourcesofirrigations.iSourcesofirrigationFindAll);
  
    // Retrieve/View a single Sourcesofirrigation with id
    NGSourcesofirrigationrouter.get("/:Sourcesofirrigationid", sourcesofirrigations.iSourcesofirrigationFindById);
  
    // Update a Sourcesofirrigation with id
    NGSourcesofirrigationrouter.put("/:Sourcesofirrigationid", sourcesofirrigations.iSourcesofirrigationUpdate);
  
    // Delete a Sourcesofirrigation with id
    NGSourcesofirrigationrouter.delete("/:Sourcesofirrigationid", sourcesofirrigations.iSourcesofirrigationDelete);

    app.use("/api/sourcesofirrigations", NGSourcesofirrigationrouter);
};


