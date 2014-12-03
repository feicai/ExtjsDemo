Ext.define('MyApp.view.UserList',{
	extend:'Ext.grid.Panel',
	alias: ['widget.userlist'],
	border: false,
	title:'表格',
	columnLines :true,
	iconCls:'table',
	lyout:'fit',
	id:'userListId',
	store : 'Users',
	frame:true,
	selType :'checkboxmodel', //选择模式Ext.selection.CheckboxModelView
	multiSelect:true,
    columns: [
    		{xtype: 'rownumberer'},
			{text: '第一名字',  dataIndex:'firstname',width:'20%',
				editor:{xtype:'textfield',allowBlank:false} },
	        {text: '第二名字',  dataIndex:'lastname',width:'20%'},
	        {text: '雇佣日期',  dataIndex:'hired', xtype:'datecolumn',width:'20%', format:'Y年m月d日 D',
			    editor:{xtype:'datefield',allowBlank:false} },
	        {text: '部门(Yrs)', xtype:'templatecolumn',width:'20%', tpl:'{dep} ({seniority})'},
	        {text: '操作', xtype:'actioncolumn',width:'10%',icon:'/ext/images/icons/round/round_add.png'}
	],
	plugins: [
		    Ext.create('Ext.grid.plugin.CellEditing', {
		        clicksToEdit: 1
		    })
	],
	tbar: [
	  		{ xtype: 'button', id:'btn_add', text: '增加',iconCls:'table_add'},
	  		{ xtype: 'button', id:'btn_update', text: '修改',iconCls:'table_update' },
	  		{ xtype: 'button', id:'btn_delete', text: '删除' ,iconCls:'table_delete'}
	],
	dockedItems :[{
			xtype:'pagingtoolbar',
			store:'Users',
			dock:'bottom',
			displayInfo:true
	}],
    initComponent:function(){
			this.callParent(arguments);
	}
});