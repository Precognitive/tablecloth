'use strict';
/* @flow */

const BigTable = require('@google-cloud/bigtable');

const Schema = require('./Schema');
const Model = require('./Model');

// @todo add back when constructor needed
// type TableClothOptions = {
//   projectId: string;
//   instance: string;
//   appProfile: ?string;
//   keyFilename: ?string;
// }

class TableCloth {
  projectId: string;

  instance: string;

  appProfile: string;

  keyFileName: string;

  bigtable: BigTable;

  static model: (tableName: string, schema: Schema) => Model;
}

TableCloth.model = function (tableName: string, schema: Schema): Model {
  return new Model(tableName, schema);
};

module.exports = TableCloth;
