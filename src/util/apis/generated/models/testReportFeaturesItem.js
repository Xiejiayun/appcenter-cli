/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TestReportFeaturesItem class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {array} [tests]
 * 
 * @member {number} [failed]
 * 
 * @member {number} [skipped]
 * 
 */
function TestReportFeaturesItem() {
}

/**
 * Defines the metadata of TestReportFeaturesItem
 *
 * @returns {object} metadata of TestReportFeaturesItem
 *
 */
TestReportFeaturesItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TestReport_featuresItem',
    type: {
      name: 'Composite',
      className: 'TestReportFeaturesItem',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        tests: {
          required: false,
          serializedName: 'tests',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TestReportFeaturesItemTestsItemElementType',
                type: {
                  name: 'Composite',
                  className: 'TestReportFeaturesItemTestsItem'
                }
            }
          }
        },
        failed: {
          required: false,
          serializedName: 'failed',
          type: {
            name: 'Number'
          }
        },
        skipped: {
          required: false,
          serializedName: 'skipped',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = TestReportFeaturesItem;
