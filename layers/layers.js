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
var format_FasciaPerimetrale200m_1 = new ol.format.GeoJSON();
var features_FasciaPerimetrale200m_1 = format_FasciaPerimetrale200m_1.readFeatures(json_FasciaPerimetrale200m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaPerimetrale200m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaPerimetrale200m_1.addFeatures(features_FasciaPerimetrale200m_1);
var lyr_FasciaPerimetrale200m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasciaPerimetrale200m_1, 
                style: style_FasciaPerimetrale200m_1,
                interactive: false,
                title: '<img src="styles/legend/FasciaPerimetrale200m_1.png" /> Fascia Perimetrale - 200 m'
            });
var format_FasciaInterfaccia50m_2 = new ol.format.GeoJSON();
var features_FasciaInterfaccia50m_2 = format_FasciaInterfaccia50m_2.readFeatures(json_FasciaInterfaccia50m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaInterfaccia50m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaInterfaccia50m_2.addFeatures(features_FasciaInterfaccia50m_2);
var lyr_FasciaInterfaccia50m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasciaInterfaccia50m_2, 
                style: style_FasciaInterfaccia50m_2,
                interactive: false,
                title: '<img src="styles/legend/FasciaInterfaccia50m_2.png" /> Fascia Interfaccia - 50 m'
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
                interactive: false,
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
                interactive: false,
                title: '<img src="styles/legend/LimiteAmministrativo_4.png" /> Limite Amministrativo'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_FasciaPerimetrale200m_1.setVisible(true);lyr_FasciaInterfaccia50m_2.setVisible(true);lyr_Fabbricati_3.setVisible(true);lyr_LimiteAmministrativo_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FasciaPerimetrale200m_1,lyr_FasciaInterfaccia50m_2,lyr_Fabbricati_3,lyr_LimiteAmministrativo_4];
lyr_FasciaPerimetrale200m_1.set('fieldAliases', {'id': 'id', });
lyr_FasciaInterfaccia50m_2.set('fieldAliases', {'id': 'id', });
lyr_Fabbricati_3.set('fieldAliases', {'id': 'id', });
lyr_LimiteAmministrativo_4.set('fieldAliases', {'id': 'id', });
lyr_FasciaPerimetrale200m_1.set('fieldImages', {'id': 'TextEdit', });
lyr_FasciaInterfaccia50m_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Fabbricati_3.set('fieldImages', {'id': '', });
lyr_LimiteAmministrativo_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FasciaPerimetrale200m_1.set('fieldLabels', {'id': 'no label', });
lyr_FasciaInterfaccia50m_2.set('fieldLabels', {'id': 'no label', });
lyr_Fabbricati_3.set('fieldLabels', {'id': 'no label', });
lyr_LimiteAmministrativo_4.set('fieldLabels', {'id': 'no label', });
lyr_LimiteAmministrativo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});