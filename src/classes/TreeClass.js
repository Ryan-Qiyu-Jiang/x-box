export class NodeClass {
  constructor(value) {
  	this.value=value;
  	this.parent=null;
  	this.children=[];
  }
}


export class TreeClass {
  constructor(value) {
	var node = new NodeClass(value);
	this._root = node;
  }
/*
  get df(callback){
  	return this.transverseDF(callback);
  }
  */
  

     traverseDF(callback) {
 
    (function recurse(currentNode) {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    })(this._root);
 
	}

	findDF(callback,equals){

		const node = this.traverseDF((node)=>{
			if(equals(node.value)){
				callback(node);
			}
		});

	}

	add(value, parentValue){
		//console.log(parentValue);
		let parent = null;
		let child = new NodeClass(value);

		 this.findDF(
			(node)=>{parent=node;},
			(nodeValue)=>
			{
				//console.log(nodeValue+" "+parentValue);
				return (value==nodeValue);
			});
		 if(parent==null){
			 this.findDF(
				(node)=>{parent=node;},
				(nodeValue)=>
				{
					//console.log(nodeValue+" "+parentValue);
					return (parentValue==nodeValue);
				});
			 if(parent==null){
			 	console.log("Parent not found");
			 }else{
			 	parent.children.push(child);
			 	child.parent=parent;
			 }
		 }
	}

}



