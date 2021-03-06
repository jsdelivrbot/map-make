/**
 * Portuguese government Geoportal WMS
 * Code: pt/dgt/sc200
 * EPSG:3763
 * FIXME attribution fixed in English
 */

import ol from '../../../../ol.js';
import proj from '../../../projections/3763.js';

var extent = [-170000,-325000,180000,290000];
var resolutions = [2382.8125, 1191.40625, 595.703125, 297.8515625, 148.92578125, 74.462890625, 37.2314453125, 18.61572265625, 9.307861328125, 4.6539306640625, 2.32696533203125, 1.163482666015625, 0.5817413330078125];

var layerNames = ['sc2500k','sc2500k','sc1500k','sc1500k','sc1500k','sc500k','sc200k','sc200k','sc100k','sc100k','sc50k','sc50k'];
var baseUrl = 'http://mapas.dgterritorio.pt/wms/';

var sourceOptions = {
  url: 'http://mapas.dgterritorio.pt/viz/tilecache.py?',
  params: {
    'LAYERS': 'sc200k' // initial value; see view resolution below
  },
  attributions: 'Topo maps &copy; <a target="_blank" href="http://mapas.dgterritorio.pt/">DGT</a>',
  extent: extent,
  projection: proj.projCode,
  // needs tilegrid otherwise uses inappropriate global grid
  tileGrid: new ol.tilegrid.TileGrid({
    extent: extent,
    origin: [-2094936.000000,-1145454],
    resolutions: resolutions
  })
};

var layer = new ol.layer.Tile({
  source: new ol.source.TileWMS(sourceOptions),
  id: 'DGT (PT)'
});

function setUrl(zoom) {
  layer.get('source').updateParams({LAYERS: layerNames[zoom]});
  layer.get('source').setUrl(baseUrl + layerNames[zoom] + '?');
}

export default {
  getLayers: function(options) {
    if (options) {
      if (options.zoom) {
        // set layers param initially if zoom set (not default)
        // needed because change:resolution isn't fired on initial set
        setUrl(options.zoom);
      }
    }
    return [layer];
  },
  extent: extent,
  projCode: proj.projCode,
  resolutions: resolutions//,
  // listener fired whenever view resolution changes
  // viewEvent: {
  //   type: 'change:resolution',
  //   func: function(evt) {
  //     // LAYERS param on source has to be set based on resolution
  //     setUrl(resolutions.indexOf(evt.target.get('resolution')));
  //   }
  // }
};
