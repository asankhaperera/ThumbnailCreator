let AWS = require('aws-sdk');

// Enable ImageMagick integration.
let gm = require('gm').subClass({ imageMagick: true });

// Constants
const MAX_WIDTH = 100;
const MAX_HEIGHT = 100;

exports.handler = function(event, context, callback) {

	const response = {
		"isBase64Encoded": 0,
		"statusCode": 200,
		"headers": {
    		//"Content-Type: ": "image/png"
  		},
		"body": JSON.stringify({
			message: "Invoked",
			input: event
		})
	};


	/*gm(response.Body).size(function (err, size) {
		// Infer the scaling factor to avoid stretching the image unnaturally.
		let scalingFactor = Math.min(
			MAX_WIDTH / size.width,
			MAX_HEIGHT / size.height
		);
		let width = scalingFactor * size.width;
		let height = scalingFactor * size.height;

		// Transform the image buffer in memory.
		this.resize(width, height)
			.toBuffer(imageType, function (err, buffer) {
				if (err) {
					next(err);
				} else {
					next(null, response.ContentType, buffer);
				}
			});
	});*/

	callback(null,response);
}