---
title: 'An Awesome Failure: My Dog, Parkour, and the Physics of AI'
pubDate: 2025-10-27
description: "I prompted Google's Veo to create a video of my dog doing parkour. The result was a fascinating, physics-defying failure. Here's my breakdown of what's happening."
heroImage: '/src/assets/images/Dog-Jumping.jpg'
author: 'James Farrelly'
tags: ["AI", "Google Veo", "Generative AI", "Tech", "Dogs", "Analysis"]
---

I've been testing Google's Veo lately, and it just produced an absolutely awesome failure. The star? My dog (or an AI version of one) doing parkour.

I gave it a simple prompt:

> "Create a video of an English cream golden retriever doing parkour moves in a park. Things like backflips and big twists."

The video it created is amazing. It shows the dog jumping off a wall, landing on its front paws... and then **instantly reversing its head and tail** as it leaps into the air.

I wanted to understand *why* this happens. Here's my take on what's going on under the hood.

### Step 1: Text-to-Cinematic Interpretation

Veo did this perfectly. It understood "english cream golden retriever," "park," and "parkour moves." No problems here.

### Step 2: Initial Scene Generation

It created a great, realistic scene. It even correctly inferred elements I didn't specify, like the small wall for the dog to jump off of.

### Step 3: The Problem - Temporal Coherence

This is where the problems begin. Temporal coherence is where motion and physics come into play.

The images are being generated from actual images of dogs doing dog-like things, such as jumping. Unfortunately for the AI, **dogs don't typically jump off their front legs to move backward.**

So, when the model generates the dog landing on its front paws, it suddenly has a dog moving backward (tail-first), which it doesn't compute. The generated image "corrects" this by flipping the head and tail, so the dog is performing a *natural* jump, even though the transition to get there is completely unnatural.

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
    <iframe 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://www.youtube.com/embed/IUMFIRcJam0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
</div>

---

I am still amazed at the detail in this video, but it clearly shows a significant challenge for AI. These models are trained on known physics. When asked to create something that breaks those rules, they can "correct" the problem in a way that creates something truly, and hilariously, impossible.

[James Farrelly's LinkedIn Post on Google Veo](https://www.linkedin.com/feed/update/urn:li:activity:7386519344048001024/)