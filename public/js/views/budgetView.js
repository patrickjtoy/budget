// Filename: views/budgetView.js

define([
	'jquery',
	'underscore',
	'backbone',
	'collections/budgetCollection',
	'text!templates/budget.html'
], function($, _, Backbone, BudgetCollection, budgetTemplate){

	var BudgetView = Backbone.View.extend({

		el: $('#container'),

		render: function() {

			this.collection = new BudgetCollection();
			this.collection.add({ startingBalance: 2000 });

			// Using underscore we can compile our template with data
			var data = {};
			var compiledTemplate = _.template( budgetTemplate, { budget: this.collections.models } );

			// Append out compiled template to this Views "el"
			this.$el.html( "compiledTemplate" );

		}

	});

	// Our module now returns our view
	return BudgetView;

});