"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createActionCreator(type, payloadSelector) {
    if (payloadSelector == null) {
        var actionCreator = function () { return ({ type: type }); };
        actionCreator.type = type;
        return actionCreator;
    }
    else {
        var actionCreator = function (state, meta) { return ({ type: type, payload: payloadSelector(state, meta) }); };
        actionCreator.type = type;
        return actionCreator;
    }
}
exports.createActionCreator = createActionCreator;
//# sourceMappingURL=create-action-creator.js.map