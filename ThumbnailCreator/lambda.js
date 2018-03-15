let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Go SLAppForge Sigma! Your function executed successfully!',
			input: event,
		}),
	};

	callback(null,response);
}