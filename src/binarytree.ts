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
  edge: number;
  constructor() {
    this.root = null;
    this.edge = 0;
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

  private inorder(node: Node<T> | null, edge: number, result: T[]): void {
    if (node !== null) {
      edge = edge + 1;
      if (edge > this.edge) this.edge = edge;
      // console.log("node: ", node);
      // console.log("result: ", result);
      //   console.log("=============================================");
      this.inorder(node.left, edge, result);
      result.push(node.data);
      this.inorder(node.right, edge, result);
    }
  }

  inorderTraversal() {
    const result: T[] = [];
    let edgeCount = 0;
    this.inorder(this.root, edgeCount, result);
    return result;
  }

  preorderTraversal() {}

  finMaxEdge() {
    return this.edge;
  }

  private minValue(node: Node<T>): T {
    console.log("min value: ", node);

    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }
  private deleteNode(node: Node<T> | null, value: T): Node<T> | null {
    console.log("node: ", node);

    if (!node) return null;

    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (!node.left) return node.right;
      else if (!node.right) return node.left;
    }
    node.data = this.minValue(node.right);
    node.right = this.deleteNode(node.right, node.data);
    return node;
  }

  delete(node: T): void {
    this.root = this.deleteNode(this.root, node);
  }
}

export default function binaryTree() {
  const bst = new BinaryTree();
  bst.insert(50);
  bst.insert(30);
  bst.insert(80);
  bst.insert(25);
  bst.insert(28);
  bst.insert(18);

  console.log(bst);
  // console.log(bst.search(13));
  // console.log(bst.inorderTraversal());
  // console.log(bst.finMaxEdge());
  // bst.delete(50);
  // console.log(bst);
}

binaryTree();
