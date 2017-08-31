const hasNoComposition = path =>
    !!path.findParent(({ node }) =>
        node.directives && node.directives.some(({ value }) => value.value === 'no composition'));

export default ({ types: t }) => ({
    visitor: {
        BinaryExpression(path) {
            if (!path.isBinaryExpression({ operator: '&' }) || hasNoComposition(path)) {
                return;
            }

            const args = t.isSequenceExpression(path.node.left) ? path.node.left.expressions : [path.node.left];
            path.replaceWith(t.callExpression(path.node.right, args));
        }
    }
});
