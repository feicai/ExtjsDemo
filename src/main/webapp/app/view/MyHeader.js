Ext.define('MyApp.view.MyHeader',{
	extend: 'Ext.Toolbar',
	alias:['widget.myheader'],
	height: 53,
	border:false,
	ui:'sencha',
    items: [
        {
            xtype: 'component',
          	lyout: 'fit',
            cls  : 'header',
            html : 'OA办公自动化系统'
        }
    ]
});