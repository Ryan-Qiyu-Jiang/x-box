import React from "react";
import jsonp from "jsonp";

import {BoxClass} from "../classes/BoxClass";
import {LineClass} from "../classes/LineClass";
import {NodeClass, TreeClass} from "../classes/TreeClass";
import {MessageClass} from "../classes/MessageClass";
//import {TreeClass} from "../classes/TreeClass";

import Footer from "../components/Footer";
import Box from "../components/Box";
import Playground from "../components/Playground";
import InputLine from "../components/InputLine";
import Messenger from "../components/Messenger";

export default class Home extends React.Component{

	constructor(){
		super();
		this.goalTree= new TreeClass("cus u told me to");
		this.lastGoal = "cus u told me to";
		this.messages = [];
		this.state={
			A:"",
			B:"",
			command:"Move R on top of A",
			answer:"",
			width: 0,
			height: 0,
			boxList:[new BoxClass(0, 0, 100, 100, true, 'R'),new BoxClass(100, 0, 100, 200, true ,'Y'),new BoxClass(200, 0, 200, 200, false ,'A'), new BoxClass(200, 200, 100, 50, true,'N'),
			 new BoxClass(400, 0, 200, 100, true, 'q'), new BoxClass(600, 0, 200, 200, false, 'i'), new BoxClass(700, 200, 100, 100, true,'y'), new BoxClass(800, 0, 100, 100, true,'u'),
			 new BoxClass(0,0,700,0,false,'table')]
			
			};

	this.initializeBoxes = this.initializeBoxes.bind(this);
	this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	this.changeCommand = this.changeCommand.bind(this);
	this.changeBox = this.changeBox.bind(this);
	this.getBox = this.getBox.bind(this);
	this.proccess = this.proccess.bind(this);
	this.move = this.move.bind(this);
	this.clearTop = this.clearTop.bind(this);
	this.above = this.above.bind(this);
	this.findSpace = this.findSpace.bind(this);
	this.phyMove = this.phyMove.bind(this);
	this.showBoxes = this.showBoxes.bind(this);
	this.retop = this.retop.bind(this);
	this.yOrder = this.yOrder.bind(this);
	this.addGoal = this.addGoal.bind(this);
	this.findWhy = this.findWhy.bind(this);
	this.commandProccess = this.commandProccess.bind(this);
	this.findHow = this.findHow.bind(this);
	}

	yOrder(a_ID, b_ID){
		const a=this.getBox(a_ID);
		const b=this.getBox(b_ID);
		//console.log("( "+a.id+" , "+a.ycord+" ) ( "+b.id+" , "+b.ycord+" )");
		return (a.ycord-b.ycord);
	}

		showBoxes(){
			//console.log(this.state.boxList);
			//this.goalTree.traverseDF((node)=>{console.log(node)});
			console.log(this.goalTree);
		}

	proccess(){
		//this.messages=[""];
		this.messages.push(new MessageClass(this.state.command, "user", 0));
		const command=this.state.command.replace(/[^a-zA-Z ]/g, "");
		const part = command.split(" ");
		const first_word=part[0].toLowerCase();

		if(first_word=='move'){
		const responses = ['ok.','fine.','sure thing boss!','whatever...','lol sure','kk', ' so bossy -_-'];
		let index =Math.floor(Math.random()*(responses.length));
		const reponse = responses[index];
		this.messages.push(new MessageClass(reponse, "me", 0));
		this.goalTree= new TreeClass("cus u told me to");
		this.lastGoal = "cus u told me to";
			const simple = part.filter((word)=>
				{ 
					return (word=='why'||word=='move'||word=='clear'||(word.length==1&&
						(word=='R'||word=='Y'||word=='A'||word=='N'||word=='q'||word=='i'||word=='y'||word=='u')));
				});
			console.log(simple);
			const A_ID = simple.find((word)=>{return word.length==1;});
			simple.splice(simple.indexOf(A_ID),1);
			const B_ID = simple.find((word)=>{return word.length==1;});

				this.setState({...this.state, A:A_ID, B:B_ID });
				this.move(A_ID,B_ID, ()=>{console.log("end")});

		}else if(first_word=='why'){
			console.log("WHY proccess");
				this.commandProccess(part, this.findWhy);

				//this.commandProccess(part, this.findWhy);
		}else if(first_word=='how'){
			console.log("HOW proccess");
			this.commandProccess(part, this.findHow);
		}

	}

	commandProccess(part, callback){
					console.log("command proccess");

			const simple = part.filter((word)=>
				{ 
					return (word=='why'||word=='move'||word=='clear'||(word.length==1&&
						(word=='R'||word=='Y'||word=='A'||word=='N'||word=='q'||word=='i'||word=='y'||word=='u')));
				});
			console.log(simple);
			const A = simple.find((word)=>{return word.length==1;});
			simple.splice(simple.indexOf(A),1);
			const B = simple.find((word)=>{return word.length==1;});
			let question = simple.find((word)=>{return word=='move'||word=='clear';});
			if(question=="move"){
				if(A==null||B==null){
					console.log("can't find A or B: "+A+" "+B);
					question = null;
				}else{
				question = "move "  + A+ " to "+B; 
				console.log(question);
			}
			}else if(question=="clear"){
				if(A==null){
					console.log("can't find A : "+A);
					question = null;
				}
				question = "clear the top of "+A;
				console.log(question);
			}else{
				question = null;
			}
			callback(question);
	}

	findHow(question){
		if(question==null){
			this.setState({...this.state, answer:"sorry wat?"});
			this.messages.push(new MessageClass("sorry wat?", "me", 2*Math.random()));
		}else{
			let children = [];
			let task = null;
			this.goalTree.findDF((node)=>
				{	task =node;
					children = node.children;
				},(nodeValue)=>{return nodeValue==question});
			if(task==null){
				this.setState({...this.state, answer:"hmmm did I do that?"});
				this.messages.push(new MessageClass("hmmm did I do that?", "me", 2*Math.random()));
			}
			else if(children.length==0){
				this.setState({...this.state, answer:"just kinda did it xD"});
				this.messages.push(new MessageClass("just kinda did it xD", "me", 2*Math.random()));
			}else {
				const how = children.map((node)=>{return node.value.replace("move","moved").replace("clear", "cleared").replace("grab", "grabbed");}).join(', ');
				const endings = [' and kinda just did it...',' ...',' and like yeah',' and stuff',' and used my magic powers :p',' with confidence ;)', ' and did it'];
				let index =Math.floor(Math.random()*(endings.length));
				const end = endings[index];
				this.setState({...this.state, answer:"I "+how+ end});
				this.messages.push(new MessageClass("I "+how+ end, "me", 2*Math.random()));
			}
		}
	}

	findWhy(question){
		if(question==null){
			this.setState({...this.state, answer:"sorry wat?"});
			this.messages.push(new MessageClass("sorry wat?", "me", 2*Math.random()));
		}else{
			let parent = null;
			this.goalTree.findDF((node)=>
				{
					parent = node.parent;
				},(nodeValue)=>{return nodeValue==question});
			if(parent==null){
				this.setState({...this.state, answer:"hmmm did I do that?"});
			    this.messages.push(new MessageClass("hmmm did I do that?", "me", 2*Math.random()));
			}
			else if(parent.value=="cus u told me to"){
				this.setState({...this.state, answer:"cus u told me to."});
			    this.messages.push(new MessageClass("cus u told me to.", "me", 2*Math.random()));
			}else {
				this.setState({...this.state, answer:"to "+parent.value});
			    this.messages.push(new MessageClass("to "+parent.value, "me", 2*Math.random()));
			}
		}
	}

	addGoal(goal){
		this.goalTree.add(goal, this.lastGoal);
		this.lastGoal = goal;
	}

	move(A_ID, B_ID, resolve_callback){
		console.log("moving "+A_ID+" to "+B_ID);
		const A = this.getBox(A_ID);
		const B = this.getBox(B_ID);

		this.addGoal('move '+A_ID+' to '+B_ID);
		//this.updateLastGoal(newGoal);
		//console.log(this.goalTree);
		var self = this;
		//can't use top here if boxes have different sizes

		if(this.above(A, A.width).size!==0){
			//this.addGoal("grab "+A_ID);
			this.addGoal("clear the top of "+A_ID);
		    self.clearTop(A_ID, B_ID, A_ID, B_ID, A.width);
		}else if(this.above(B, A.width).size!==0){
			this.addGoal("clear the top of "+B_ID);
			self.clearTop(B_ID, A_ID, A_ID, B_ID, A.width);
		}else{
			return new Promise(function(resolve, reject) {
				self.phyMove(A_ID,B_ID,()=>{
					self.retop(()=>{resolve("3");});
					});
		    }).then(function(success) {
		    	console.log("moved "+A_ID+" to "+B_ID);
				resolve_callback();
			});
		}
		//this.clearTop(A, B, A.width);
		//this.clearTop(B, A, A.width);
		//this.phyMove(A,B);
	}

	retop(callback){
		const list=this.state.boxList;
		const newList = list.map((item)=>{
			if(item.top){
				return item;
			}else{
				return new BoxClass(item.xcord,item.ycord,item.width,item.height,(this.above(item,item.width).size==0),item.id);
			}
		});
		this.setState({...this.state,boxList:newList});
		callback();
		//console.log(newList);
	}

	phyMove(A_Id,B_Id,callback){
			const A=this.getBox(A_Id);
			const B=this.getBox(B_Id);
		console.log("physically moving "+ A_Id + " to "+B_Id);
		var self=this;
		new Promise ((resolve,reject)=>{
		
		setTimeout(function() {
				self.changeBox(A.id, B.id, 
					new BoxClass(A.xcord, 0, A.width, A.height,true, A.id),
					new BoxClass(B.xcord, B.ycord, B.width, B.height, false, B.id),()=>{});
     	}, 1000);
		setTimeout(function() {
     	self.changeBox(A.id, B.id, 
					new BoxClass(B.xcord, 0, A.width, A.height,true, A.id),
					new BoxClass(B.xcord, B.ycord, B.width, B.height, false, B.id),()=>{});
     	}, 1700);
     	
     	setTimeout(function() {
     	self.changeBox(A.id, B.id, 
					new BoxClass(B.xcord, B.ycord-A.height, A.width, A.height,true, A.id),
					new BoxClass(B.xcord, B.ycord, B.width, B.height, false, B.id),()=>{resolve();});
     	}, 2400);
     	}).then((success)=>{callback();});

	}

	clearTop(boxId, otherId, A_ID, B_ID, minWidth){
		const box=this.getBox(boxId);
		const other = this.getBox(otherId);
		console.log("clearing "+box.id);
		const badBoxes = this.above(box, minWidth);
		//console.log(space);
		//console.log(badBoxes);
		var self=this;
			(async function loop(callback) {
				for (let item of badBoxes) {
					self.addGoal("clear the top of "+boxId);
					const badBoxes1 = self.above(box, minWidth);
					const badBoxes2 = self.above(other, minWidth);
					const space = self.findSpace(box, other, badBoxes1, badBoxes2)[0];
					console.log("loop "+space.id);
					await new Promise(resolve => {self.move(self.getBox(item).id,space.id, ()=>{resolve();});});
				}
				return callback();
			})(()=>{console.log("cleared "+boxId);this.move(this.state.A, this.state.B, ()=>{});});
	}

	findSpace(A,B, bads, bads2){
		const spaces = this.state.boxList.filter((item)=>
		{
			//console.log(item.id+" "+item.top+" "+(item.id !== A.id)+" "+(item.id !== B.id)+" "+(!bads.has(item.id)) +" "+(!bads2.has(item.id)));
			return (this.above(item, item.width).size==0 && item.id !== A.id && item.id !== B.id && !bads.has(item.id) && !bads2.has(item.id));// && !bads.has(item.id));
		});

		//console.log(spaces);
		//console.log(bads);
		//console.log("find space for "+A.id+" , "+B.id+" : ");
		return spaces;
	}

	above(box, minWidth){
		Set.prototype.union = function(setB) {
			    var union = new Set(this);
			    for (var elem of setB) {
			        union.add(elem);
			    }
			    return union;
			}
		const lineList = this.state.boxList.map((item)=>
			{
				const lineU = new LineClass(item.xcord, item.xcord+item.width, item.ycord, item.id);
				//const lineD = new LineClass(item.xcord, item.xcord+item.width, item.ycord+item.height, item.id);
				return lineU;
			});

		let badBoxes = new Set();
		let w = Math.max(minWidth,box.width);
		for(let f=0; f<w; f+=w/4){
		const intersections = lineList.filter((item)=>
			{
				const x=box.xcord+f;
				const l=item.xL;
				const r=item.xR;
				return (item.y< box.ycord && l<x && x<r && item.id !== box.id);
			}).map((item)=>
			{
				return item.id;
			});

			badBoxes=badBoxes.union(new Set(intersections));
		}

		const temp =(new Set([...(badBoxes)].sort(this.yOrder)));
		//console.log(badBoxes);
		//console.log(temp);

		return temp;
	}

	changeBox(AId,BId, nB1, nB2,callback){
		
		//console.log("changeBox Start");
		//console.log(boxId);
		
		const boxListt = this.state.boxList;
		const newList = boxListt.map((item)=>
			{
				if(item.id==AId){
					return nB1;
				}else if(item.id==BId){
						return nB2;
				}
				else{
					return item;
				}			
			});
		//console.log(newList);
		//console.log("changeBox End");
		this.setState({...this.state, boxList:newList});
			callback();
	}

	getBox(boxId){
		return this.state.boxList.filter((item)=>{
			return (item.id==boxId);
		})[0];
	}

	changeCommand(newCommand){
		this.setState({...this.state, command:newCommand});
	}

	initializeBoxes(){
		const numBoxes = this.state.boxList.length;
		const boxes = this.state.boxList;
		const newBoxList = boxes.map(item => {
			const nbox = new BoxClass (item.xcord, this.state.height - item.ycord - item.height, item.width, item.height,item.top, item.id);
		 	 return nbox;
		});
		this.setState({...this.state,boxList:newBoxList});
	}

	componentDidMount(){
		let first = new Promise ((resolve, reject)=>{
			this.updateWindowDimensions(()=>{resolve("success");});
		//	window.addEventListener('resize',this.updateWindowDimensions);
		}).then((success)=>{
			this.initializeBoxes();
			const hi = "Hey! I'm casey the god of the boxes and your new 'friend'.";
			const manual = "If you ask me to 'move' a box on top of another box, I'll try my best. Feel free to ask how or why I do stuff, but try to be specific :p";
		const self = this;
		setTimeout(function() {
			self.messages.push(new MessageClass(hi , "me", 0));
		self.setState({...this.state, answer:hi});
     	}, 1000);
		setTimeout(function() {
			self.messages.push(new MessageClass(manual , "me", 0));
		self.setState({...this.state, answer:manual});
     	}, 2500);
		});
/*
var tree = new TreeClass('one');
 
tree._root.children.push(new NodeClass('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new NodeClass('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new NodeClass('four'));
tree._root.children[2].parent = tree;

tree.traverseDF(function(node) {
    console.log(node.value);
});



	 tree.findDF(
	(node)=>{console.log(node);},
	(nodeValue)=>{return (nodeValue=='three');});
tree.add('asdf','four')
console.log(tree);
*/
 	}



	componentWillUnmount(){
		//window.removeEventListener('resize',this.updateWindowDimensions);
	}

	updateWindowDimensions(callback){
		//this.setState({width:(window.innerWidth*8/12-60), height: (window.innerHeight-45)});
		this.setState({width:977, height: (window.innerHeight-45)});
		callback();
	}	

	render(){
		return(
			<div>
				<div class="row">
					<div class="col-8">
						<Playground width={this.state.width} 
						height={this.state.height} 
						boxList={this.state.boxList}/>
					</div>
					<div class="chat-wrapper col-4">
						<div class="chatInput">
							<Messenger id="messages" messages={this.messages}/>
							<InputLine changeCommand={this.changeCommand.bind(this)} 
							command={this.state.command} 
							proccess={this.proccess.bind(this)} 
							look={this.showBoxes.bind(this)} />
						</div>
					</div>
				</div>
			</div>
			);
	}

}