/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the TestCloudFileHash class.
 * @constructor
 * @summary TestCloudFileHash
 *
 * Hash, type, path and byte range of a file that is required in test run
 *
 * @member {string} fileType Type of the file. Possible values include:
 * 'dsym-file', 'app-file', 'test-file'
 * 
 * @member {string} checksum SHA256 hash of the file
 * 
 * @member {string} relativePath Relative path of the file
 * 
 * @member {string} [byteRange] Range of bytes required to verify ownership of
 * the file
 * 
 */
function TestCloudFileHash() {
}

/**
 * Defines the metadata of TestCloudFileHash
 *
 * @returns {object} metadata of TestCloudFileHash
 *
 */
TestCloudFileHash.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TestCloudFileHash',
    type: {
      name: 'Composite',
      className: 'TestCloudFileHash',
      modelProperties: {
        fileType: {
          required: true,
          serializedName: 'file_type',
          type: {
            name: 'String'
          }
        },
        checksum: {
          required: true,
          serializedName: 'checksum',
          type: {
            name: 'String'
          }
        },
        relativePath: {
          required: true,
          serializedName: 'relative_path',
          type: {
            name: 'String'
          }
        },
        byteRange: {
          required: false,
          serializedName: 'byte_range',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = TestCloudFileHash;
