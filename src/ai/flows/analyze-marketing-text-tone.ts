'use server';

/**
 * @fileOverview An AI agent that analyzes the tone of marketing text and provides suggestions for improvement.
 *
 * - analyzeMarketingTextTone - A function that analyzes the marketing text tone.
 * - AnalyzeMarketingTextToneInput - The input type for the analyzeMarketingTextTone function.
 * - AnalyzeMarketingTextToneOutput - The return type for the analyzeMarketingTextTone function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMarketingTextToneInputSchema = z.object({
  text: z
    .string()
    .describe('The marketing text to analyze.'),
});
export type AnalyzeMarketingTextToneInput = z.infer<typeof AnalyzeMarketingTextToneInputSchema>;

const AnalyzeMarketingTextToneOutputSchema = z.object({
  sentiment: z
    .string()
    .describe('The overall sentiment of the text (e.g., positive, negative, neutral).'),
  areasForImprovement: z
    .string()
    .describe('Specific suggestions for improving the tone of the text.'),
  statistics: z
    .string()
    .describe('Statistics about the text, such as emotional tone, areas of focus, etc.'),
});
export type AnalyzeMarketingTextToneOutput = z.infer<typeof AnalyzeMarketingTextToneOutputSchema>;

export async function analyzeMarketingTextTone(
  input: AnalyzeMarketingTextToneInput
): Promise<AnalyzeMarketingTextToneOutput> {
  return analyzeMarketingTextToneFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeMarketingTextTonePrompt',
  input: {schema: AnalyzeMarketingTextToneInputSchema},
  output: {schema: AnalyzeMarketingTextToneOutputSchema},
  prompt: `You are an expert marketing copy editor.

You will analyze the provided marketing text and provide an analysis of the text's tone, including sentiment, statistics, and areas for improvement, so that the user can refine the text to achieve the desired marketing impact.

Marketing Text: {{{text}}}`,
});

const analyzeMarketingTextToneFlow = ai.defineFlow(
  {
    name: 'analyzeMarketingTextToneFlow',
    inputSchema: AnalyzeMarketingTextToneInputSchema,
    outputSchema: AnalyzeMarketingTextToneOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
