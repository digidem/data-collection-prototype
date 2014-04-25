/********************************************************************************************/
/********************************************************************************************/
/*******************************       IPHONE 4 (RETINA)       ******************************/
/********************************************************************************************/
/********************************************************************************************/

var components = {
	items : {
		basic : {
			title :'Basic',
			items : [ prx.components.text, prx.components.richtext,
			          prx.components.rectangle, prx.components.circle, prx.components.horizontalline,
					prx.components.verticalline, prx.components.actionarea, prx.components.animationtarget,
					prx.components.image, prx.components.icon, prx.components.placeholder, prx.components.webview,
					prx.components.html, prx.components.audio, prx.components.video,
					prx.components.tooltip
			/*
			 * prx.components.websiteembed, prx.components.htmlcode,
			 * prx.components.maps prx.components.paragraph,
			 */
			]
		},

		toolbars : {
			title :'Toolbars',
			items : [ 
			          prx.components.toolbar_retina,
			          prx.components.header_retina,
			          //prx.components.footer,
			          // prx.components.navbar,
			          prx.components.basic_tabbar_retina,
			          prx.components.tabbar_retina ]
		},
		buttons : {
			title :'Buttons',
			items : [ prx.components.button2_retina,
			          prx.components.arrowbutton_retina,
			          prx.components.fullwidthbutton_retina,
			          prx.components.buttongroup_retina,
			          prx.components.segmentedcontrolplain_retina,
			          prx.components.segmentedcontrol_retina,
			          prx.components.segmentedcontrolbar_retina,
			          prx.components.segmentedcontrolbezeled_retina,
			          prx.components.pagecontroller_retina 
			          ]
		},
		forms : {
			title :'Forms',
			items : [ prx.components.label_retina, 
			        prx.components.textfield_retina,
					prx.components.passwordfield_retina, 
					prx.components.radiobutton_retina,
					prx.components.radiolist_retina,
					prx.components.horizontalradiolist_retina,
					prx.components.checkbox_retina, 
					prx.components.checkboxlist_retina,
					prx.components.horizontalcheckboxlist_retina,
					prx.components.flipswitch_retina, 
					prx.components.flipswitch_ios5_retina, 
					prx.components.textarea_retina,
					prx.components.slider_retina,
					prx.components.picker_retina,
			/*
			 * prx.components.searchinput, prx.components.selectmenusingle,
			 * prx.components.selectmenugrouped,
			 * prx.components.selectmenuoverlaysmall,
			 * prx.components.selectmenuoverlarylarge,
			 * prx.components.selectmenuoverlaynative
			 */
			]
		},
		lists : {
			title :'Lists',
			items : [ prx.components.listbasic_retina, 
			        prx.components.listnested_retina,
					prx.components.listwithicon_retina, 
					prx.components.listwithvalue_retina,
					prx.components.listnestedwithvalue_retina,
					prx.components.listwithiconandvalue_retina,
					prx.components.listwithbadge_retina,
					prx.components.listnestedwithbadge_retina,
					prx.components.listwithiconandbadge_retina,
					prx.components.listcomplex_retina
			/*
			 * prx.components.listnumbered, prx.components.listreadonly,
			 * prx.components.listsplitbutton, prx.components.listdivider,
			 * prx.components.listcountbubble, prx.components.listthumbnails,
			 * prx.components.listicons
			 */
			]
		},
		device : {
			title :'Other',
			items : [
					// prx.components.select,
					prx.components.popover_retina,
					prx.components.alert_retina,
					prx.components.actionsheet_retina,
					prx.components.progressview_retina
			/*
			 * prx.components.topbar, prx.components.datepicker,
			 * prx.components.timepicker, prx.components.keyboard,
			 * prx.components.decision, prx.components.overlay,
			 * prx.components.loaders
			 */
			]
		}
	},
	otherProperties :'insert here'
};
