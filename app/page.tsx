'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"BeHere.health","url":"https://behere-health.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"BeHere.health","url":"https://behere-health.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is this another 'think positive' approach that doesn't get how sick I am?","acceptedAnswer":{"@type":"Answer","text":"No. Your symptoms are real. This is about stopping the fight-or-flight response that keeps your nervous system in overdrive, not pretending you're fine."}},{"@type":"Question","name":"How is this different from therapy apps?","acceptedAnswer":{"@type":"Answer","text":"Generic therapy tools assume you can think your way through problems. BeHere.health was built for post-viral bodies that don't respond like healthy nervous systems do."}},{"@type":"Question","name":"What does 'acceptance' actually mean when I'm having a crash day?","acceptedAnswer":{"@type":"Answer","text":"Acceptance means stopping the fight against what's happening right now. It's not giving up on getting better. It's recognizing that resisting a crash makes it worse and last longer."}},{"@type":"Question","name":"Can I use this when I'm too sick to type or read?","acceptedAnswer":{"@type":"Answer","text":"Yes. BeHere.health is voice-first, designed for the days when you can barely sit up. You speak, the guide listens. No typing or reading required."}},{"@type":"Question","name":"How much does this cost?","acceptedAnswer":{"@type":"Answer","text":"We know medical expenses add up and many Long COVID patients can't work. That's why there's a free trial session with no payment required upfront."}},{"@type":"Question","name":"Does this replace my medical care or claim to cure anything?","acceptedAnswer":{"@type":"Answer","text":"No. This is mindset support that works alongside your medical care, not instead of it. We don't diagnose, treat, or make medical claims."}},{"@type":"Question","name":"What if I've tried mindset work before and it didn't help?","acceptedAnswer":{"@type":"Answer","text":"Most approaches weren't designed for nervous systems dealing with post-viral dysfunction. BeHere.health meets you exactly where you are, even if that's barely functional."}},{"@type":"Question","name":"How can mindset work affect physical symptoms?","acceptedAnswer":{"@type":"Answer","text":"When your nervous system is stuck in fight-or-flight, that stress response perpetuates symptoms. Learning to shift out of defensive mode can reduce the nervous system's contribution to symptom severity."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            BeHere.health
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/comparisons" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <div className="bg-background-elevated">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Stop fighting your symptoms
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Real-time support for patients whose symptoms change hour by hour, when you're too tired to fight anymore.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Start a session`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>
        </div>

        {/* Problem */}
        <section aria-label="Problem" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-4">
            Generic therapy wasn't built for bodies that betray you daily
          </h2>
          <p className="text-text-secondary text-center leading-relaxed">
            You're exhausted from fighting symptoms that change hour by hour. Traditional therapy doesn't understand post-viral reality. Voice-first coaching meets you exactly where you are today — speak your struggle, get real-time guidance designed for crash days.
          </p>
        </section>

        <div className="bg-background-elevated">
        {/* Features */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Built for the days when everything else feels impossible</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Voice unlocks what typing can\'t reach" className="shadow-lg bg-background-elevated rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Voice unlocks what typing can't reach</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Speaking accesses emotions typing keeps buried. When you voice what a crash day actually costs you, something shifts that journaling alone can't touch.</p>
          </section>
          <section aria-label="Guides who know your specific reality" className="shadow-lg bg-background-elevated rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Guides who know your specific reality</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Each conversation is led by advisors who understand post-viral syndrome. No explaining crash cycles or symptom unpredictability. They already know.</p>
          </section>
          <section aria-label="Real-time practice guidance" className="shadow-lg bg-background-elevated rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Real-time practice guidance</h3>
            <p className="text-text-secondary text-sm leading-relaxed">No more trying to remember techniques from a video. Your guide walks you through each step as it happens, adjusting when brain fog makes the standard version impossible.</p>
          </section>
          </div>
        </section>
        </div>

        {/* How It Works */}
        <section aria-label="How it works" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">How it works when everything else feels too hard</h2>
          <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-1">Speak how you feel</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Tell us how you're feeling today.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-1">Get the right type of support for how you're feeling right now</h3>
              <p className="text-text-secondary text-sm leading-relaxed">You're connected to the therapeutic guide that fits this moment.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-1">Work through it together</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Your guide walks you through it in real time.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-1">Stop fighting what's happening</h3>
              <p className="text-text-secondary text-sm leading-relaxed">The session moves at your pace toward a different relationship with what you're experiencing.</p>
            </div>
          </div>
          </div>
        </section>

        <div className="bg-background-elevated">
        {/* Audience */}
        <section aria-label="Audience" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-4">
            For patients who know that generic therapy isn't enough
          </h2>
          <p className="text-text-secondary text-center leading-relaxed">
            You've tried meditation apps that don't understand crash days. You've sat through therapy sessions where you had to explain what POTS even means. Long COVID and POTS don't just disrupt your body. They disrupt your relationship with hope itself. BeHere.health was built specifically for patients managing post-viral syndrome, autonomic dysfunction, and the particular exhaustion of fighting symptoms that change hour by hour.
          </p>
        </section>
        </div>

        {/* Final CTA */}
        <section aria-label="Final CTA" className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">Ready to stop fighting your symptoms?</h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">Different from everything else you've tried because you speak, don't type, and get real-time guidance when you're actually crashing. If it doesn't help in your first session, we'll refund you.</p>
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Start a session`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        <div className="bg-background-elevated">
        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Questions from patients who've tried everything else</h2>
          <div className="space-y-6">
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                Is this another 'think positive' approach that doesn't get how sick I am?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                No. Your symptoms are real. This is about stopping the fight-or-flight response that keeps your nervous system in overdrive, not pretending you're fine.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                How is this different from therapy apps?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                Generic therapy tools assume you can think your way through problems. BeHere.health was built for post-viral bodies that don't respond like healthy nervous systems do.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                What does 'acceptance' actually mean when I'm having a crash day?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                Acceptance means stopping the fight against what's happening right now. It's not giving up on getting better. It's recognizing that resisting a crash makes it worse and last longer.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                Can I use this when I'm too sick to type or read?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                Yes. BeHere.health is voice-first, designed for the days when you can barely sit up. You speak, the guide listens. No typing or reading required.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                How much does this cost?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                We know medical expenses add up and many Long COVID patients can't work. That's why there's a free trial session with no payment required upfront.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                Does this replace my medical care or claim to cure anything?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                No. This is mindset support that works alongside your medical care, not instead of it. We don't diagnose, treat, or make medical claims.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                What if I've tried mindset work before and it didn't help?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                Most approaches weren't designed for nervous systems dealing with post-viral dysfunction. BeHere.health meets you exactly where you are, even if that's barely functional.
              </p>
            </details>
            <details className="border-b border-border pb-4">
              <summary className="cursor-pointer font-medium text-text py-2">
                How can mindset work affect physical symptoms?
              </summary>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 pl-0">
                When your nervous system is stuck in fight-or-flight, that stress response perpetuates symptoms. Learning to shift out of defensive mode can reduce the nervous system's contribution to symptom severity.
              </p>
            </details>
          </div>
        </section>
        </div>
      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 BeHere.health. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/comparisons" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
