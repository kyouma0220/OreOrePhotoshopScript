var canvasWidth = activeDocument.width;
var canvasHeight = activeDocument.height;
var layer = activeDocument.activeLayer;
var layerX = layer.bounds[0];
var layerY = layer.bounds[1];
var layerWidth = layer.bounds[2] - layerX;
var layerHeight = layer.bounds[3] - layerY;
var rateX = Math.ceil((canvasWidth / layerWidth) * 10000) / 100;
var rateY = Math.ceil((canvasHeight / layerHeight) * 10000) / 100;

// レイヤーをリサイズ
layer.resize(rateX, rateY);

layerX = layer.bounds[0];
layerY = layer.bounds[1];
layerWidth = layer.bounds[2] - layerX;
layerHeight = layer.bounds[3] - layerY;

// 中央寄せ
layer.translate(((canvasWidth - layerWidth) / 2) - layerX, ((canvasHeight - layerHeight) / 2) - layerY);