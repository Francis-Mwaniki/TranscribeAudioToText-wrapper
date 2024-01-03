"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assemblyai_1 = require("assemblyai");
class AssemblyTextAI {
    constructor(apiKey) {
        this.client = new assemblyai_1.AssemblyAI({ apiKey });
    }
    createTranscript(audioUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                audio_url: audioUrl
            };
            try {
                const transcript = yield this.client.transcripts.create(config);
                if (transcript.text !== null && transcript.text !== undefined) {
                    return transcript.text;
                }
                else {
                    throw new Error('Transcript text is null or undefined');
                }
            }
            catch (error) {
                throw new Error(`Error occurred: ${error}`);
            }
        });
    }
}
exports.default = AssemblyTextAI;
