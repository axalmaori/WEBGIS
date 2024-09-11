var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MEGATHRUST_1 = new ol.format.GeoJSON();
var features_MEGATHRUST_1 = format_MEGATHRUST_1.readFeatures(json_MEGATHRUST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MEGATHRUST_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEGATHRUST_1.addFeatures(features_MEGATHRUST_1);
var lyr_MEGATHRUST_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEGATHRUST_1, 
                style: style_MEGATHRUST_1,
                popuplayertitle: "MEGATHRUST",
                interactive: true,
                title: '<img src="styles/legend/MEGATHRUST_1.png" /> MEGATHRUST'
            });
var format_KLASIFIKASIASPEKTOPOGRAFI_2 = new ol.format.GeoJSON();
var features_KLASIFIKASIASPEKTOPOGRAFI_2 = format_KLASIFIKASIASPEKTOPOGRAFI_2.readFeatures(json_KLASIFIKASIASPEKTOPOGRAFI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLASIFIKASIASPEKTOPOGRAFI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLASIFIKASIASPEKTOPOGRAFI_2.addFeatures(features_KLASIFIKASIASPEKTOPOGRAFI_2);
var lyr_KLASIFIKASIASPEKTOPOGRAFI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLASIFIKASIASPEKTOPOGRAFI_2, 
                style: style_KLASIFIKASIASPEKTOPOGRAFI_2,
                popuplayertitle: "KLASIFIKASI ASPEK TOPOGRAFI",
                interactive: true,
    title: 'KLASIFIKASI ASPEK TOPOGRAFI<br />\
    <img src="styles/legend/KLASIFIKASIASPEKTOPOGRAFI_2_0.png" /> Rendah<br />\
    <img src="styles/legend/KLASIFIKASIASPEKTOPOGRAFI_2_1.png" /> Menengah Rendah<br />\
    <img src="styles/legend/KLASIFIKASIASPEKTOPOGRAFI_2_2.png" /> Menengah Tinggi<br />'
        });
var format_KLASIFIKASIASPEKRISIKOBENCANA_3 = new ol.format.GeoJSON();
var features_KLASIFIKASIASPEKRISIKOBENCANA_3 = format_KLASIFIKASIASPEKRISIKOBENCANA_3.readFeatures(json_KLASIFIKASIASPEKRISIKOBENCANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLASIFIKASIASPEKRISIKOBENCANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLASIFIKASIASPEKRISIKOBENCANA_3.addFeatures(features_KLASIFIKASIASPEKRISIKOBENCANA_3);
var lyr_KLASIFIKASIASPEKRISIKOBENCANA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLASIFIKASIASPEKRISIKOBENCANA_3, 
                style: style_KLASIFIKASIASPEKRISIKOBENCANA_3,
                popuplayertitle: "KLASIFIKASI ASPEK RISIKO BENCANA",
                interactive: true,
    title: 'KLASIFIKASI ASPEK RISIKO BENCANA<br />\
    <img src="styles/legend/KLASIFIKASIASPEKRISIKOBENCANA_3_0.png" /> Rendah<br />\
    <img src="styles/legend/KLASIFIKASIASPEKRISIKOBENCANA_3_1.png" /> Menengah Rendah<br />\
    <img src="styles/legend/KLASIFIKASIASPEKRISIKOBENCANA_3_2.png" /> Menengah Tinggi<br />\
    <img src="styles/legend/KLASIFIKASIASPEKRISIKOBENCANA_3_3.png" /> Tinggi<br />'
        });
var format_KLASIFIKASIINDEKSRISIKO_4 = new ol.format.GeoJSON();
var features_KLASIFIKASIINDEKSRISIKO_4 = format_KLASIFIKASIINDEKSRISIKO_4.readFeatures(json_KLASIFIKASIINDEKSRISIKO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLASIFIKASIINDEKSRISIKO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLASIFIKASIINDEKSRISIKO_4.addFeatures(features_KLASIFIKASIINDEKSRISIKO_4);
var lyr_KLASIFIKASIINDEKSRISIKO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLASIFIKASIINDEKSRISIKO_4, 
                style: style_KLASIFIKASIINDEKSRISIKO_4,
                popuplayertitle: "KLASIFIKASI INDEKS RISIKO",
                interactive: true,
    title: 'KLASIFIKASI INDEKS RISIKO<br />\
    <img src="styles/legend/KLASIFIKASIINDEKSRISIKO_4_0.png" /> Rendah<br />\
    <img src="styles/legend/KLASIFIKASIINDEKSRISIKO_4_1.png" /> Menengah Rendah<br />\
    <img src="styles/legend/KLASIFIKASIINDEKSRISIKO_4_2.png" /> Menengah Tinggi<br />'
        });
var format_INDEXRISIKO_5 = new ol.format.GeoJSON();
var features_INDEXRISIKO_5 = format_INDEXRISIKO_5.readFeatures(json_INDEXRISIKO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEXRISIKO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEXRISIKO_5.addFeatures(features_INDEXRISIKO_5);
var lyr_INDEXRISIKO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDEXRISIKO_5, 
                style: style_INDEXRISIKO_5,
                popuplayertitle: "INDEX RISIKO",
                interactive: true,
    title: 'INDEX RISIKO<br />\
    <img src="styles/legend/INDEXRISIKO_5_0.png" /> 1 (MIN)<br />\
    <img src="styles/legend/INDEXRISIKO_5_1.png" /> 1.2<br />\
    <img src="styles/legend/INDEXRISIKO_5_2.png" /> 1.4<br />\
    <img src="styles/legend/INDEXRISIKO_5_3.png" /> 1.6<br />\
    <img src="styles/legend/INDEXRISIKO_5_4.png" /> 1.7<br />\
    <img src="styles/legend/INDEXRISIKO_5_5.png" /> 1.8<br />\
    <img src="styles/legend/INDEXRISIKO_5_6.png" /> 2<br />\
    <img src="styles/legend/INDEXRISIKO_5_7.png" /> 2.2<br />\
    <img src="styles/legend/INDEXRISIKO_5_8.png" /> 2.4<br />\
    <img src="styles/legend/INDEXRISIKO_5_9.png" /> 2.6<br />\
    <img src="styles/legend/INDEXRISIKO_5_10.png" /> 2.8 (MAX)<br />'
        });
var format_KONTURJATIM_6 = new ol.format.GeoJSON();
var features_KONTURJATIM_6 = format_KONTURJATIM_6.readFeatures(json_KONTURJATIM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTURJATIM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTURJATIM_6.addFeatures(features_KONTURJATIM_6);
var lyr_KONTURJATIM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONTURJATIM_6, 
                style: style_KONTURJATIM_6,
                popuplayertitle: "KONTUR JATIM",
                interactive: true,
                title: '<img src="styles/legend/KONTURJATIM_6.png" /> KONTUR JATIM'
            });
var format_ALPROJATIMJuli2024_7 = new ol.format.GeoJSON();
var features_ALPROJATIMJuli2024_7 = format_ALPROJATIMJuli2024_7.readFeatures(json_ALPROJATIMJuli2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALPROJATIMJuli2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALPROJATIMJuli2024_7.addFeatures(features_ALPROJATIMJuli2024_7);
var lyr_ALPROJATIMJuli2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALPROJATIMJuli2024_7, 
                style: style_ALPROJATIMJuli2024_7,
                popuplayertitle: "ALPRO JATIM (Juli 2024)",
                interactive: true,
                title: '<img src="styles/legend/ALPROJATIMJuli2024_7.png" /> ALPRO JATIM (Juli 2024)'
            });
var format_AREARISIKORENDAH_8 = new ol.format.GeoJSON();
var features_AREARISIKORENDAH_8 = format_AREARISIKORENDAH_8.readFeatures(json_AREARISIKORENDAH_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREARISIKORENDAH_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREARISIKORENDAH_8.addFeatures(features_AREARISIKORENDAH_8);
var lyr_AREARISIKORENDAH_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREARISIKORENDAH_8, 
                style: style_AREARISIKORENDAH_8,
                popuplayertitle: "AREA RISIKO RENDAH",
                interactive: true,
    title: 'AREA RISIKO RENDAH<br />\
    <img src="styles/legend/AREARISIKORENDAH_8_0.png" /> Rendah<br />'
        });
var format_ALPROAREARISIKORENDAH_9 = new ol.format.GeoJSON();
var features_ALPROAREARISIKORENDAH_9 = format_ALPROAREARISIKORENDAH_9.readFeatures(json_ALPROAREARISIKORENDAH_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALPROAREARISIKORENDAH_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALPROAREARISIKORENDAH_9.addFeatures(features_ALPROAREARISIKORENDAH_9);
var lyr_ALPROAREARISIKORENDAH_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALPROAREARISIKORENDAH_9, 
                style: style_ALPROAREARISIKORENDAH_9,
                popuplayertitle: "ALPRO AREA RISIKO RENDAH",
                interactive: true,
                title: '<img src="styles/legend/ALPROAREARISIKORENDAH_9.png" /> ALPRO AREA RISIKO RENDAH'
            });
var format_AREARISIKOMENENGAHRENDAH_10 = new ol.format.GeoJSON();
var features_AREARISIKOMENENGAHRENDAH_10 = format_AREARISIKOMENENGAHRENDAH_10.readFeatures(json_AREARISIKOMENENGAHRENDAH_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREARISIKOMENENGAHRENDAH_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREARISIKOMENENGAHRENDAH_10.addFeatures(features_AREARISIKOMENENGAHRENDAH_10);
var lyr_AREARISIKOMENENGAHRENDAH_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREARISIKOMENENGAHRENDAH_10, 
                style: style_AREARISIKOMENENGAHRENDAH_10,
                popuplayertitle: "AREA RISIKO MENENGAH RENDAH",
                interactive: true,
    title: 'AREA RISIKO MENENGAH RENDAH<br />\
    <img src="styles/legend/AREARISIKOMENENGAHRENDAH_10_0.png" /> Menengah Rendah<br />'
        });
var format_ALPROAREARISIKOMENENGAHRENDAH_11 = new ol.format.GeoJSON();
var features_ALPROAREARISIKOMENENGAHRENDAH_11 = format_ALPROAREARISIKOMENENGAHRENDAH_11.readFeatures(json_ALPROAREARISIKOMENENGAHRENDAH_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALPROAREARISIKOMENENGAHRENDAH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALPROAREARISIKOMENENGAHRENDAH_11.addFeatures(features_ALPROAREARISIKOMENENGAHRENDAH_11);
var lyr_ALPROAREARISIKOMENENGAHRENDAH_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALPROAREARISIKOMENENGAHRENDAH_11, 
                style: style_ALPROAREARISIKOMENENGAHRENDAH_11,
                popuplayertitle: "ALPRO AREA RISIKO MENENGAH RENDAH",
                interactive: true,
                title: '<img src="styles/legend/ALPROAREARISIKOMENENGAHRENDAH_11.png" /> ALPRO AREA RISIKO MENENGAH RENDAH'
            });
var format_AREARISIKOMENENGAHTINGGI_12 = new ol.format.GeoJSON();
var features_AREARISIKOMENENGAHTINGGI_12 = format_AREARISIKOMENENGAHTINGGI_12.readFeatures(json_AREARISIKOMENENGAHTINGGI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREARISIKOMENENGAHTINGGI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREARISIKOMENENGAHTINGGI_12.addFeatures(features_AREARISIKOMENENGAHTINGGI_12);
var lyr_AREARISIKOMENENGAHTINGGI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREARISIKOMENENGAHTINGGI_12, 
                style: style_AREARISIKOMENENGAHTINGGI_12,
                popuplayertitle: "AREA RISIKO MENENGAH TINGGI",
                interactive: true,
    title: 'AREA RISIKO MENENGAH TINGGI<br />\
    <img src="styles/legend/AREARISIKOMENENGAHTINGGI_12_0.png" /> Menengah Tinggi<br />'
        });
var format_ALPROAREARIRIKOMENENGAHTINGGI_13 = new ol.format.GeoJSON();
var features_ALPROAREARIRIKOMENENGAHTINGGI_13 = format_ALPROAREARIRIKOMENENGAHTINGGI_13.readFeatures(json_ALPROAREARIRIKOMENENGAHTINGGI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALPROAREARIRIKOMENENGAHTINGGI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALPROAREARIRIKOMENENGAHTINGGI_13.addFeatures(features_ALPROAREARIRIKOMENENGAHTINGGI_13);
var lyr_ALPROAREARIRIKOMENENGAHTINGGI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALPROAREARIRIKOMENENGAHTINGGI_13, 
                style: style_ALPROAREARIRIKOMENENGAHTINGGI_13,
                popuplayertitle: "ALPRO AREA RIRIKO MENENGAH TINGGI",
                interactive: true,
                title: '<img src="styles/legend/ALPROAREARIRIKOMENENGAHTINGGI_13.png" /> ALPRO AREA RIRIKO MENENGAH TINGGI'
            });
var format_PATAHANREKAHAN_14 = new ol.format.GeoJSON();
var features_PATAHANREKAHAN_14 = format_PATAHANREKAHAN_14.readFeatures(json_PATAHANREKAHAN_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATAHANREKAHAN_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATAHANREKAHAN_14.addFeatures(features_PATAHANREKAHAN_14);
var lyr_PATAHANREKAHAN_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATAHANREKAHAN_14, 
                style: style_PATAHANREKAHAN_14,
                popuplayertitle: "PATAHAN & REKAHAN",
                interactive: true,
                title: '<img src="styles/legend/PATAHANREKAHAN_14.png" /> PATAHAN & REKAHAN'
            });
var group_AREARISIKOMENENGAHTINGGI449Site = new ol.layer.Group({
                                layers: [lyr_AREARISIKOMENENGAHTINGGI_12,lyr_ALPROAREARIRIKOMENENGAHTINGGI_13,],
                                fold: "open",
                                title: "AREA RISIKO MENENGAH TINGGI (449 Site)"});
var group_AREARISIKOMENENGAHRENDAH2285Site = new ol.layer.Group({
                                layers: [lyr_AREARISIKOMENENGAHRENDAH_10,lyr_ALPROAREARISIKOMENENGAHRENDAH_11,],
                                fold: "open",
                                title: "AREA RISIKO MENENGAH RENDAH (2285 Site)"});
var group_AREARISIKORENDAH586SIte = new ol.layer.Group({
                                layers: [lyr_AREARISIKORENDAH_8,lyr_ALPROAREARISIKORENDAH_9,],
                                fold: "open",
                                title: "AREA RISIKO RENDAH (586 SIte)"});
var group_VISUALISASIGENERAL = new ol.layer.Group({
                                layers: [lyr_KLASIFIKASIASPEKTOPOGRAFI_2,lyr_KLASIFIKASIASPEKRISIKOBENCANA_3,lyr_KLASIFIKASIINDEKSRISIKO_4,lyr_INDEXRISIKO_5,lyr_KONTURJATIM_6,lyr_ALPROJATIMJuli2024_7,],
                                fold: "open",
                                title: "VISUALISASI GENERAL"});

lyr_OpenStreetMap_0.setVisible(true);lyr_MEGATHRUST_1.setVisible(true);lyr_KLASIFIKASIASPEKTOPOGRAFI_2.setVisible(true);lyr_KLASIFIKASIASPEKRISIKOBENCANA_3.setVisible(true);lyr_KLASIFIKASIINDEKSRISIKO_4.setVisible(true);lyr_INDEXRISIKO_5.setVisible(true);lyr_KONTURJATIM_6.setVisible(true);lyr_ALPROJATIMJuli2024_7.setVisible(true);lyr_AREARISIKORENDAH_8.setVisible(true);lyr_ALPROAREARISIKORENDAH_9.setVisible(true);lyr_AREARISIKOMENENGAHRENDAH_10.setVisible(true);lyr_ALPROAREARISIKOMENENGAHRENDAH_11.setVisible(true);lyr_AREARISIKOMENENGAHTINGGI_12.setVisible(true);lyr_ALPROAREARIRIKOMENENGAHTINGGI_13.setVisible(true);lyr_PATAHANREKAHAN_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MEGATHRUST_1,group_VISUALISASIGENERAL,group_AREARISIKORENDAH586SIte,group_AREARISIKOMENENGAHRENDAH2285Site,group_AREARISIKOMENENGAHTINGGI449Site,lyr_PATAHANREKAHAN_14];
lyr_MEGATHRUST_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KLASIFIKASIASPEKTOPOGRAFI_2.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'Curah Hujan (mm)': 'Curah Hujan (mm)', 'Keterangan': 'Keterangan', 'Poin': 'Poin', 'Kelembapan (%)': 'Kelembapan (%)', 'Poin_2': 'Poin_2', 'MDPL': 'MDPL', 'Poin_3': 'Poin_3', 'Index Topografi': 'Index Topografi', 'Klasifikasi Ketinggian Area': 'Klasifikasi Ketinggian Area', });
lyr_KLASIFIKASIASPEKRISIKOBENCANA_3.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'Jenis Tanah': 'Jenis Tanah', 'Poin_4': 'Poin_4', 'Total Bencana': 'Total Bencana', 'POIN_5': 'POIN_5', 'Risiko Bencana': 'Risiko Bencana', 'INDEX RISIKO BENCANA': 'INDEX RISIKO BENCANA', 'KLASIFIKASI RESIKO BENCANA': 'KLASIFIKASI RESIKO BENCANA', });
lyr_KLASIFIKASIINDEKSRISIKO_4.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'INDEX': 'INDEX', 'KLASIFIKASI INDEX RISIKO': 'KLASIFIKASI INDEX RISIKO', });
lyr_INDEXRISIKO_5.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'Curah Hujan (mm)': 'Curah Hujan (mm)', 'Keterangan': 'Keterangan', 'Poin': 'Poin', 'Kelembapan (%)': 'Kelembapan (%)', 'Poin_2': 'Poin_2', 'MDPL': 'MDPL', 'Poin_3': 'Poin_3', 'Jenis Tanah': 'Jenis Tanah', 'Poin_4': 'Poin_4', 'Total Bencana': 'Total Bencana', 'POIN_5': 'POIN_5', 'INDEX': 'INDEX', 'Risiko Bencana': 'Risiko Bencana', });
lyr_KONTURJATIM_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ALPROJATIMJuli2024_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Site_Name_Actual': 'Site_Name_Actual', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Site_ID_DMT': 'Site_ID_DMT', 'Site_ID_Tenant': 'Site_ID_Tenant', 'Project_ID_Actual': 'Project_ID_Actual', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Region': 'Region', 'Land_Area__m2_': 'Land_Area__m2_', 'Land_Lease_Period': 'Land_Lease_Period', 'Tower_Owner': 'Tower_Owner', 'Count_Number_Of_Tenant': 'Count_Number_Of_Tenant', 'Tower_Type': 'Tower_Type', 'Tower_Height': 'Tower_Height', 'Building_Height': 'Building_Height', 'Tower_Height_2': 'Tower_Height_2', 'Tower_Leg': 'Tower_Leg', 'Main_Power': 'Main_Power', 'Portofolio': 'Portofolio', 'Demography': 'Demography', 'Anchor_Tenant': 'Anchor_Tenant', 'Available_Ground_Space': 'Available_Ground_Space', 'Kategori_Tower': 'Kategori_Tower', 'FO_Ready_Not_': 'FO_Ready_Not_', });
lyr_AREARISIKORENDAH_8.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'INDEX': 'INDEX', 'KLASIFIKASI INDEX RISIKO': 'KLASIFIKASI INDEX RISIKO', });
lyr_ALPROAREARISIKORENDAH_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Site_Name_Actual': 'Site_Name_Actual', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Site_ID_DMT': 'Site_ID_DMT', 'Site_ID_Tenant': 'Site_ID_Tenant', 'Project_ID_Actual': 'Project_ID_Actual', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Region': 'Region', 'Land_Area__m2_': 'Land_Area__m2_', 'Land_Lease_Period': 'Land_Lease_Period', 'Tower_Owner': 'Tower_Owner', 'Count_Number_Of_Tenant': 'Count_Number_Of_Tenant', 'Tower_Type': 'Tower_Type', 'Tower_Height': 'Tower_Height', 'Building_Height': 'Building_Height', 'Tower_Height_2': 'Tower_Height_2', 'Tower_Leg': 'Tower_Leg', 'Main_Power': 'Main_Power', 'Portofolio': 'Portofolio', 'Demography': 'Demography', 'Anchor_Tenant': 'Anchor_Tenant', 'Available_Ground_Space': 'Available_Ground_Space', 'Kategori_Tower': 'Kategori_Tower', 'FO_Ready_Not_': 'FO_Ready_Not_', });
lyr_AREARISIKOMENENGAHRENDAH_10.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'INDEX': 'INDEX', 'KLASIFIKASI INDEX RISIKO': 'KLASIFIKASI INDEX RISIKO', });
lyr_ALPROAREARISIKOMENENGAHRENDAH_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Site_Name_Actual': 'Site_Name_Actual', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Site_ID_DMT': 'Site_ID_DMT', 'Site_ID_Tenant': 'Site_ID_Tenant', 'Project_ID_Actual': 'Project_ID_Actual', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Region': 'Region', 'Land_Area__m2_': 'Land_Area__m2_', 'Land_Lease_Period': 'Land_Lease_Period', 'Tower_Owner': 'Tower_Owner', 'Count_Number_Of_Tenant': 'Count_Number_Of_Tenant', 'Tower_Type': 'Tower_Type', 'Tower_Height': 'Tower_Height', 'Building_Height': 'Building_Height', 'Tower_Height_2': 'Tower_Height_2', 'Tower_Leg': 'Tower_Leg', 'Main_Power': 'Main_Power', 'Portofolio': 'Portofolio', 'Demography': 'Demography', 'Anchor_Tenant': 'Anchor_Tenant', 'Available_Ground_Space': 'Available_Ground_Space', 'Kategori_Tower': 'Kategori_Tower', 'FO_Ready_Not_': 'FO_Ready_Not_', });
lyr_AREARISIKOMENENGAHTINGGI_12.set('fieldAliases', {'fid': 'fid', 'Kota/Kab': 'Kota/Kab', 'INDEX': 'INDEX', 'KLASIFIKASI INDEX RISIKO': 'KLASIFIKASI INDEX RISIKO', });
lyr_ALPROAREARIRIKOMENENGAHTINGGI_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Site_Name_Actual': 'Site_Name_Actual', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Site_ID_DMT': 'Site_ID_DMT', 'Site_ID_Tenant': 'Site_ID_Tenant', 'Project_ID_Actual': 'Project_ID_Actual', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Region': 'Region', 'Land_Area__m2_': 'Land_Area__m2_', 'Land_Lease_Period': 'Land_Lease_Period', 'Tower_Owner': 'Tower_Owner', 'Count_Number_Of_Tenant': 'Count_Number_Of_Tenant', 'Tower_Type': 'Tower_Type', 'Tower_Height': 'Tower_Height', 'Building_Height': 'Building_Height', 'Tower_Height_2': 'Tower_Height_2', 'Tower_Leg': 'Tower_Leg', 'Main_Power': 'Main_Power', 'Portofolio': 'Portofolio', 'Demography': 'Demography', 'Anchor_Tenant': 'Anchor_Tenant', 'Available_Ground_Space': 'Available_Ground_Space', 'Kategori_Tower': 'Kategori_Tower', 'FO_Ready_Not_': 'FO_Ready_Not_', });
lyr_PATAHANREKAHAN_14.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', });
lyr_MEGATHRUST_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KLASIFIKASIASPEKTOPOGRAFI_2.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Curah Hujan (mm)': 'TextEdit', 'Keterangan': 'TextEdit', 'Poin': 'TextEdit', 'Kelembapan (%)': 'TextEdit', 'Poin_2': 'TextEdit', 'MDPL': 'TextEdit', 'Poin_3': 'TextEdit', 'Index Topografi': 'TextEdit', 'Klasifikasi Ketinggian Area': 'TextEdit', });
lyr_KLASIFIKASIASPEKRISIKOBENCANA_3.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Jenis Tanah': 'TextEdit', 'Poin_4': 'TextEdit', 'Total Bencana': 'TextEdit', 'POIN_5': 'TextEdit', 'Risiko Bencana': 'TextEdit', 'INDEX RISIKO BENCANA': 'TextEdit', 'KLASIFIKASI RESIKO BENCANA': 'TextEdit', });
lyr_KLASIFIKASIINDEKSRISIKO_4.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'INDEX': 'TextEdit', 'KLASIFIKASI INDEX RISIKO': 'TextEdit', });
lyr_INDEXRISIKO_5.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Curah Hujan (mm)': 'TextEdit', 'Keterangan': 'TextEdit', 'Poin': 'TextEdit', 'Kelembapan (%)': 'TextEdit', 'Poin_2': 'TextEdit', 'MDPL': 'TextEdit', 'Poin_3': 'TextEdit', 'Jenis Tanah': 'TextEdit', 'Poin_4': 'TextEdit', 'Total Bencana': 'TextEdit', 'POIN_5': 'TextEdit', 'INDEX': 'TextEdit', 'Risiko Bencana': 'TextEdit', });
lyr_KONTURJATIM_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ALPROJATIMJuli2024_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Site_Name_Actual': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Site_ID_DMT': 'TextEdit', 'Site_ID_Tenant': 'TextEdit', 'Project_ID_Actual': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Region': 'TextEdit', 'Land_Area__m2_': 'Range', 'Land_Lease_Period': 'Range', 'Tower_Owner': 'TextEdit', 'Count_Number_Of_Tenant': 'Range', 'Tower_Type': 'TextEdit', 'Tower_Height': 'Range', 'Building_Height': 'Range', 'Tower_Height_2': 'Range', 'Tower_Leg': 'Range', 'Main_Power': 'TextEdit', 'Portofolio': 'TextEdit', 'Demography': 'TextEdit', 'Anchor_Tenant': 'TextEdit', 'Available_Ground_Space': 'TextEdit', 'Kategori_Tower': 'TextEdit', 'FO_Ready_Not_': 'Range', });
lyr_AREARISIKORENDAH_8.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'INDEX': 'TextEdit', 'KLASIFIKASI INDEX RISIKO': 'TextEdit', });
lyr_ALPROAREARISIKORENDAH_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Site_Name_Actual': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Site_ID_DMT': 'TextEdit', 'Site_ID_Tenant': 'TextEdit', 'Project_ID_Actual': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Region': 'TextEdit', 'Land_Area__m2_': 'Range', 'Land_Lease_Period': 'Range', 'Tower_Owner': 'TextEdit', 'Count_Number_Of_Tenant': 'Range', 'Tower_Type': 'TextEdit', 'Tower_Height': 'Range', 'Building_Height': 'Range', 'Tower_Height_2': 'Range', 'Tower_Leg': 'Range', 'Main_Power': 'TextEdit', 'Portofolio': 'TextEdit', 'Demography': 'TextEdit', 'Anchor_Tenant': 'TextEdit', 'Available_Ground_Space': 'TextEdit', 'Kategori_Tower': 'TextEdit', 'FO_Ready_Not_': 'Range', });
lyr_AREARISIKOMENENGAHRENDAH_10.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'INDEX': 'TextEdit', 'KLASIFIKASI INDEX RISIKO': 'TextEdit', });
lyr_ALPROAREARISIKOMENENGAHRENDAH_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Site_Name_Actual': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Site_ID_DMT': 'TextEdit', 'Site_ID_Tenant': 'TextEdit', 'Project_ID_Actual': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Region': 'TextEdit', 'Land_Area__m2_': 'Range', 'Land_Lease_Period': 'Range', 'Tower_Owner': 'TextEdit', 'Count_Number_Of_Tenant': 'Range', 'Tower_Type': 'TextEdit', 'Tower_Height': 'Range', 'Building_Height': 'Range', 'Tower_Height_2': 'Range', 'Tower_Leg': 'Range', 'Main_Power': 'TextEdit', 'Portofolio': 'TextEdit', 'Demography': 'TextEdit', 'Anchor_Tenant': 'TextEdit', 'Available_Ground_Space': 'TextEdit', 'Kategori_Tower': 'TextEdit', 'FO_Ready_Not_': 'Range', });
lyr_AREARISIKOMENENGAHTINGGI_12.set('fieldImages', {'fid': 'TextEdit', 'Kota/Kab': 'TextEdit', 'INDEX': 'TextEdit', 'KLASIFIKASI INDEX RISIKO': 'TextEdit', });
lyr_ALPROAREARIRIKOMENENGAHTINGGI_13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Site_Name_Actual': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Site_ID_DMT': 'TextEdit', 'Site_ID_Tenant': 'TextEdit', 'Project_ID_Actual': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Region': 'TextEdit', 'Land_Area__m2_': 'Range', 'Land_Lease_Period': 'Range', 'Tower_Owner': 'TextEdit', 'Count_Number_Of_Tenant': 'Range', 'Tower_Type': 'TextEdit', 'Tower_Height': 'Range', 'Building_Height': 'Range', 'Tower_Height_2': 'Range', 'Tower_Leg': 'Range', 'Main_Power': 'TextEdit', 'Portofolio': 'TextEdit', 'Demography': 'TextEdit', 'Anchor_Tenant': 'TextEdit', 'Available_Ground_Space': 'TextEdit', 'Kategori_Tower': 'TextEdit', 'FO_Ready_Not_': 'Range', });
lyr_PATAHANREKAHAN_14.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'Id': 'TextEdit', 'LCLASSSTR': 'TextEdit', 'Type': 'TextEdit', 'Mmax_d': 'TextEdit', 'Sliprate_1': 'TextEdit', 'Fault_Name': 'TextEdit', 'Segment_Na': 'TextEdit', 'LENGHT': 'TextEdit', 'Name': 'TextEdit', 'Segment': 'TextEdit', 'Fault': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'CLASSSTR': 'TextEdit', 'Seg_Name': 'TextEdit', 'lenght_km_': 'TextEdit', 'lenght_km': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'GM_LAYER_1': 'TextEdit', 'GM_TYPE_1': 'TextEdit', 'LCLASSSTR_': 'TextEdit', 'Fault_Na_1': 'TextEdit', 'Segment__1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'name_group': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_MEGATHRUST_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KLASIFIKASIASPEKTOPOGRAFI_2.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'Curah Hujan (mm)': 'no label', 'Keterangan': 'no label', 'Poin': 'no label', 'Kelembapan (%)': 'no label', 'Poin_2': 'no label', 'MDPL': 'no label', 'Poin_3': 'no label', 'Index Topografi': 'no label', 'Klasifikasi Ketinggian Area': 'no label', });
lyr_KLASIFIKASIASPEKRISIKOBENCANA_3.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'Jenis Tanah': 'no label', 'Poin_4': 'no label', 'Total Bencana': 'no label', 'POIN_5': 'no label', 'Risiko Bencana': 'no label', 'INDEX RISIKO BENCANA': 'no label', 'KLASIFIKASI RESIKO BENCANA': 'no label', });
lyr_KLASIFIKASIINDEKSRISIKO_4.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'INDEX': 'no label', 'KLASIFIKASI INDEX RISIKO': 'no label', });
lyr_INDEXRISIKO_5.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'Curah Hujan (mm)': 'no label', 'Keterangan': 'no label', 'Poin': 'no label', 'Kelembapan (%)': 'no label', 'Poin_2': 'no label', 'MDPL': 'no label', 'Poin_3': 'no label', 'Jenis Tanah': 'no label', 'Poin_4': 'no label', 'Total Bencana': 'no label', 'POIN_5': 'no label', 'INDEX': 'no label', 'Risiko Bencana': 'no label', });
lyr_KONTURJATIM_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_ALPROJATIMJuli2024_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Site_Name_Actual': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Site_ID_DMT': 'no label', 'Site_ID_Tenant': 'no label', 'Project_ID_Actual': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Region': 'no label', 'Land_Area__m2_': 'no label', 'Land_Lease_Period': 'no label', 'Tower_Owner': 'no label', 'Count_Number_Of_Tenant': 'no label', 'Tower_Type': 'no label', 'Tower_Height': 'no label', 'Building_Height': 'no label', 'Tower_Height_2': 'no label', 'Tower_Leg': 'no label', 'Main_Power': 'no label', 'Portofolio': 'no label', 'Demography': 'no label', 'Anchor_Tenant': 'no label', 'Available_Ground_Space': 'no label', 'Kategori_Tower': 'no label', 'FO_Ready_Not_': 'no label', });
lyr_AREARISIKORENDAH_8.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'INDEX': 'no label', 'KLASIFIKASI INDEX RISIKO': 'no label', });
lyr_ALPROAREARISIKORENDAH_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Site_Name_Actual': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Site_ID_DMT': 'no label', 'Site_ID_Tenant': 'no label', 'Project_ID_Actual': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Region': 'no label', 'Land_Area__m2_': 'no label', 'Land_Lease_Period': 'no label', 'Tower_Owner': 'no label', 'Count_Number_Of_Tenant': 'no label', 'Tower_Type': 'no label', 'Tower_Height': 'no label', 'Building_Height': 'no label', 'Tower_Height_2': 'no label', 'Tower_Leg': 'no label', 'Main_Power': 'no label', 'Portofolio': 'no label', 'Demography': 'no label', 'Anchor_Tenant': 'no label', 'Available_Ground_Space': 'no label', 'Kategori_Tower': 'no label', 'FO_Ready_Not_': 'no label', });
lyr_AREARISIKOMENENGAHRENDAH_10.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'INDEX': 'no label', 'KLASIFIKASI INDEX RISIKO': 'no label', });
lyr_ALPROAREARISIKOMENENGAHRENDAH_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Site_Name_Actual': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Site_ID_DMT': 'no label', 'Site_ID_Tenant': 'no label', 'Project_ID_Actual': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Region': 'no label', 'Land_Area__m2_': 'no label', 'Land_Lease_Period': 'no label', 'Tower_Owner': 'no label', 'Count_Number_Of_Tenant': 'no label', 'Tower_Type': 'no label', 'Tower_Height': 'no label', 'Building_Height': 'no label', 'Tower_Height_2': 'no label', 'Tower_Leg': 'no label', 'Main_Power': 'no label', 'Portofolio': 'no label', 'Demography': 'no label', 'Anchor_Tenant': 'no label', 'Available_Ground_Space': 'no label', 'Kategori_Tower': 'no label', 'FO_Ready_Not_': 'no label', });
lyr_AREARISIKOMENENGAHTINGGI_12.set('fieldLabels', {'fid': 'no label', 'Kota/Kab': 'no label', 'INDEX': 'no label', 'KLASIFIKASI INDEX RISIKO': 'no label', });
lyr_ALPROAREARIRIKOMENENGAHTINGGI_13.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Site_Name_Actual': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Site_ID_DMT': 'no label', 'Site_ID_Tenant': 'no label', 'Project_ID_Actual': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Region': 'no label', 'Land_Area__m2_': 'no label', 'Land_Lease_Period': 'no label', 'Tower_Owner': 'no label', 'Count_Number_Of_Tenant': 'no label', 'Tower_Type': 'no label', 'Tower_Height': 'no label', 'Building_Height': 'no label', 'Tower_Height_2': 'no label', 'Tower_Leg': 'no label', 'Main_Power': 'no label', 'Portofolio': 'no label', 'Demography': 'no label', 'Anchor_Tenant': 'no label', 'Available_Ground_Space': 'no label', 'Kategori_Tower': 'no label', 'FO_Ready_Not_': 'no label', });
lyr_PATAHANREKAHAN_14.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', });
lyr_PATAHANREKAHAN_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});