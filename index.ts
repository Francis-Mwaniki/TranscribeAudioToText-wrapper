import { AssemblyAI } from 'assemblyai'; // Importing AssemblyAI and Config types
import * as dotenv from 'dotenv'; // Importing dotenv to load environment variables
dotenv.config(); // Loading environment variables
const apiKey: string = process.env.ASSEMBLY_API_KEY!; // Getting API key from environment variables
const client = new AssemblyAI({
  apiKey: apiKey
});

const audioUrl: string =
  'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

const config = {
  audio_url: audioUrl
};

const run = async () => {
  try {
    const transcript = await client.transcripts.create(config);
    console.log(transcript.text);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

run();
