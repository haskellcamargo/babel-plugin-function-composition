'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var hasNoComposition = function hasNoComposition(path) {
    return !!path.findParent(function (_ref) {
        var node = _ref.node;
        return node.directives && node.directives.some(function (_ref2) {
            var value = _ref2.value;
            return value.value === 'no composition';
        });
    });
};

exports.default = function (_ref3) {
    var t = _ref3.types;
    return {
        visitor: {
            BinaryExpression: function BinaryExpression(path) {
                if (!path.isBinaryExpression({ operator: '&' }) || hasNoComposition(path)) {
                    return;
                }

                var lambda = t.arrowFunctionExpression([t.restElement(t.identifier('args'))], t.callExpression(t.parenthesizedExpression(path.node.right), [t.callExpression(t.parenthesizedExpression(path.node.left), [t.spreadElement(t.identifier('args'))])]));

                path.replaceWith(lambda);
            }
        }
    };
};
