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
    services: [{
      name: 'techradar', 
      label: 'TechRadar.com',
      check: 'http',
      host: 'www.techradar.com', 
      port: '80',
      path: '/'
    },   {
      name: 'www.mobiles.co.uk', 
      label: 'www.mobiles.co.uk',
      check: 'http',
      host: 'www.mobiles.co.uk', 
      port: '80',
      path: '/contract-phones.html'
    }, 
   {
      name: 'www.amazon.co.uk', 
      label: 'www.amazon.co.uk',
      check: 'http',
      host: 'www.amazon.co.uk', 
      port: '80',
      path: '/gp/deals/'
    }, 
   {
      name: 'www.amazon.com', 
      label: 'www.amazon.com',
      check: 'http',
      host: 'www.amazon.com', 
      port: '80',
      path: '/gp/goldbox/'
    }, 
   {
      name: 'www.amazon.ca', 
      label: 'www.amazon.ca',
      check: 'http',
      host: 'www.amazon.ca', 
      port: '80',
      path: '/gp/goldbox'
    }, 
   {
      name: 'www.amazon.de', 
      label: 'www.amazon.de',
      check: 'http',
      host: 'www.amazon.de', 
      port: '80',
      path: '/gp/angebote'
    }, 
   {
      name: 'www.mobiles.co.uk', 
      label: 'www.mobiles.co.uk',
      check: 'http',
      host: 'www.mobiles.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.co.uk', 
      label: 'www.amazon.co.uk',
      check: 'http',
      host: 'www.amazon.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.com', 
      label: 'www.amazon.com',
      check: 'http',
      host: 'www.amazon.com', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.ca', 
      label: 'www.amazon.ca',
      check: 'http',
      host: 'www.amazon.ca', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.de', 
      label: 'www.amazon.de',
      check: 'http',
      host: 'www.amazon.de', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.johnlewis.com', 
      label: 'www.johnlewis.com',
      check: 'http',
      host: 'www.johnlewis.com', 
      port: '80',
      path: '/home-garden/bedroom/c6000074?rdr=1'
    }, 
   {
      name: 'www.carphonewarehouse.com', 
      label: 'www.carphonewarehouse.com',
      check: 'http',
      host: 'www.carphonewarehouse.com', 
      port: '80',
      path: '/mobiles'
    }, 
   {
      name: 'www.mobilephonesdirect.co.uk', 
      label: 'www.mobilephonesdirect.co.uk',
      check: 'http',
      host: 'www.mobilephonesdirect.co.uk', 
      port: '80',
      path: '/contract-deals'
    }, 
   {
      name: 'www.buymobiles.net', 
      label: 'www.buymobiles.net',
      check: 'http',
      host: 'www.buymobiles.net', 
      port: '80',
      path: '/apple'
    }, 
   {
      name: 'www.tesco.com', 
      label: 'www.tesco.com',
      check: 'http',
      host: 'www.tesco.com', 
      port: '80',
      path: '/direct/'
    }, 
   {
      name: 'www.currys.co.uk', 
      label: 'www.currys.co.uk',
      check: 'http',
      host: 'www.currys.co.uk', 
      port: '80',
      path: '/gbuk/tv-and-home-entertainment-31-u.html'
    }, 
   {
      name: 'www.microsoftstore.com', 
      label: 'www.microsoftstore.com',
      check: 'http',
      host: 'www.microsoftstore.com', 
      port: '80',
      path: '/store/msuk/en_GB/home'
    }, 
   {
      name: 'www.argos.co.uk', 
      label: 'www.argos.co.uk',
      check: 'http',
      host: 'www.argos.co.uk', 
      port: '80',
      path: '/static/Home.htm'
    }, 
   {
      name: 'www.newegg.com', 
      label: 'www.newegg.com',
      check: 'http',
      host: 'www.newegg.com', 
      port: '80',
      path: '/Computer-Systems/Store'
    }, 
   {
      name: 'www.simplygames.com', 
      label: 'www.simplygames.com',
      check: 'http',
      host: 'www.simplygames.com', 
      port: '80',
      path: '/xbox-one/games'
    }, 
   {
      name: 'www.walmart.com', 
      label: 'www.walmart.com',
      check: 'http',
      host: 'www.walmart.com', 
      port: '80',
      path: '/all-departments'
    }, 
   {
      name: 'www.zavvi.com', 
      label: 'www.zavvi.com',
      check: 'http',
      host: 'www.zavvi.com', 
      port: '80',
      path: '/home.dept'
    }, 
   {
      name: 'www.wexphotographic.com', 
      label: 'www.wexphotographic.com',
      check: 'http',
      host: 'www.wexphotographic.com', 
      port: '80',
      path: '/cameras/c2017'
    }, 
   {
      name: 'www.sainsburys.co.uk', 
      label: 'www.sainsburys.co.uk',
      check: 'http',
      host: 'www.sainsburys.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.microsoft.com', 
      label: 'www.microsoft.com',
      check: 'http',
      host: 'www.microsoft.com', 
      port: '80',
      path: '/en-gb/'
    }, 
   {
      name: 'www.game.co.uk', 
      label: 'www.game.co.uk',
      check: 'http',
      host: 'www.game.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.jessops.com', 
      label: 'www.jessops.com',
      check: 'http',
      host: 'www.jessops.com', 
      port: '80',
      path: '/cameras'
    }, 
   {
      name: 'www.pcworld.co.uk', 
      label: 'www.pcworld.co.uk',
      check: 'http',
      host: 'www.pcworld.co.uk', 
      port: '80',
      path: '/gbuk/computing/laptops-703-c.html'
    }, 
   {
      name: 'www.apple.com', 
      label: 'www.apple.com',
      check: 'http',
      host: 'www.apple.com', 
      port: '80',
      path: '/uk/ipad/'
    }, 
   {
      name: 'www.debenhams.com', 
      label: 'www.debenhams.com',
      check: 'http',
      host: 'www.debenhams.com', 
      port: '80',
      path: '/women'
    }, 
   {
      name: 'www.hotukdeals.com', 
      label: 'www.hotukdeals.com',
      check: 'http',
      host: 'www.hotukdeals.com', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'store.goldenjoystick.com', 
      label: 'store.goldenjoystick.com',
      check: 'http',
      host: 'store.goldenjoystick.com', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.smythstoys.com', 
      label: 'www.smythstoys.com',
      check: 'http',
      host: 'www.smythstoys.com', 
      port: '80',
      path: '/uk/en-gb/'
    }, 

 ],
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

