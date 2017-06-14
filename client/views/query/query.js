Template.queryView.helpers({
	getSimpleData:function(){
		return Fruits.find().fetch();
	},
	getAgrigateData:function(){
		var data= Fruits.aggregate({$match:{type:'fruits'}},{$group:{_id: null, total:{$sum:"$value"}}});

		console.log("data",data);
	}
});