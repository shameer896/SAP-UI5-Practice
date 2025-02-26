sap.ui.jsview("shameer.mvcapp.view.first",{
    getControllerName: function(){
        return "shaeer.mvcapp.controller.first";
    },
    createContent:function(){
        var aColumns=[
			new sap.m.Column({	header :new sap.m.Text({ text :"Sweet Shop ID" }) 	}),
						
			new sap.m.Column({ header :new sap.m.Text({ text :"Sweet Shop Name" }) 	})
						];
		
//Columns		
			var oTemplate=new sap.m.ColumnListItem({
													type: "Navigation",
													press:[oController.onListItemPress,oController],
													cells :[
													new sap.m.ObjectIdentifier({ text :"{ID}" }),
													new sap.m.ObjectIdentifier({ text :"{Name}" })
															]
													});
//headerToolbar of table		
			var oTableHeader=new sap.m.Toolbar({
											content :[
														new sap.m.Title({ text :"Number of Sweets Suppliers :{/SweetsSupplier/1/ID}" })
													 ]
												});
		
			var oTable=new sap.m.Table("tab",{
										columns :aColumns,
										headerToolbar :oTableHeader
										});
			
		
			oTable.bindItems( { path : "/SweetsSupplier", template : oTemplate });
			
			
			var oPageMaster=new sap.m.Page({
											title :"Sweet Suppliers",
											content :[oTable]
														}			);
														
			return oPageMaster;	
    }
})