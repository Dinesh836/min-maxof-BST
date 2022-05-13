class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }
    insert(data){
       let newNode=new Node(data);
       if(this.root.data===null){
           this.root=data;
       }else {
           insertNewNose(this.root, newNode)
       }
    }
    insertNewNose(node, newNode ){
        if(newNode.data<node.data){
            if(node.left===null){
                 node.left=newNode;
            }else {
                this.insertNewNose(node.left , newNode);
            }
        }else {
            if(node.right===null){
                node.right=newNode;
           }else {
               this.insertNewNose(node.right , newNode);
           }
        }
    }
    inorder(node){
        if(node !== null)
        {
            var min=node.data;
            var max=node.data;  
            this.inorder(node.left);
            if(min>node.data) min=node.data;
            if(max<node.data) max=node.data;
            this.inorder(node.right);
        }
        console.log(min);
        console.log(max);
    }
   
}
