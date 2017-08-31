const hasNoComposition = path =>
    !!path.findParent(({ node }) =>
        node.directives && node.directives.some(({ value }) => value.value === 'no composition'));

export default ({ types: t }) => ({
    visitor: {
        BinaryExpression(path) {
            if (!path.isBinaryExpression({ operator: '&' }) || hasNoComposition(path)) {
                return;
            }

            const lambda = t.arrowFunctionExpression(
                [t.restElement(t.identifier('args'))],
                t.callExpression(path.node.right, [
                    t.callExpression(path.node.left, [t.spreadElement(t.identifier('args'))])
                ])
            );

            path.replaceWith(lambda);
        }
    }
});
