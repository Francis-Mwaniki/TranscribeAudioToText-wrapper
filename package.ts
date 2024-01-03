import { AssemblyAI,Transcript } from 'assemblyai';
import * as natural from "natural"
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
           // Tokenizing the transcript into sentences using natural's SentenceTokenizer
        const tokenizer = new natural.SentenceTokenizer();
        const sentences = tokenizer.tokenize(transcript.text);

        // Creating paragraphs every two sentences
        let paragraphedText = '';
        for (let i = 0; i < sentences.length; i++) {
          paragraphedText += sentences[i];
          if ((i + 1) % 2 === 0) {
            paragraphedText += '\n\n\n'; // Adding two line breaks after every second sentence
          } else {
            paragraphedText += '  '; // Adding a space after every first sentence in the pair
          }
        }

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
