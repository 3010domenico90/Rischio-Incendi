var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FasciaPerimetrale_1 = new ol.format.GeoJSON();
var features_FasciaPerimetrale_1 = format_FasciaPerimetrale_1.readFeatures(json_FasciaPerimetrale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaPerimetrale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaPerimetrale_1.addFeatures(features_FasciaPerimetrale_1);
var lyr_FasciaPerimetrale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasciaPerimetrale_1, 
                style: style_FasciaPerimetrale_1,
                interactive: true,
                title: '<img src="styles/legend/FasciaPerimetrale_1.png" /> Fascia Perimetrale'
            });
var format_FasciaInterfaccia_2 = new ol.format.GeoJSON();
var features_FasciaInterfaccia_2 = format_FasciaInterfaccia_2.readFeatures(json_FasciaInterfaccia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaInterfaccia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaInterfaccia_2.addFeatures(features_FasciaInterfaccia_2);
var lyr_FasciaInterfaccia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasciaInterfaccia_2, 
                style: style_FasciaInterfaccia_2,
                interactive: true,
                title: '<img src="styles/legend/FasciaInterfaccia_2.png" /> Fascia Interfaccia'
            });
var format_Fabbricati_3 = new ol.format.GeoJSON();
var features_Fabbricati_3 = format_Fabbricati_3.readFeatures(json_Fabbricati_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fabbricati_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fabbricati_3.addFeatures(features_Fabbricati_3);
var lyr_Fabbricati_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fabbricati_3, 
                style: style_Fabbricati_3,
                interactive: true,
                title: '<img src="styles/legend/Fabbricati_3.png" /> Fabbricati'
            });
var format_LimiteAmministrativo_4 = new ol.format.GeoJSON();
var features_LimiteAmministrativo_4 = format_LimiteAmministrativo_4.readFeatures(json_LimiteAmministrativo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteAmministrativo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteAmministrativo_4.addFeatures(features_LimiteAmministrativo_4);
var lyr_LimiteAmministrativo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteAmministrativo_4, 
                style: style_LimiteAmministrativo_4,
                interactive: true,
                title: '<img src="styles/legend/LimiteAmministrativo_4.png" /> Limite Amministrativo'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_FasciaPerimetrale_1.setVisible(true);lyr_FasciaInterfaccia_2.setVisible(true);lyr_Fabbricati_3.setVisible(true);lyr_LimiteAmministrativo_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FasciaPerimetrale_1,lyr_FasciaInterfaccia_2,lyr_Fabbricati_3,lyr_LimiteAmministrativo_4];
lyr_FasciaPerimetrale_1.set('fieldAliases', {'id': 'id', });
lyr_FasciaInterfaccia_2.set('fieldAliases', {'id': 'id', });
lyr_Fabbricati_3.set('fieldAliases', {'id': 'id', });
lyr_LimiteAmministrativo_4.set('fieldAliases', {'id': 'id', });
lyr_FasciaPerimetrale_1.set('fieldImages', {'id': 'TextEdit', });
lyr_FasciaInterfaccia_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Fabbricati_3.set('fieldImages', {'id': '', });
lyr_LimiteAmministrativo_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FasciaPerimetrale_1.set('fieldLabels', {'id': 'no label', });
lyr_FasciaInterfaccia_2.set('fieldLabels', {'id': 'no label', });
lyr_Fabbricati_3.set('fieldLabels', {'id': 'no label', });
lyr_LimiteAmministrativo_4.set('fieldLabels', {'id': 'no label', });
lyr_LimiteAmministrativo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});