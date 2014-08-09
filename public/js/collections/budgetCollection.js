// Filename: collections/budgetCollection.js

define([
	'underscore',
	'backbone',
	'models/budgetModel'
], function(_, Backbone, BudgetModel){

	var BudgetCollection = Backbone.Collection.extend({

		model: BudgetModel

	});

	return BudgetCollection;

});