import BTreeNode from './BTreeNode';
import Comparator from '../../../utils/comparator/Comparator';

const privateMethods = {
    search(currentNode, key) {
        let i = 0;
        while(i < currentNode.count && this.valueComparator.greaterThan(key, root.values[i])) {
            i++
        }
        if(i <= currentNode.count && this.valueComparator.equal(key, root.values[i])) {
            return root;
        }
        if(currentNode.leaf) {
            return null;
        } else {
            return this.search(root.child(i), key)
        }
    }
}

export default class BTree {
    constructor(order = 4, compareFunction = undefined) {
        this.order = order;
        this.root = new BTreeNode(order)
        this.height = 1;
        this.size = 0;
        this.valueComparator = new Comparator(compareFunction);
    }

    get size() {
        return this.size;
    }

    get height() {
        return this.height;
    }

    get value(value) {
        if(value != null) {
            return privateMethods.search(this.root, key);
        }
        return null;
    }

    isEmpty() {
        return this.size === 0;
    }

    put(values)

}