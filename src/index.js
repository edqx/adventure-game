import readline from "readline"

import display from "./utils/display.js"
import Interface from "./Interface.js"

import runtime_config from "./runtime.cfg.js"

(async function _main_thread() {
    display.clrScreen();
    
    const interface = new Interface(readline);


})();
