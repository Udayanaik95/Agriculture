// =================================================================================
// Name of the Program: 	irrigation.routes.js
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

// The fields and database configuration for the Irrigation Object

module.exports = app => {
    const irrigations = require("../controllers/User/irrigation.controller.js");
    var NGIrrigationrouter = require("express").Router();
  
    // Create a new Irrigation
    NGIrrigationrouter.post("/", irrigations.iIrrigationSave);
    
    // Retrieve/View all Irrigations
    NGIrrigationrouter.get("/", irrigations.iIrrigationFindAll);
  
    // Retrieve/View a single Irrigation with id
    NGIrrigationrouter.get("/:Irrigationid", irrigations.iIrrigationFindById);
  
    // Update a Irrigation with id
    NGIrrigationrouter.put("/:Irrigationid", irrigations.iIrrigationUpdate);
  
    // Delete a Irrigation with id
    NGIrrigationrouter.delete("/:Irrigationid", irrigations.iIrrigationDelete);

    app.use("/api/irrigations", NGIrrigationrouter);
};

