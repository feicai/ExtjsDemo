Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
 	stores: ['Users'],
 	models :['User'],
 	views:['UserList','MyHeader'],
    init: function() {
        this.control({
			'userlist button[id=btn_add]':{
				'click':function(o){
					Ext.create('MyApp.view.UserAddWin').show();
				}
			},
			'userlist button[id=btn_delete]':{
				'click':function(o){
					//var grid = o.findParentByType('gridpanel');
	  				var grid = Ext.getCmp('userListId');
	  				var data = grid.getSelectionModel().getSelection();
	  				if(data.length==0){
	  					Ext.MessageBox.alert("提示","请至少选择一条数据!");
	  				}else{
	  					var myStore = grid.getStore();
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
				}
			}
		});
    }
});