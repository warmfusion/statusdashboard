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
    title: 'Future Status Dashboard',
    hostname: '127.0.0.1',
    port: 8080,
    client: {
      transports: []
    },
    services: [],
    serviceInterval: 20000,
    serviceDelay: 1000
  };

  settings['demo'] = {
    port: 8080,
    hostname: '0.0.0.0',
    group: 'Live',
    services: [{
      name: 'techradar', 
      label: 'TechRadar.com',
      check: 'http',
      host: 'www.techradar.com', 
      port: '80',
      path: '/'
    }, {
      name: 'creativebloq.com', 
      label: 'CreativeBloq.com',
      check: 'http',
      host: 'www.creativebloq.com', 
      port: '80',
      path: '/'
    }, {
      name: 'musicradar.com',
      label: 'MusicRadar.com',
      check: 'http',
      host: 'www.musicradar.com',
      port: '80',
      path: '/'
    },{
      name: 'futureplc.com',
      label: 'futureplc.com',
      check: 'http',
      host: 'www.futureplc.com',
      port: '80',
      path: '/'
    },{
      name: 'gizmodo.co.uk',
      label: 'gizmodo.co.uk',
      check: 'http',
      host: 'www.gizmodo.co.uk',
      port: '80',
      path: '/'
    },{
      name: 'lifehacker.com',
      label: 'lifehacker.com',
      check: 'http',
      host: 'lifehacker.com',
      port: '80',
      path: '/'
    },{
      name: 'digitalcameraworld.com',
      label: 'digitalcameraworld.com',
      check: 'http',
      host: 'www.digitalcameraworld.com',
      port: '80',
      path: '/'
    }],
    serviceInterval: 6000,
    plugins : {
      external: {
        enable : false,
        file : __dirname + '/plugins.json'
      },
      console : {
        enable: false
      },
      irc : {
        enable: false,
        server: 'irc.freenode.net',
        nick: 'status',
        options: {
          debug: false,
          port: 8001,
          channels: ['#statusdashboard']
        }
      },
      history: {
        enable: true,
        host: "127.0.0.1",
        port: 6379,
        namespace: "statusdashboard",
        options: {
        },
        client: true
      },
      mail: {
        enable: false,
        sender: 'xxx',
        to: 'xxx',
        subject: '[statusdashboard]: Alert',
        options: {
          nodemailer: {
            host: 'smtp.gmail.com',
            port: 465,
            use_authentication: true,
            ssl: true,
            user: 'xxx',
            pass: 'xxx',
            debug: false
          }
        }
      },
      webhook: {
        enable : false,
        url: 'http://localhost:8080/api/webhook/test'
      },
      heartbeat: {
        enable: false,
        period: 20000
      },
      graphite: {
        enable: false,
        url: 'plaintext://xxx:2003/',
        prefix: 'xxx'
      }
    }
  };

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

