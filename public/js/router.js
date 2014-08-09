// Filename: router.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/budgetView',
	'views/transactionView'
], function($, _, Backbone, BudgetView, TransactionView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			// Define URL routes
			'/budget': 'showBudget',
			'/transactions': 'showTransactions',

			// Default
			'*actions': 'defaultAction'
		}
	});

	var initialize = function() {

		var appRouter = new AppRouter();

		// Call render on the module we loaded in via the dependency array 'views/budget'
		appRouter.on('showBudget', function() {
			var budgetView = new BudgetView();
			budgetView.render();
		});

		// Call render on the module we loaded in via the dependency array 'views/transactions'
		appRouter.on('showTransactions', function() {
			var transactionView = new TransactionView();
			transactionView.render();
		});

		// We have no matching route, lets just log what the URL was
		appRouter.on('defaultAction', function(actions) {
			console.log('No route: ', actions);
		});

		// Kick off backbone history monitoring
		Backbone.history.start();

	};

	return {
		initialize: initialize
	};

});