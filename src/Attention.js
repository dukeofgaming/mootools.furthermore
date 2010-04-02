var Attention = new Class({
	Implements	: [Options, Events],
	options		: {
		element		: null,
		destroy		: true
	},
	initialize	: function(options){
		this.setOptions(options);
	},
	init		: function(){
		this.fireEvent('init');
	},
	restore		: function(){
		this.fireEvent('restore');
	},
	show		: function(){
		this.fireEvent('show');
	},
	hide		: function(){
		this.fireEvent('hide');
	}
});
