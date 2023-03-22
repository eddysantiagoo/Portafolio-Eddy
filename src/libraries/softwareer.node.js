const clquConfig = require('../../eddy.config');
const { Softwareer } = require('@softwareer/node');
const softwareer = new Softwareer(clquConfig.softwareerKey);

module.exports = softwareer;