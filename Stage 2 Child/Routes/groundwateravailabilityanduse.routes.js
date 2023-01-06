// =================================================================================
// Name of the Program: 	groundwateravailabilityanduse.routes.js
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

// The fields and database configuration for the Groundwateravailabilityanduse Object

module.exports = app => {
    const groundwateravailabilityanduses = require("../controllers/User/groundwateravailabilityanduse.controller.js");
    var NGGroundwateravailabilityanduserouter = require("express").Router();
  
    // Create a new Groundwateravailabilityanduse
    NGGroundwateravailabilityanduserouter.post("/", groundwateravailabilityanduses.iGroundwateravailabilityanduseSave);
    
    // Retrieve/View all Groundwateravailabilityanduses
    NGGroundwateravailabilityanduserouter.get("/", groundwateravailabilityanduses.iGroundwateravailabilityanduseFindAll);
  
    // Retrieve/View a single Groundwateravailabilityanduse with id
    NGGroundwateravailabilityanduserouter.get("/:Groundwateravailabilityanduseid", groundwateravailabilityanduses.iGroundwateravailabilityanduseFindById);
  
    // Update a Groundwateravailabilityanduse with id
    NGGroundwateravailabilityanduserouter.put("/:Groundwateravailabilityanduseid", groundwateravailabilityanduses.iGroundwateravailabilityanduseUpdate);
  
    // Delete a Groundwateravailabilityanduse with id
    NGGroundwateravailabilityanduserouter.delete("/:Groundwateravailabilityanduseid", groundwateravailabilityanduses.iGroundwateravailabilityanduseDelete);

    app.use("/api/groundwateravailabilityanduses", NGGroundwateravailabilityanduserouter);
};

