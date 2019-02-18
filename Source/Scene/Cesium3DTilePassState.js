define([
        '../Core/defaultValue'
    ], function(
        defaultValue) {
    'use strict';

    /**
     * The state for a 3D Tiles update pass.
     *
     * @private
     */
    function Cesium3DTilePassState(options) {
        options = defaultValue(options, defaultValue.EMPTY_OBJECT);
        /**
         * An array of rendering commands to use instead of {@link FrameState.commandList} for the current pass.
         *
         * @type {DrawCommand[]}
         */
        this.commandList = options.commandList;

        /**
         * A camera to use instead of {@link FrameState.camera} for the current pass.
         *
         * @type {Camera}
         */
        this.camera = options.camera;

        /**
         * A culling volume to use instead of {@link FrameState.cullingVolume} for the current pass.
         *
         * @type {CullingVolume}
         */
        this.cullingVolume = options.cullingVolume;

        /**
         * The pass. If undefined, the pass is set to {@link Cesium3DTilePass.RENDER} or {@link Cesium3DTilePass.PICK} depending
         * on the pass in {@link FrameState}.
         *
         * @type {Cesium3DTilePass}
         */
        this.pass = options.pass;

        /**
         * Whether commands inserted during the pass should be ignored. Used for passes that prefetch tiles rather
         * than render them.
         *
         * @type {Boolean}
         * @default false
         */
        this.ignoreCommands = options.ignoreCommands;

        /**
         * A read-only property that indicates whether the pass is ready, i.e. all tiles needed by the pass are loaded.
         *
         * @type {Boolean}
         * @readonly
         * @default false
         */
        this.ready = false;
    }

    return Cesium3DTilePassState;
});