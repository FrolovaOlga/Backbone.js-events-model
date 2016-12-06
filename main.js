$(function (){
	var object = {};
	
	
	_.extend(object, Backbone.Events);
	
	object.on("alert", function(msg) {  
		     alert("Triggered" + msg); 
	});
	
	
	object.on("alert", function(msg) {
		 console.log("Triggered" + msg); 
	});
	
	
	object.trigger("alert","an event");
	
	$('#btn').live('click',function(){
		object.trigger("alert","clicked");
	});
});