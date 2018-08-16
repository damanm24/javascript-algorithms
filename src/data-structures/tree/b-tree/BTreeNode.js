export default class BTreeNode {
    constructor(order = 4, parent = null) {
        this.values = new Array((order - 1));
        this.child = new Array(order);
        this.parent = parent;
        this.count = count;
        this.leaf = true;
    }

    get value(index) {
        return this.key[index];
    }

    get child(index) {
        return this.child[index];
    }
}