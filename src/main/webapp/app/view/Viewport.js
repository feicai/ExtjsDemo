Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    items: [
    	{
	        region: 'north',
	        xtype:'myheader',
	        height: 70
	    },
	   	{
	        region: 'west',
	        xtype: 'panel',
	        title:'主菜单',
	        width: 200,
	        minWidth: 100,
	        height: 200,
	        split: true,
	        //frame:true,
	        stateful: true,
	        stateId: 'mainnav.west',
	        collapsible: true,
	        layout:'fit',
	        tools: [{
	            type: 'gear',
	            regionTool: true
	        }],
	        items:[{
	        	xtype: 'panel',
	        	layout:'accordion',
	        	ui:'footer',
	        	items:[{
	        		xtype: 'panel',
	        		title: '系统管理',
	        		layout:'vbox',
					items:[{
						xtype:'button',
						width:'100%',
						textAlign :'left',
						iconCls:'table_add',
						padding:3,
						text:'部门管理'
					},{
						xtype:'button',
						width:'100%',
						textAlign :'left',
						iconCls:'table_add',
						text:'员工管理'
					},{
						xtype:'button',
						width:'100%',
						textAlign :'left',
						iconCls:'table_add',
						text:'角色管理'
					}]                	
	        	},{
	        		xtype: 'panel',
	        		title: 'Accordion Item 2',
                	html: '&lt;empty panel&gt;',
                	cls:'empty'
	        	},{
	        		xtype: 'panel',
	        		title: 'Accordion Item 2',
                	html: '&lt;empty panel&gt;',
                	cls:'empty'
	        	}]
	        }]
    	}, 
    	{
	        region: 'center',
	        xtype: 'userlist'
	    }
	]
});