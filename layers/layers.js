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
var format_LimiteAmministrativo_1 = new ol.format.GeoJSON();
var features_LimiteAmministrativo_1 = format_LimiteAmministrativo_1.readFeatures(json_LimiteAmministrativo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteAmministrativo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteAmministrativo_1.addFeatures(features_LimiteAmministrativo_1);
var lyr_LimiteAmministrativo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteAmministrativo_1, 
                style: style_LimiteAmministrativo_1,
                interactive: false,
                title: '<img src="styles/legend/LimiteAmministrativo_1.png" /> Limite Amministrativo'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LimiteAmministrativo_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LimiteAmministrativo_1];
lyr_LimiteAmministrativo_1.set('fieldAliases', {'id': 'id', });
lyr_LimiteAmministrativo_1.set('fieldImages', {'id': 'TextEdit', });
lyr_LimiteAmministrativo_1.set('fieldLabels', {'id': 'no label', });
lyr_LimiteAmministrativo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});