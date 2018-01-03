/*
* Customisation of watch.config.js, located in node_modules/@ionic/app-scripts/config
* It adds libs directory to watch config for live reload
*
* */

const watchConfig = require('../node_modules/@ionic/app-scripts/config/watch.config');
watchConfig.srcFiles.paths = [
    '{{SRC}}/**/*.(ts|html|s(c|a)ss)',
    '../../libs/**/*.(ts|html|s(c|a)ss)'
];
