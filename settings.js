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
    },{
      name: 'www.mobiles.co.uk/contract-phones.html', 
      label: 'www.mobiles.co.uk/contract-phones.html',
      check: 'http',
      host: 'www.www.mobiles.co.uk/contract-phones.html', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.co.uk/gp/deals/', 
      label: 'www.amazon.co.uk/gp/deals/',
      check: 'http',
      host: 'www.www.amazon.co.uk/gp/deals/', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.com/gp/goldbox/', 
      label: 'www.amazon.com/gp/goldbox/',
      check: 'http',
      host: 'www.www.amazon.com/gp/goldbox/', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.ca/gp/goldbox', 
      label: 'www.amazon.ca/gp/goldbox',
      check: 'http',
      host: 'www.www.amazon.ca/gp/goldbox', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.de/gp/angebote', 
      label: 'www.amazon.de/gp/angebote',
      check: 'http',
      host: 'www.www.amazon.de/gp/angebote', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.mobiles.co.uk', 
      label: 'www.mobiles.co.uk',
      check: 'http',
      host: 'www.www.mobiles.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.co.uk', 
      label: 'www.amazon.co.uk',
      check: 'http',
      host: 'www.www.amazon.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.com', 
      label: 'www.amazon.com',
      check: 'http',
      host: 'www.www.amazon.com', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.ca', 
      label: 'www.amazon.ca',
      check: 'http',
      host: 'www.www.amazon.ca', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.amazon.de', 
      label: 'www.amazon.de',
      check: 'http',
      host: 'www.www.amazon.de', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.johnlewis.com/home-garden/bedroom/c6000074?rdr=1', 
      label: 'www.johnlewis.com/home-garden/bedroom/c6000074?rdr=1',
      check: 'http',
      host: 'www.www.johnlewis.com/home-garden/bedroom/c6000074?rdr=1', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.carphonewarehouse.com/mobiles', 
      label: 'www.carphonewarehouse.com/mobiles',
      check: 'http',
      host: 'www.www.carphonewarehouse.com/mobiles', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.mobilephonesdirect.co.uk/contract-deals', 
      label: 'www.mobilephonesdirect.co.uk/contract-deals',
      check: 'http',
      host: 'www.www.mobilephonesdirect.co.uk/contract-deals', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.buymobiles.net/apple', 
      label: 'www.buymobiles.net/apple',
      check: 'http',
      host: 'www.www.buymobiles.net/apple', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.tesco.com/direct/', 
      label: 'www.tesco.com/direct/',
      check: 'http',
      host: 'www.www.tesco.com/direct/', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.currys.co.uk/gbuk/tv-and-home-entertainment-31-u.html', 
      label: 'www.currys.co.uk/gbuk/tv-and-home-entertainment-31-u.html',
      check: 'http',
      host: 'www.www.currys.co.uk/gbuk/tv-and-home-entertainment-31-u.html', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.microsoftstore.com/store/msuk/en_GB/home', 
      label: 'www.microsoftstore.com/store/msuk/en_GB/home',
      check: 'http',
      host: 'www.www.microsoftstore.com/store/msuk/en_GB/home', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.argos.co.uk/static/Home.htm', 
      label: 'www.argos.co.uk/static/Home.htm',
      check: 'http',
      host: 'www.www.argos.co.uk/static/Home.htm', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.newegg.com/Computer-Systems/Store', 
      label: 'www.newegg.com/Computer-Systems/Store',
      check: 'http',
      host: 'www.www.newegg.com/Computer-Systems/Store', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.simplygames.com/xbox-one/games', 
      label: 'www.simplygames.com/xbox-one/games',
      check: 'http',
      host: 'www.www.simplygames.com/xbox-one/games', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.walmart.com/all-departments', 
      label: 'www.walmart.com/all-departments',
      check: 'http',
      host: 'www.www.walmart.com/all-departments', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.zavvi.com/home.dept', 
      label: 'www.zavvi.com/home.dept',
      check: 'http',
      host: 'www.www.zavvi.com/home.dept', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.wexphotographic.com/cameras/c2017', 
      label: 'www.wexphotographic.com/cameras/c2017',
      check: 'http',
      host: 'www.www.wexphotographic.com/cameras/c2017', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.sainsburys.co.uk', 
      label: 'www.sainsburys.co.uk',
      check: 'http',
      host: 'www.www.sainsburys.co.uk', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.game.co.uk/', 
      label: 'www.game.co.uk/',
      check: 'http',
      host: 'www.www.game.co.uk/', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.jessops.com/cameras', 
      label: 'www.jessops.com/cameras',
      check: 'http',
      host: 'www.www.jessops.com/cameras', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.pcworld.co.uk/gbuk/computing/laptops-703-c.html', 
      label: 'www.pcworld.co.uk/gbuk/computing/laptops-703-c.html',
      check: 'http',
      host: 'www.www.pcworld.co.uk/gbuk/computing/laptops-703-c.html', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.apple.com/uk/ipad/', 
      label: 'www.apple.com/uk/ipad/',
      check: 'http',
      host: 'www.www.apple.com/uk/ipad/', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.debenhams.com/women', 
      label: 'www.debenhams.com/women',
      check: 'http',
      host: 'www.www.debenhams.com/women', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.hotukdeals.com/', 
      label: 'www.hotukdeals.com/',
      check: 'http',
      host: 'www.www.hotukdeals.com/', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'store.goldenjoystick.com', 
      label: 'store.goldenjoystick.com',
      check: 'http',
      host: 'www.store.goldenjoystick.com', 
      port: '80',
      path: '/'
    }, 
   {
      name: 'www.smythstoys.com/uk/en-gb/', 
      label: 'www.smythstoys.com/uk/en-gb/',
      check: 'http',
      host: 'www.www.smythstoys.com/uk/en-gb/', 
      port: '80',
      path: '/'
    } ],
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

