const proposalClassProperties = require('@babel/plugin-proposal-class-properties')
const syntaxClassProperties = require('@babel/plugin-syntax-class-properties')
const transformRuntime = require('@babel/plugin-transform-runtime')
const syntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import')
const functionBind = require('@babel/plugin-proposal-function-bind')
const exportDefault = require('@babel/plugin-proposal-export-default-from')
const presetEnv = require('@babel/preset-env')

module.exports = {
  presets: [
    [presetEnv, {
      targets: { 'node': 10 }
    }]
  ],
  plugins: [proposalClassProperties, syntaxClassProperties, transformRuntime, syntaxDynamicImport, functionBind, exportDefault]
}
