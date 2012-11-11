var os = require('os');
var fs = require('fs');
var path = require("path");
var logger = require('util');

// Hack nodejs API change
fs.exists = fs.exists || require('path').exists;
fs.existsSync = fs.existsSync || require('path').existsSync;

exports.create = function() {
  var settings = {};
  var defaults = {
    title: 'Services Status Dashboard',
    hostname: '127.0.0.1',
    port: 8080,
    client: {
      transports: []
    },
    services: [],
    serviceInterval: 20000,
    serviceDelay: 500
  };

    settings['mite_internal'] = {
	  title: "MITE Internal Status",
	  port: 8080,
	  hostname: '0.0.0.0',
	  services: [{
	      name: 'cm',
	      label: 'Config Manager',
	      host: '192.168.6.84',
	      port: '8330',
	      path: '/cm/healthCheck',

	      check: 'http'
      },
      {
	      name: 'processor',
	      label: 'Processor',
	      host: '192.168.6.85',
	      port: '8430',
	      path: '/processor/healthCheck',

	      check: 'http'
      },
      {
	      name: 'acceptor',
	      label: 'Acceptor',
	      host: '192.168.6.83',
	      port: '8530',
	      path: '/acceptor/healthCheck',

	      check: 'http'
      },
      {
	      name: 'rs',
	      label: 'Report Server',
	      host: '192.168.6.86',
	      port: '8630',
	      path: '/rs/healthCheck',

	      check: 'http'
      },
      {
	      name: 'PortalAMF',
	      label: 'The Portal',
	      host: '192.168.6.82',
	      port: '8730',
	      path: '/PortalAMF/healthCheck',

	      check: 'http'
      },
      {
	      name: 'hosted',
	      label: 'Hosted',
	      host: '192.168.6.81',
	      port: '9030',
	      path: '/hosted/healthCheck',
	      check: 'http'
      },{
	      name: 'customer-card-service',
	      label: 'customer-card-service',
	      host: '192.168.6.85',
	      port: '8430',
	      path: '/customer-card-service/healthCheck',

	      check: 'http'
      },{
	      name: 'mock-merchant',
	      label: 'Mock Merchant',
	      host: '192.168.6.97',
	      port: '8930',
	      path: '/hosted-merchant/',

	      check: 'http'
      },{
	      name: 'txn-injector',
	      label: 'Transaction Injector',
	      host: '192.168.6.97',
	      port: '8930',
	      path: '/transaction-injector/',

	      check: 'http'
      }],
    serviceInterval: 30000,  
    plugins : { 
      console : {
        enable: false
      }}
  }
  
  var mySettings = defaults;
  // logger.log("Dumping defaults:\r\n" + JSON.stringify(mySettings));

  if (process.env.APP_ENV) {
    logger.log("Loading settings: " + process.env.APP_ENV);
    mySettings = merge(mySettings, settings[process.env.APP_ENV]);
  }

  // logger.log("Dumping after APP_ENV:\r\n" + JSON.stringify(mySettings));

  if (process.env.APP_SETTINGS) {
    logger.log("Loading appSettings: " + process.env.APP_SETTINGS);
    if (fs.existsSync(process.env.APP_SETTINGS)) {
      appSettings = require(process.env.APP_SETTINGS).create();
      mySettings = merge(mySettings, appSettings);
    } else {
      logger.log("WARN: " + process.env.APP_SETTINGS + " does not exist or not a file.");
    }
  }

  // logger.log("Dumping after APP_SETTINGS:\r\n" + JSON.stringify(mySettings));
  return mySettings;
};

function merge(obj1, obj2) {
  for (var p in obj2) {
    try {
      if (typeof(obj2[p]) == 'object') {
        if (obj2[p].constructor == Array) {
          if (obj2[p].length != 0) {
            for (var j in obj2[p]) {
              if (obj1[p].length == 0) {
                obj1[p][0] = obj2[p][j];
              } else {
                var found = false;
                for (var i in obj1[p]) {
                  if (obj1[p][i].name == obj2[p][j].name) {
                    obj1[p][i] = merge(obj1[p][i], obj2[p][j]);
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  obj1[p][obj1[p].length] = obj2[p][j];
                }
              }
            }
          }
        } else {
          obj1[p] = merge(obj1[p], obj2[p]);
        }
      } else {
        obj1[p] = obj2[p];
      }
    } catch(e) {
      // logger.log(e);
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}


