// =================================================================================
// Name of the Program: 	farm.routes.js
// Description: 			This program is the role for the Role object and acts
//                          as a child object to role/company object.
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

// The fields and database configuration for the Farm Object

module.exports = app => {
    const farms = require("../controllers/User/farm.controller.js");
    var NGFarmrouter = require("express").Router();
  
    // Create a new Farm
    NGFarmrouter.post("/", farms.iFarmSave);
    
    // Retrieve/View all Farms
    NGFarmrouter.get("/", farms.iFarmFindAll);
  
    // Retrieve/View a single Farm with id
    NGFarmrouter.get("/:Farmid", farms.iFarmFindById);
  
    // Update a Farm with id
    NGFarmrouter.put("/:Farmid", farms.iFarmUpdate);
  
    // Delete a Farm with id
    NGFarmrouter.delete("/:Farmid", farms.iFarmDelete);

    app.use("/api/farms", NGFarmrouter);
};

