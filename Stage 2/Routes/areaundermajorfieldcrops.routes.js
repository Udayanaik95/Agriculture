// =================================================================================
// Name of the Program: 	areaundermajorfieldcrops.routes.js
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

// The fields and database configuration for the Areaundermajorfieldcrops Object

module.exports = app => {
    const areaundermajorfieldcrops = require("../controllers/User/areaundermajorfieldcrops.controller.js");
    var NGAreaundermajorfieldcrops = require("express").Router();
  
    // Create a new Areaundermajorfieldcrops
    NGAreaundermajorfieldcrops.post("/", areaundermajorfieldcrops.iAreaundermajorfieldcropsSave);
    
    // Retrieve/View all Areaundermajorfieldcrops
    NGAreaundermajorfieldcrops.get("/", areaundermajorfieldcrops.iAreaundermajorfieldcropsFindAll);
  
    // Retrieve/View a single Areaundermajorfieldcrops with id
    NGAreaundermajorfieldcrops.get("/:Areaundermajorfieldcropsid", areaundermajorfieldcrops.iAreaundermajorfieldcropsFindById);
  
    // Update a Areaundermajorfieldcrops with id
    NGAreaundermajorfieldcrops.put("/:Areaundermajorfieldcropsid", areaundermajorfieldcrops.iAreaundermajorfieldcropsUpdate);
  
    // Delete a Areaundermajorfieldcrops with id
    NGAreaundermajorfieldcrops.delete("/:Areaundermajorfieldcropsid", areaundermajorfieldcrops.iAreaundermajorfieldcropsDelete);

    app.use("/api/areaundermajorfieldcrops", NGAreaundermajorfieldcropsrouter);
};

