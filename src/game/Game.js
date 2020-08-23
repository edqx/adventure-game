import EventEmitter from "events"

import Player from "./Player.js"
import State from "./State.js"

/**
 * @typedef InventorySave
 */

/**
 * @typedef PlayerSave
 * @property {InventorySave} inventory The inventory of the player.
 */

/**
 * @typedef GameSave
 * @property {any} state The state of the game.
 * @property {PlayerSave} player The main player of the game.
 */

/**
 * Represents a game of the untitled aventure game.
 * @extends {EventEmitter}
 */
export default class Game extends EventEmitter {
    /**
     * Instantiate a game of the untitled adventure game.
     * @param {GameSave} save The save to load.
     */
    constructor(save) {
        super();
        
        /**
         * The state of the game.
         * @type {State}
         */
        this.state = new State(this, save.state || {});

        /**
         * The main player of the game.
         * @type {Player}
         */
        this.player = save.player ? new Player(this, save.player) : null;
    }

    begin() {

    }
}