class Node<T> {
  data: T;
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }
  insert(data: T) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else this.insertNode(this.root, newNode);
  }
  private insertNode(parent: Node<T>, newNode: Node<T>): void {
    if (newNode.data < parent.data) {
      if (parent.left === null) {
        parent.left = newNode;
      } else this.insertNode(parent.left, newNode);
    } else {
      if (parent.right === null) {
        parent.right = newNode;
      } else this.insertNode(parent.right, newNode);
    }
  }

  private searchNode(parent: Node<T> | null, node: T): boolean {
    if (parent === null) return false;
    if (node < parent.data) {
      return this.searchNode(parent.left, node);
    } else if (node > parent.data) {
      return this.searchNode(parent.right, node);
    } else {
      return true;
    }
  }
  search(node: T): boolean {
    return this.searchNode(this.root, node);
  }
}

export default function binaryTree() {
  //   const bst = new BinaryTree();
  //   bst.insert(15);
  //   bst.insert(19);
  //   bst.insert(10);
  //   bst.insert(12);
  //   bst.insert(9);
  //   bst.insert(7);
  //   bst.insert(5);
  //   bst.insert(14);
  //   console.log(bst);
  //   console.log(bst.search(13));
}
