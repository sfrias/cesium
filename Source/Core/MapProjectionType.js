define([
        './freezeObject'
    ], function(
        freezeObject) {
    'use strict';

    /**
     * MapProjectionType defines the path that should be taken connecting vertices.
     *
     * @exports MapProjectionType
     * @private
     */
    var MapProjectionType = {
        /**
         * Corresponds with GeographicProjection.
         *
         * @type {Number}
         * @constant
         */
        GEOGRAPHIC : 0,

        /**
         * Corresponds with WebMercatorProjection.
         *
         * @type {Number}
         * @constant
         */
        WEBMERCATOR : 1,

        /**
         * Corresponds with Proj4Projection
         *
         * @type {Number}
         * @constant
         */
        PROJ4 : 2,

        /**
         * Corresponds with CustomProjection
         *
         * @type {Number}
         * @constant
         */
        CUSTOM : 3
    };

    return freezeObject(MapProjectionType);
});