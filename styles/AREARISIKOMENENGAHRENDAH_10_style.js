var size = 0;
var placement = 'point';
function categories_AREARISIKOMENENGAHRENDAH_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Menengah Rendah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(253,191,111,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AREARISIKOMENENGAHRENDAH_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("KLASIFIKASI INDEX RISIKO");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Cambria\', sans-serif";
    var labelFill = "#003345";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.8;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Kota/Kab") !== null) {
        labelText = String(feature.get("Kota/Kab"));
    }
    
var style = categories_AREARISIKOMENENGAHRENDAH_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
