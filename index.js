var es = require('event-stream');
var through = require('through2');
var beautify = require('js-beautify');
var clone = require('clone');


module.exports = function(opts) {

	var beautifier = (opts || {})['beautifier'];

	beautifier = (beautifier) ? beautifier : 'js';

	var beautify = require('js-beautify')[beautifier];

    return through.obj(function(file, enc, cb) {

        if (file.isNull())
            return cb(null, file); // pass along

        if (file.isStream()) {
            var options = opts ? clone(opts) : {};
            console.log("1.DEBUG ");

            return es.map(function(file, cb) {
            	var str = String(file.contents.toString('utf-8'));

                file.contents = new Buffer(beautify(str, options));
                cb(null, file);
            });
        }

        console.log("2.DEBUG ");
        var str = file.contents.toString('utf-8');

        file.contents = new Buffer(beautify(str, opts));
        cb(null, file);
    });

};
