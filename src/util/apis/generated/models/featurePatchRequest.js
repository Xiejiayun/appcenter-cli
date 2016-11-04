/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the FeaturePatchRequest class.
 * @constructor
 * @member {string} [displayName] The full (friendly) name of the feature.
 * 
 * @member {number} [state] The state of the feature
 * 
 * @member {string} [description] The friendly name of the feature
 * 
 */
function FeaturePatchRequest() {
}

/**
 * Defines the metadata of FeaturePatchRequest
 *
 * @returns {object} metadata of FeaturePatchRequest
 *
 */
FeaturePatchRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeaturePatchRequest',
    type: {
      name: 'Composite',
      className: 'FeaturePatchRequest',
      modelProperties: {
        displayName: {
          required: false,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'Number'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FeaturePatchRequest;
