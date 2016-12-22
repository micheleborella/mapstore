/**
 * @requires plugins/Tool.js
 */

/** api: (define)
 *  module = gxp.plugins
 *  class = SearchEta
 */
 
 
/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("gxp.plugins");

/** api: constructor
 *  .. class:: SearchEta(config)
 *
 *    Plugin for adding a new group on layer tree.
 */
gxp.plugins.SearchEta = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = gxp_addgroup */
    ptype: "gxp_searcheta",
	
	
	layerName: 'view_eta_civ',
	layerWs: 'Cartografia',
	

	selectionProperties: null,
	firstTb: false,
	
	closed_groups: null,
	
	showStartMsg: false,
	startMsgTitles: null,
	startMsgTexts: null,
		
	constructor: function(config) {
        gxp.plugins.SearchEta.superclass.constructor.apply(this, arguments);
    },
	
	/** private: method[init]
	* :arg target: ``Object`` The object initializing this plugin.
	*/
	init: function(target) {
		gxp.plugins.SearchEta.superclass.init.apply(this, arguments);
	},

    /** 
     * api: method[addActions]
     */
    addOutput: function() {
        var apptarget = this.target;
        
			
				
		var me = this;
		
		
		
		var form = new Ext.form.FormPanel({
			header: true,
			border: true,
			title: 'Filtra per età',
			labelWidth: 80,
			height: 300,
			bodyStyle:'padding:5px 5px 5px',  
			items: [
				{
					xtype: 'numberfield',
					fieldLabel: 'Da',
					id: 'daBox',
					labelStyle:'font-weight:bold;',
					value: 0,
					minValue: 0
				},
				{
					xtype: 'numberfield',
					fieldLabel: 'A',
					id: 'aBox',
					labelStyle:'font-weight:bold;',
					value: 99,
					minValue: 0
				},
			    //{
			  	//xtype: 'compositefield',	
				//id: 'cmpFld',
				//	items: [
						{
							xtype: 'button',
							id: 'srceBtn',
							text: 'Filtra',
							scope: this,
							handler: function(){
								var layer;
								var start = Ext.getCmp("daBox").getValue();
								var end = Ext.getCmp("aBox").getValue();
  							    layer = apptarget.mapPanel.map.getLayersByName(this.layerName)[0];
								if (! layer) 
								{
									return;
								}
								
								var params = {
								   "viewparams": "start_age:" + start + ";end_age:" + end
								};
							   
							   
							   layer.mergeNewParams(params);
							   
							   var index = apptarget.mapPanel.layers.findExact('name', this.layerWs + ':' + this.layerName);
							   apptarget.mapPanel.layers.getAt(index).getLayer().vendorParams = params;
							   apptarget.mapPanel.layers.getAt(index).getLayer().mergeNewParams(params);
							}
						}
					//]
				//}				
            ]
		});	


			
		var panel = gxp.plugins.SearchEta.superclass.addOutput.call(this, form);		
        return panel;
    }
        
});

Ext.preg(gxp.plugins.SearchEta.prototype.ptype, gxp.plugins.SearchEta);
