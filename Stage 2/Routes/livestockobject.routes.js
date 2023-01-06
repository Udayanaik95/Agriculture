// =================================================================================
// Name of the Program: 	livestock.routes.js
// Description: 			This program is the role for the Role  and acts
//                          as a child  to role/company .
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

// The fields and database configuration for the Livestock Object

module.exports = app => {
    const livestocks = require("../controllers/User/livestock.controller.js");
    var NGLivestockrouter = require("express").Router();
  
    // Create a new Livestock
    NGLivestockrouter.post("/", livestocks.iLivestockSave);
    
    // Retrieve/View all Livestocks
    NGLivestockrouter.get("/", livestocks.iLivestockFindAll);
  
    // Retrieve/View a single Livestock with id
    NGLivestockrouter.get("/:Livestockid", livestocks.iLivestockFindById);
  
    // Update a Livestock with id
    NGLivestockrouter.put("/:Livestockid", livestocks.iLivestockUpdate);
  
    // Delete a Livestock with id
    NGLivestockrouter.delete("/:Livestockid", livestocks.iLivestockDelete);

    app.use("/api/livestocks", NGLivestockrouter);
};

