var wms_layers = [];


        var lyr_OpenStreetMapde_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap.de',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, under ODbL</a>',
                url: 'https://a.tile.openstreetmap.de/{z}/{x}/{y}.png'
            })
        });
var format_Border_1 = new ol.format.GeoJSON();
var features_Border_1 = format_Border_1.readFeatures(json_Border_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_1.addFeatures(features_Border_1);
var lyr_Border_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Border_1, 
                style: style_Border_1,
                interactive: true,
                title: '<img src="styles/legend/Border_1.png" /> Border'
            });
var format_Street_2 = new ol.format.GeoJSON();
var features_Street_2 = format_Street_2.readFeatures(json_Street_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Street_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Street_2.addFeatures(features_Street_2);
var lyr_Street_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Street_2, 
                style: style_Street_2,
                interactive: true,
                title: '<img src="styles/legend/Street_2.png" /> Street'
            });
var format_Health_3 = new ol.format.GeoJSON();
var features_Health_3 = format_Health_3.readFeatures(json_Health_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Health_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Health_3.addFeatures(features_Health_3);
var lyr_Health_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Health_3, 
                style: style_Health_3,
                interactive: true,
                title: '<img src="styles/legend/Health_3.png" /> Health'
            });

lyr_OpenStreetMapde_0.setVisible(true);lyr_Border_1.setVisible(true);lyr_Street_2.setVisible(true);lyr_Health_3.setVisible(true);
var layersList = [lyr_OpenStreetMapde_0,lyr_Border_1,lyr_Street_2,lyr_Health_3];
lyr_Border_1.set('fieldAliases', {'Area_km2': 'Area_km2', 'Population': 'Population', 'Part_Engli': 'Part_Engli', 'Part_Arabi': 'Part_Arabi', 'Governorat': 'Governorat', 'Name_Engli': 'Name_Engli', 'Governor_5': 'Governor_5', });
lyr_Street_2.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_Health_3.set('fieldAliases', {'Name1': 'Name1', 'Type_': 'Type_', });
lyr_Border_1.set('fieldImages', {'Area_km2': 'TextEdit', 'Population': 'TextEdit', 'Part_Engli': 'TextEdit', 'Part_Arabi': 'TextEdit', 'Governorat': 'TextEdit', 'Name_Engli': 'TextEdit', 'Governor_5': 'TextEdit', });
lyr_Street_2.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Health_3.set('fieldImages', {'Name1': 'TextEdit', 'Type_': 'TextEdit', });
lyr_Border_1.set('fieldLabels', {'Area_km2': 'no label', 'Population': 'no label', 'Part_Engli': 'no label', 'Part_Arabi': 'no label', 'Governorat': 'no label', 'Name_Engli': 'no label', 'Governor_5': 'no label', });
lyr_Street_2.set('fieldLabels', {'fclass': 'no label', 'name': 'inline label', });
lyr_Health_3.set('fieldLabels', {'Name1': 'header label', 'Type_': 'inline label', });
lyr_Health_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});