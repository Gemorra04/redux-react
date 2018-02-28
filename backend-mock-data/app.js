// server.js
'use strict'
const jsonServer = require('json-server');
const _jsonExtender = require('json-server-extension');

//options:
//fullPath:fullpath for the combined object
//generatedPath:the path where the generated files will be found
//staticPath:the path where the static files will be found
const jsonExtender = new _jsonExtender({filePath:'./backend-mock-data/db_extends.json',
                                        generatedPath:'./backend-mock-data/generated',
                                        staticPath:'./backend-mock-data/static'})

//register accacpt array of generators or path to the generator scripts
//const funcs =  Object.keys(generators).map(key => generators[key])
jsonExtender.register('../../../backend-mock-data/generators');
jsonExtender.generate().then((data)=>{


}).catch((e) => {console.log(e)});
