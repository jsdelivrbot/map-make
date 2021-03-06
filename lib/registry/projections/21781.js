/**
 * EPSG:21781
 * Swiss Oblique Mercator, Bessel ellipsoid
 */

var projCode = 'EPSG:21781';
var projDef = '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs';

import common from './common.js';
common.addProjection(projCode, projDef);

export default {
  projCode: projCode
};
