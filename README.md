# easy-beautify

Beautifier for javascript, html and css in gulp tasks.

## Installation

  npm install easy-beautify --save

## Usage

<!-- language: lang-javascript -->

```javascript

    var beautify = require('../easy-beautify.js');
	var opts = {
	    "indent_size": 4,
	    "indent_char": " ",
	    "eol": "\n",
	    "indent_level": 0,
	    "indent_with_tabs": false,
	    "preserve_newlines": false,
	    "beautifier": "html"
	};

    gulp.task('beautify-html', function() {
	    return gulp.src('./html/user_form.html')
	        .pipe(beautify(opts))
	        .pipe(gulp.dest('./dist'));
	});

	opts.beautifier = "js";
	opts.preserve_newlines = true;

    gulp.task('beautify-html', function() {
	    return gulp.src('./js/userBO.js')
	        .pipe(beautify(opts))
	        .pipe(gulp.dest('./dist'));
	});

```

## Release History

* 0.1.0 October/2015 - Initial release

## License

(MIT License)
