class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    getLeftNode(){
        return this.left;
    }

    getRightNode(){
        return this.right;
    }

    setLeftNode(data){
        if(data instanceof Node){
            this.left = data;
        } else {
            this.left = new Node(data);
        }
    }

    setRightNode(data){
        if(data instanceof Node){
            this.right = data;
        } else {
            this.right = new Node(data);
        }
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    setRoot(data){
        if(this.root){
            return;
        }
        if(data instanceof Node){
            this.root = data;
            return;
        } else {
            this.root = new Node(data);
        }
        
    }

    getRoot(){
        return this.root;
    }

    getMin(){
        let node = this.root.getLeftNode();
        while(node.getLeftNode() != null){
            node = node.getLeftNode();
        }
        return node;
    }

    getMax(){
        let node = this.root.getRightNode();
        while(node.getRightNode() != null){
            node = node.getRightNode();
        }
        return node;
    }

    addNode(data, currentNode){
        if(currentNode === undefined){currentNode = this.root};
        if(data < currentNode.data){
            if(currentNode.getLeftNode() === null)return currentNode.setLeftNode(data);
            currentNode = currentNode.getLeftNode();
            this.addNode(data, currentNode);
        }
        if(data > currentNode.data){
            if(currentNode.getRightNode() === null)return currentNode.setRightNode(data);
            currentNode = currentNode.getRightNode();
            this.addNode(data, currentNode);
        }
    }

}

const tree = new BinaryTree();
tree.setRoot(10);
tree.addNode(16);
tree.addNode(26);
tree.addNode(2);
tree.addNode(12);
tree.addNode(6);
tree.addNode(9);
tree.addNode(11);
tree.addNode(29);

console.log('tree: ', tree.root);
console.log('max: ', tree.getMax());
console.log('min: ', tree.getMin());
