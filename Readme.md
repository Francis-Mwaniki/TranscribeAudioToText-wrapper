# Assembly Ai wrapper 

<!-- demo -->
[DEMO WITH NEXTJS](https://next-transcriber.vercel.app)
## Installation
```bash
npm install franc-audio-to-text
```
## Usage with Typescript
```typescript
import TranscribeAudioToText from "franc-audio-to-text";
```

## What you need to use this wrapper
- [An Assembly AI account](https://www.assemblyai.com/) - Sign up for free!
- An API key
- An audio file to upload


## Demo - Test using the following code
```typescript
import TranscribeAudioToText from "franc-audio-to-text";
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

# Changelog for franc-audio-to-text

## [2.0.0] - 2024-01-04 (Current version)

### Removed

- **Removed 'natural' package**: Due to persistent bugs causing issues with language detection, the 'natural' package dependency has been removed from the project.




## Hint and note
 this wrapper supports only typescript
 ignore typescript warning with `natural package`

 That's it! You're ready to go!


## support or contact
Having trouble with this wrapper?
please contact me at <!-- francismwaniki630@gmail.com -->
[E-mail me](mailto:francismwaniki630@gmail.com)

