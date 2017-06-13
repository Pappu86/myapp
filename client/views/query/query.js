Template.queryView.helpers({
	getSimpleData:function(){
		return Stages.find().fetch();
	}
});