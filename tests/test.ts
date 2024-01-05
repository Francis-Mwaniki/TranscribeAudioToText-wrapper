import TranscribeAudioToText from "../src/package";
import * as dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.ASSEMBLY_API_KEY!; // User provides their API key
const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

const customAI = new TranscribeAudioToText(apiKey);

(async () => {
  try {
    const transcript = await customAI.createTranscript(audioUrl);
    console.log(transcript);
  } catch (error: any) {
    console.error(error.message);
  }
})();
