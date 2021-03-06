'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySchema = new _mongoose2.default.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  thumb: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }

});

exports.default = _mongoose2.default.model('Category', CategorySchema);
//# sourceMappingURL=category.model.js.map
