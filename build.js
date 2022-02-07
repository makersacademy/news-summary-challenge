#!/usr/bin/env node

const envFilePlugin = require('esbuild-envfile-plugin');

require('esbuild').build({
    logLevel: "info",
    entryPoints: ["index.js"],
    bundle: true,
    outfile: "bundle.js",  
    plugins: [envFilePlugin],
  }).catch(() => process.exit(1))
