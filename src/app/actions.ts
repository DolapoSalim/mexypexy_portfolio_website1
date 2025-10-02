'use server';

import { analyzeMarketingTextTone, type AnalyzeMarketingTextToneOutput } from '@/ai/flows/analyze-marketing-text-tone';
import { z } from 'zod';

const schema = z.object({
  text: z.string().min(10, { message: 'Please enter at least 10 characters for an effective analysis.' }),
});

export type FormState = {
  message: string;
  analysis: AnalyzeMarketingTextToneOutput | null;
}

export async function analyzeToneAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    text: formData.get('text'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors[0].message,
      analysis: null,
    };
  }

  try {
    const analysis = await analyzeMarketingTextTone({ text: validatedFields.data.text });
    if (!analysis) {
        return {
            message: 'Analysis failed to produce a result. Please try again.',
            analysis: null,
        }
    }
    return {
      message: 'Analysis successful.',
      analysis: analysis,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred during analysis. Please try again later.',
      analysis: null,
    };
  }
}
