"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var MKAxios = /** @class */ (function () {
    function MKAxios() {
        this.usesbp = false;
        this._inst = axios_1.default;
    }
    Object.defineProperty(MKAxios.prototype, "inst", {
        get: function () {
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    MKAxios.prototype.Initialize = function (mkcfg) {
        if (mkcfg != null) {
            this.usesbp = mkcfg.usesbp;
            this._inst = axios_1.default.create(mkcfg.config);
        }
        if (MKAxios.InstStatic == null) {
            MKAxios.InstStatic = this;
        }
    };
    return MKAxios;
}());
exports.MKAxios = MKAxios;
var AxiosInstStatic = function () {
    return MKAxios.InstStatic.inst;
};
exports.default = AxiosInstStatic;
