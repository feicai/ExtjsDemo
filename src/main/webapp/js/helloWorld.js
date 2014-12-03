Ext.Loader.setConfig({enabled: true});

Ext.onReady(function(){
//	Ext.MessageBox.alert("提示","HELLO WORLD!");
	
	/*Ext.Msg.show({
		title:"标题",
		msg:"你好",
		width:300,
		height:300,
		icon:Ext.Msg.INFO,
		buttons:Ext.Msg.OKCANCEL
	
	});*/
	Ext.tip.QuickTipManager.init();

    Ext.define('user', {
        extend: 'Ext.data.Model',
        fields: [
            'firstname', 'lastname', 'seniority', 'dep', 'hired'
        ],
        idProperty: 'firstname'
    });
	
	var myStore = Ext.create('Ext.data.Store', {
		pageSize:10,
		storeId:'employeeStore',
		model: 'user',
		//fields:['firstname', 'lastname', 'seniority', 'dep', 'hired'],
		/*data:[
		    {firstname:'Michael0', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'}, 
		    {firstname:'Michael1', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'}, 
		    {firstname:'Michael2', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'}, 
		    {firstname:'Michael3', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'}
		],*/
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
	
	var myGrid = Ext.create('Ext.grid.Panel',{
			border: false,
			title:'表格',
			columnLines :true,
			//frame:true,
			iconCls:'table',
			lyout:'fit',
			forceFit:true,
			loadMask: true,
			store: myStore,
			selType :'checkboxmodel', //选择模式Ext.selection.CheckboxModelView
			multiSelect:true,
	        columns: [
					{text: 'First Name',  dataIndex:'firstname',
						editor:{xtype:'textfield',allowBlank:false}
					},
			        {text: 'Last Name',  dataIndex:'lastname'},
			        {text: 'Hired Month',  dataIndex:'hired', xtype:'datecolumn', format:'Y年m月d日 D',
			        	editor:{xtype:'datefield',allowBlank:false}
			        },
			        {text: 'Department (Yrs)', xtype:'templatecolumn', tpl:'{dep} ({seniority})'}
			], 
			plugins: [
		        Ext.create('Ext.grid.plugin.CellEditing', {
		            clicksToEdit: 1
		        })
		    ],
			tools:[{
				    type:'refresh',
				    tooltip: 'Refresh form Data',
				    // hidden:true,
				    handler: function(event, toolEl, panel){
				        // 实现逻辑
				    }
			},
			{
				    type:'help',
				    tooltip: 'Get Help',
				    handler: function(event, toolEl, panel){
				        // 在此显示帮助信息
				    }
			}],
			tbar: [
			  		{ xtype: 'button', text: '增加',iconCls:'table_add',
			  			/*listeners:{
			  			'click':function(){
			  				Ext.MessageBox.alert("提示","增加!");
			  			}*/
			  			handler:function(o){
			  				myWin.show();
			  			}
			  		},
			  		{ xtype: 'button', text: '修改',iconCls:'table_update' ,listeners:{
			  			'click':function(){
			  				
			  			}
			  		}},
			  		{ xtype: 'button', text: '删除' ,iconCls:'table_delete',handler:function(o){
		  				var grid = o.findParentByType('gridpanel');
			  				var data = grid.getSelectionModel().getSelection();
			  				if(data.length==0){
			  					Ext.MessageBox.alert("提示","请至少选择一条数据!");
			  				}else{
			  					var ids =[];
			  					Ext.each(data,function(record){
			  						ids.push(record.get('firstname'));
			  					});
			  					Ext.Ajax.request({
			  						url:'users.jsp',
			  						params:{ids:ids.join(',')},
			  						method:'post',
			  						success:function(response,opts){
			  							Ext.each(data,function(record){
					  						myStore.remove(record);
					  					});
			  						}
			  					})
			  				}
		  			}}
			],
			bbar: Ext.create('Ext.PagingToolbar', {
		            store: myStore,
		            displayInfo: true,
		            //displayMsg: 'Displaying topics {0} - {1} of {2}',
		            //emptyMsg: "No topics to display",
		            items:[
		                '-', {
		                text: 'Show Preview',
		               // pressed: pluginExpanded,
		                enableToggle: true,
		                toggleHandler: function(btn, pressed) {
		                    //var preview = Ext.getCmp('gv').getPlugin('preview');
		                    //preview.toggleExpanded(pressed);
		                }
		            }]
	        }),
	        renderTo:Ext.getBody()
	});
	myStore.loadPage(1);
	var myWin = Ext.create('Ext.window.Window', {
	    title: 'Hello',
	    constrain:true,
	    height: 300,
	    width: 600,
	    layout: 'fit'
	    //renderTo: Ext.getBody(),
	    //items: [myGrid]
	});
});