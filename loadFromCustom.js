var url = require('url');
var testDataRoot = 'backend-mock-data/custom';
var path = require('path');

module.exports = (req, res, next) => {
    var json = respondWithJsonFromFile(req);
    if(json != null){
        return res.status(200).send(json);
    }
    next();
};


var loadJsonFromFile = function(filename) {
    var fullPath = path.join(__dirname, testDataRoot, filename);
    console.log('Load from file: ' + fullPath);
    delete require.cache[require.resolve(fullPath)];
    return require(fullPath);
};

function respondWithJsonFromFile(request){
    var parsedUrl = url.parse(request.url, true);
    var tempUrl = parsedUrl.pathname.replace('api/' ,'');
    tempUrl = tempUrl.indexOf('/') === 0? tempUrl.substring(1) : tempUrl;
    var urlFragmente = tempUrl.split('/');
    var dateinameAusUrlFragmenten = urlFragmente.join('.')+".";
    var dataJson = null;
    try {
            var filename = dateinameAusUrlFragmenten
                + request.method + '.json';
            dataJson = loadJsonFromFile(filename);
    } catch (e) {
    }
    return dataJson;
}