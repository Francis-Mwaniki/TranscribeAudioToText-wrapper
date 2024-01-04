import { AssemblyAI,Transcript } from 'assemblyai';

class TranscribeAudioToText {
  private client: AssemblyAI;

  constructor(apiKey: string) {
    this.client = new AssemblyAI({ apiKey });
  }

  async createTranscript(audioUrl: string): Promise<string> {
    const config = {
      audio_url: audioUrl
    };

    try {
        if (audioUrl === null || audioUrl === undefined) {
          throw new Error('Audio URL is null or undefined');
        }
        const transcript: Transcript = await this.client.transcripts.create(config);
        if (transcript.text !== null && transcript.text !== undefined) {
           // Splitting the text into sentences at every two 2 sentences (.) and adding a line break after every second sentence
        let paragraphedText = '';
        let sentenceCount = 0;
        const sentences = transcript.text.split('.');
        sentences.forEach((sentence) => {
          if (sentenceCount === 2) {
            paragraphedText += `${sentence}.\n\n`;
            sentenceCount = 0;
          } else {
            paragraphedText += `${sentence}.`;
            sentenceCount += 1;
          }
        });
        

        return paragraphedText;
        } else {
          throw new Error('Transcript text is null or undefined');
        }
      } catch (error) {
        throw new Error(`Error occurred: ${error}`);
      }
  }
}

export default TranscribeAudioToText;
