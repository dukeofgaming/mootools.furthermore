Attention.Alert = new Class({
	Extends	: Attention,
	options	: {

	},
	initialize	: function(options){
		this.setOptions(options);

		var native_alert = alert;
		this.addEvent('start',function(){
			alert = function(message){
				var attention_alert = new Attention.Alert();

			}
		});
		this.addEvent('stop',function(){
			alert = native_alert;
		});
	},
	show		: function(message){

	}
});

//lang