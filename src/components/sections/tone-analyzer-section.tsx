'use client';

import { useState } from 'react';
import { analyzeToneAction, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Lightbulb, BarChart3, Smile } from 'lucide-react';

const initialState: FormState = {
  message: '',
  analysis: null,
};

export function ToneAnalyzerSection() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setState(initialState);

    const formData = new FormData(event.currentTarget);
    const result = await analyzeToneAction(initialState, formData);

    setState(result);
    setIsLoading(false);
  };

  return (
    <section id="tool" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Tone Analyzer Tool
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Curious about your marketing copy's tone? Paste it below to get an AI-powered analysis and suggestions for improvement.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <form onSubmit={handleFormSubmit}>
            <Card>
              <CardContent className="p-6">
                <Textarea
                  name="text"
                  placeholder="Paste your marketing text here..."
                  className="min-h-[150px] text-base"
                  required
                />
                <Button type="submit" className="mt-4 w-full" size="lg" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  {isLoading ? 'Analyzing...' : 'Analyze Tone'}
                </Button>
              </CardContent>
            </Card>
          </form>

          {state.message && state.message !== 'Analysis successful.' && !state.analysis && (
            <p className="mt-4 text-center text-destructive">{state.message}</p>
          )}

          {state.analysis && (
            <div className="mt-8 grid gap-6 md:grid-cols-1">
              <h3 className="font-headline text-2xl font-bold text-center">Analysis Results</h3>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Smile className="w-6 h-6 text-primary" />
                  <CardTitle>Sentiment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg capitalize">{state.analysis.sentiment}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{state.analysis.statistics}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <CardTitle>Areas for Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{state.analysis.areasForImprovement}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
