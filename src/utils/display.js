/**
 * @typedef WindowSize
 * @property {Number} rows
 * @property {Number} columns
 */

/**
 * Get the size of the terminal in rows and columns.
 * @returns {WindowSize}
 */
function getWindowSize() {
    const sz = process.stdout.getWindowSize();

    return {
        columns: sz[0],
        rows: sz[1]
    }
}

/**
 * Flush the contents of the screen to make room for the next display.
 */
export function clrScreen() {
    const winsz = getWindowSize();

    for (let i = 0; i < winsz.rows.length; i++) {
        console.log("\n");
    }
}

export default {
    clrScreen
}