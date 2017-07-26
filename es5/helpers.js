"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @export Action Creator helper factory function
 * @class ActionCreator
 * @template T - Generic Type
 * @template P - Generic Type
 */
var ActionCreator = (function () {
    function ActionCreator(type) {
        var _this = this;
        this.create = function (payload) { return ({ type: _this.type, payload: payload }); };
        this.type = type;
    }
    return ActionCreator;
}());
exports.ActionCreator = ActionCreator;
/**
 * @export createEmptyAction - empty action creator function
 * @template T - Generic Type
 * @param type: T
 * @returns () => EmptyAction<T>
 */
function createEmptyAction(type) {
    return function () { return ({ type: type }); };
}
exports.createEmptyAction = createEmptyAction;
;
/**
 * @export createPayloadAction - FSA action creator function
 * @template T - Generic Type
 * @template P - Generic Type
 * @param type: T
 * @returns (payload: P) => PayloadAction<T, P>
 */
function createPayloadAction(type) {
    return function (payload) { return ({ type: type, payload: payload }); };
}
exports.createPayloadAction = createPayloadAction;
//# sourceMappingURL=helpers.js.map