 var app = app || {};
 $ (function (){
 	
 	app.MyObject = Backbone.Model.extend({
 		defaults:{
 			name:"name",
 			description:"-",
 			size: 100
 		},
 		initialize: function(){
 			console.log('obj created');
 		
 			this.on('change',function(){	
 			console.log('obj change');
 			         var json = app.myObject.changedAttributes();
 	              console.log(json);
 	
 			});
 		},
 	
 			validate: function(attrs) {
 				if (attrs.size>1000) {
 					console.log('Incorrect size')
 					return 'Incorrect size';
					}
 			},
 		increaseSize: function(){
 		app.myObject.set({
 			size: this.get('size')+100
 		},{
 				validate:true
 				});
 			
 		},
 		
 	});
 	
 	app.myObject = new app.MyObject({
 		name:"Rocket",
 		description: "super"
 });
         app.myObject.set({
 			size: 250,
 				
 });
 $('#myButton').live('click',function(){
 		app.myObject.increaseSize();
 	});
 });