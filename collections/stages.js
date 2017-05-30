//Tasks=new Meteor.collection('tasks');
const Stages = new Mongo.Collection('stages');
Stages.insert(
	{ title: 'New', type: 'new' }
	{ title: 'Inprogress', type: 'inprogress' }
	{ title: 'Close', type: 'close' }
	);