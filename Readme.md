# Assembly Ai wrapper 
## Installation
```bash
npm install assemblyai
```
## Usage with Typescript
```typescript
import TranscribeAudioToText from "TranscribeAudioToText";
```

## What you need to use this wrapper
- [An Assembly AI account](https://www.assemblyai.com/) - Sign up for free!
- An API key
- An audio file to upload


## Demo - Test using the following code
```typescript
import TranscribeAudioToText from "TranscribeAudioToText";
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
```

## Or run the following commands to test
```bash
npm install && npm run build && npm run start
```
 That's it! You're ready to go!
