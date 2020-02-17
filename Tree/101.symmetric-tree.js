const symmetricTree = (root) => {
    if (!root) {
        return true;
    }
    return recurse(root.left, root.right);

    function recurse(left, right) {
        if (left === undefined && right === undefined) {
            return true;
        } else if (left === undefined || right === undefined) {
            return false;
        } else if (left.value !== right.value) {
            return false;
        }
        const outer = recurse(left.left, right.right);
        const inner = recurse(left.right, right.left);

        return outer && inner;
    }
}