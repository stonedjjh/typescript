"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
    let canales;
    (function (canales) {
        canales[canales["rctv"] = 2] = "rctv";
        canales[canales["Venevison"] = 4] = "Venevison";
        canales[canales["tve"] = 5] = "tve";
        canales[canales["Televen"] = 10] = "Televen";
    })(canales || (canales = {}));
})();
