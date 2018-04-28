#!/usr/bin/env node
require('shelljs/global');
const yaml            = require('js-yaml');
const specFolder      = './spec/';
const webFolder       = './web/'
const fs              = require('fs');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

// Remove old content
rm('-rf', 'web')

console.log('Creating /web driectory');
mkdir('-p', 'web')

cp('-r', pathToSwaggerUi + '/*', 'web');

// Read all spec files and output them as json
console.log('Converting spec to JSON');
fs.readdirSync(specFolder).forEach(file => {
  if (/\.yaml$/.test(file)) {
    // Only convert yaml files
    console.log('Converting ' + file);
    obj = yaml.load(fs.readFileSync(specFolder + file, {encoding: 'utf-8'}));
    jsonFile = webFolder + file.slice(0, -5) + '.json'
    fs.writeFileSync(jsonFile, JSON.stringify(obj, null, 2));
  } else {
    // Copy all other files
    cp('',specFolder + file, webFolder + file)
  }
})

sed('-i', 'http://petstore.swagger.io/v2/swagger.json', 'swagger.json', 'web/index.html')
