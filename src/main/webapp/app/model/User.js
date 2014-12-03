Ext.define('MyApp.model.User', {
	extend: 'Ext.data.Model',
	fields: [
	    'firstname', 'lastname', 'seniority', 'dep', 'hired'
	],
	idProperty: 'firstname'
});