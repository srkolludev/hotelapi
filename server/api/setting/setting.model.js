'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingSchema = new _mongoose2.default.Schema({
  globalVAT: {
    type: Number
  },
  totalTables: {
    type: Number
  },
  loyalityPercentage: {
    type: Number,
    default: 0
  },
  minLoyalityPoints: {
    type: Number,
    default: 0
  },
  loyalityProgram: {
    type: Boolean,
    default: true
  },
  //min order value on which loyality calculated
  minOrdLoyality: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

exports.default = _mongoose2.default.model('Setting', SettingSchema);
//# sourceMappingURL=setting.model.js.map
