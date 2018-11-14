var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AlexaDataSchema = new Schema(
  {
  	version: {
  		type: 'String'
  	},
  	session: {
  		new: {
  			type: 'Boolean'
  		},
  		sessionId: {
  			type: 'String'
  		},
  		application: {
  			applicationId: {
  				type: 'String'
  			}
  		},
  		user: {
  			userId: {
  				type: 'String'
  			}
  		}
  	},
  	context: {
  		System: {
  			application: {
  				applicationId: {
  					type: 'String'
  				}
  			},
  			user: {
  				userId: {
  					type: 'String'
  				}
  			},
  			device: {
  				deviceId: {
  					type: 'String'
  				},
  				supportedInterfaces: {}
  			},
  			apiEndpoint: {
  				type: 'String'
  			},
  			apiAccessToken: {
  				type: 'String'
  			}
  		},
  		Viewport: {
  			experiences: {
  				type: [
  					'Mixed'
  				]
  			},
  			shape: {
  				type: 'String'
  			},
  			pixelWidth: {
  				type: 'Number'
  			},
  			pixelHeight: {
  				type: 'Number'
  			},
  			dpi: {
  				type: 'Number'
  			},
  			currentPixelWidth: {
  				type: 'Number'
  			},
  			currentPixelHeight: {
  				type: 'Number'
  			},
  			touch: {
  				type: [
  					'String'
  				]
  			}
  		}
  	},
  	request: {
  		type: {
  			type: 'String'
  		},
  		requestId: {
  			type: 'String'
  		},
  		timestamp: {
  			type: 'Date'
  		},
  		locale: {
  			type: 'String'
  		},
  		reason: {
  			type: 'String'
  		}
  	}
  }
);

AlexaDataSchema
.virtual('url')
.get(function(){
  return '/catalog/alexaData/'+ this._id;

});

module.exports = mongoose.model('AlexaData', AlexaDataSchema);
