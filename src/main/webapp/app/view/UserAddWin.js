Ext.define('MyApp.view.UserAddWin',{
	extend:'Ext.window.Window',
	alias: ['widget.useraddwin'],
	title: 'Hello',
    constrain:true,
    height: 300,
    width: 600,
    layout: 'fit',
    maximizable : true,
    modal:true
})