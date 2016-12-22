{
    "actionToolScale": "large",
	"disableLayerChooser":true,
	"hideTopToolbar": true,
	"hideBottomToolbar": true,
    "portalConfig":{
		"header":false
	},
   "gsSources":{ 
		"bolzano": {
			"ptype": "gxp_wmssource",
			"url": "http://sit.comune.bolzano.it/geoserver/ows",
			"title": "Bolzano GeoServer",
			"SRS": "EPSG:900913",
			"version":"1.1.1",
			"layersCachedExtent": [
				-20037508.34,-20037508.34,
				20037508.34,20037508.34
			],
			"layerBaseParams":{
				"FORMAT": "image/png8",
				"TILED": true
			},
            "authParam":"authkey"
		}             
    },
	"map": {
		"projection": "EPSG:900913",
		"units": "m",
		"zoom": 5,
		"numZoomLevels": 18,
		"extent": [
				1259091.229051,5855016.830973,
				1268808.28627,5863434.458712
		],
		"layers": [                                                
			{
				"source": "bolzano",
				"title": "Ortofoto 2013 Bolzano/Bozen",
				"name": "Cartografia:ortofoto2013",
				"layersCachedExtent": [
					1252344.2712499984,5850795.892246094,1271912.1504882798,5870363.771484375
				],
				"group": "background",
				"transparent": false,
				"format": "image/jpeg"
			},{
                "source": "bolzano",
				"title": "servizi_apertura",
				"name": "Cartografia:servizi_apertura"
            }
		]
	},
	
    "customPanels":[
		{
			"xtype": "panel",
			"title": "",         
			"border": false,
			"id": "east",
			"width": 400,
			"height": 500,
			"region": "east",
			"layout": "fit",
			"collapsed": false,
			"split": true,
			"collapsible": true,
			"header": true
        }
    ],
	
	"customTools":[
		{
			"ptype": "gxp_searchservizioapertura",			
			"outputTarget": "east",
			"serviceUrl": "http://sit.comune.bolzano.it/GeoInfo/",
			"selectionProperties": {
				"wmsURL": "http://sit.comune.bolzano.it/geoserver/ows",
				"selectionLayerTitle": "Selection Layer",
				"selectionLayerCiviciName": "Cartografia:civici",
				"selectionLayerViaName": "ctn_base:grafo_vie",
				"filterCiviciAttribute": "ID",
				"selectionCiviciStyle": "highlight_point",
				"filterViaAttribute": "ID_STRASSE",
				"selectionViaStyle": "highlight"
			}
		}, {
			"ptype": "gxp_addlayer",
			"showCapabilitiesGrid": false,
			"id": "addlayer"
		}, {
			"ptype": "gxp_languageselector",
			"actionTarget": {"target": "panelbbar", "index": 3}
		}, {
			"ptype": "gxp_wmsgetfeatureinfo_menu", 
			"regex": "[\\s\\S]*[\\w]+[\\s\\S]*",
			"useTabPanel": true,
			"toggleGroup": "toolGroup",
			"queryLayer": "Cartografia:servizi_apertura",
			"defaultActive": "info-hover",
			"delay": 1000,
			"vendorParams": {
				"buffer": 20
			},
			"actionTarget": {"target": "paneltbar", "index": 20}
		}
		, {
			"ptype": "gxp_help",
			"mode": "window",
			"showOnStartup": true,
			"windowHeight": 400,
			"windowWidth": 500,
			"showAgainTool": true,			
			"description": "<h2>Servizi pubblici e servizi di interesse pubblico nella Città di Bolzano</h2><br><ul><li>Attraverso una nuova applicazione il Comune di Bolzano intende offrire a cittadini e ospiti un rapido e facile accesso a tutte le informazioni disponibili sulla gamma di servizi pubblici e servizi di interesse pubblico della città.</li><li>La ricerca può essere effettuata per: area di servizio (es. Istruzione), categoria (es. Scuole), circoscrizione, indirizzo oppure orario di apertura.</li><li>Servizi che non sono ancora qui inseriti, possono essere progressivamente aggiunti alla banca dati. Inoltre è possibile in qualsiasi momento aggiornare informazioni riguardanti servizi già rilevati.</li><li>In entrambi i casi, il gestore di servizi può utilizzare un modulo di rilevazione, che può essere scaricato qui ed inviato con una email a <a href='mailto:tempi.citta@comune.bolzano.it'>tempi.citta@comune.bolzano.it</a>.</li></ul><br><h2>Guida d'uso</h2><br><ul type='disc'><li> - Mantieni il cursore del mouse sul servizio per far apparire le relative informazioni;</li><li> - Usa i controlli di mappa posizionati in alto a sinistra per cambiare la scala di visualizzazione o la regione visualizzata;</li><li> - Utilizza invece il pannello di ricerca posizionato a destra per conoscere i servizi disponibili.</li></ul>",
			"descriptionDe": "<h2>Öffentliche Dienstleistungen und Dienstleistungen von öffentlichem Interesse in der Stadt Bozen</h2><br><ul><li>Die Gemeinde Bozen will durch eine neue Applikation Bürgerinnen und Bürgern sowie Gästen einen raschen und einfachen Zugang zu allen verfügbaren Informationen über das Angebot an öffentlichen Dienstleistungen sowie Dienstleistungen von öffentlichem Interesse in der Stadt bieten.</li><li>Die Suche kann nach verschiedenen Startbegriffen erfolgen: Bereich der Dienstleistung (z.B. Bildung), Kategorien (z.B. Schulen), Stadtviertel, Adresse oder Öffnungszeiten.</li><li>Dienstleistungen, die hier noch nicht erfasst sind, können laufend neu ins Programm aufgenommen werden, und genauso können die Informationen bezüglich bereits erfasster Dienstleistungen bei Bedarf jederzeit aktualisiert werden.</li><li>In beiden Fällen können die Anbieter der jeweiligen Dienste ein Erhebungsformular benutzen, welches hier heruntergeladen und nach dem Ausfüllen per E-Mail an <a href='mailto:zeiten.stadt@gemeinde.bozen.it'>zeiten.stadt@gemeinde.bozen.it</a> gesendet werden kann.</li></ul><br><h2>Bedienungsanleitung</h2><br><ul type='disc'><li> - Positionieren Sie den Mauszeiger auf einem der Dienste, um die entsprechenden Informationen erscheinen zu lassen.</li><li> - Benützen Sie die oben links positionierten Kontrollfunktionen der Karte, um den Ansichtsmaßstab oder das Stadtgebiet zu ändern..</li><li> - Verwenden Sie hingegen die rechts positionierten Suchfunktionen, um die verfügbaren Dienste zu finden.</li></ul>",
			"actionTarget": {"target": "paneltbar", "index": 21}
		}
	]
	
}