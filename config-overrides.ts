/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.dependencies["babel-loader"] = "babel-loader@8.2.2"

    return config;
  }