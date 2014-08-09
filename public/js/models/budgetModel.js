// Filename: models/budgetModel.js

define([
	'underscore',
	'backbone'
], function(_, Backbone){

	var BudgetModel = Backbone.Model.extend({

		defaults: {
			startingBalance: 2500
		}

	});

	return BudgetModel;

});