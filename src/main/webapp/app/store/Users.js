Ext.define('MyApp.store.Users',{
		extend:'Ext.data.Store', 
		pageSize:10,
		storeId:'employeeStore',
		model: 'MyApp.model.User',
		autoLoad: true, //很关键
		proxy:{
			type:'ajax',
			url : 'users.jsp',
			reader: {
				type:'json',
                root: 'colums',
                totalProperty: 'total'
            },
           writer:{
				type:'json'
			}
		}
});