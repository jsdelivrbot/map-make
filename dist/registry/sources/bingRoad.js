
/**
 * Bing Road
 * FIXME: attribution and id fixed in English
 */
var ol=require("ol");module.exports={getLayers:function(e){return[new ol.layer.Tile({preload:1/0,source:new ol.source.BingMaps({key:e.apikey,imagerySet:"Road"}),id:"Bing Road"})]}};
//# sourceMappingURL=dist/registry/sources/bingRoad.js.map