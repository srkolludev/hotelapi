'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================

module.exports = {

  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://root:root@ds147599.mlab.com:47599/restaurant'
    // uri: 'mongodb://localhost/restaurantdemo'
    uri: 'mongodb://dbadmin:Gr8Service123$@ds147118.mlab.com:47118/hotelorderdb'
  },

  // Seed database on startup
  seedDB: false

};
//# sourceMappingURL=development.js.map
