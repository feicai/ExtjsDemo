Ext.onReady(function() {
	Ext.QuickTips.init();

	Ext.Loader.setConfig({
		enabled : true
	});

	Ext.application({
		name : 'MyApp',
		appFolder :'app', //默认app
		controllers : ['Main'],
		autoCreateViewport: true,
		launch : function() {
			/*Ext.create('Ext.container.Viewport', { // 简单创建一个试图
				layout : 'auto',// 自动填充布局
				items : {
					xtype : 'userlist',
					title : '用户列表',
					html : 'List of users will go here'
				}
			});*/
		}
	});
});