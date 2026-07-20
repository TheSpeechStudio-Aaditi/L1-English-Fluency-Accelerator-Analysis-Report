/* ============================================================
   THE SPEECH STUDIO — L1 FLUENCY CONTENT LIBRARY
   ============================================================
   WHAT THIS FILE IS
   This is pure data — no AI, no API calls, costs nothing to run.
   It holds every piece of coaching copy for L1. The future
   "shared engine" will read a client's DISC colour + a chosen
   scenario, and pull the matching block straight out of here.

   HOW IT'S ORGANISED
   L1_SCENARIOS is a list of 9 real workplace situations.
   Each scenario has a `byColour` object with one entry per
   DISC colour (using the exact same labels your L1/L2 tools
   already use: 'Red — driven', 'Yellow — influential',
   'Green — steady', 'Blue — precise').

   Each colour entry has 4 fields:
     - script        → the actual phrasing/opening line to use
     - technique      → the named technique behind it (VOICE-tagged)
     - watchFor       → this colour's specific pitfall in this scenario
     - confidenceMove → one small action to build the habit

   HOW TO EXTEND OR EDIT
   To change what a Red-driven client sees for "Negotiation",
   find L1_SCENARIOS → id:'negotiation' → byColour →
   'Red — driven' and edit the text directly. No code logic
   needs to change — that's the whole point of this approach.
   ============================================================ */

const L1_SCENARIOS = [

  // 1 ─────────────────────────────────────────────────────────
  {
    id: 'negotiation',
    title: 'Negotiation',
    voice: 'V',
    intro: 'Whether it is salary, scope, or a deal — negotiation is where fluency either shows up or breaks down first.',
    byColour: {
      'Red — driven': {
        script: "Open with the outcome, not the pleasantries: \"I want to walk out of this with X. Here's why that's fair.\"",
        technique: 'VOICE-V: Deliberate pausing after your ask — silence is pressure, let it work for you instead of filling it.',
        watchFor: 'Moving too fast to a close and steamrolling the other side before they feel heard.',
        confidenceMove: 'Before your next negotiation, write your ask in one sentence and say it out loud twice before the meeting.'
      },
      'Yellow — influential': {
        script: "Open with rapport, then pivot cleanly: \"I'm glad we're talking — here's the specific number I need us to land on.\"",
        technique: 'VOICE-O: Give the headline before the story. Charm opens the door, structure closes the deal.',
        watchFor: 'Talking yourself out of your own ask because you want to keep the mood warm.',
        confidenceMove: 'Write your bottom-line number on paper before the conversation so charisma cannot talk it down.'
      },
      'Green — steady': {
        script: "Prepare your ask in advance and read it if needed: \"I've thought about this and I'd like to propose X.\"",
        technique: 'VOICE-I: Clarify your speaking intent before you enter the room — decide the ask is non-negotiable, not a suggestion.',
        watchFor: 'Softening the ask mid-sentence the moment there is any pushback.',
        confidenceMove: 'Rehearse your ask with a friend and have them push back once, so the first pushback in real life is not the first one you have handled.'
      },
      'Blue — precise': {
        script: "Lead with the data: \"Based on X, Y, and Z, the fair number is [amount]. Here is the reasoning.\"",
        technique: 'VOICE-O: BLUF (Bottom Line Up Front) — state the number first, then the analysis, not the reverse.',
        watchFor: 'Over-explaining the justification until the ask gets buried and forgettable.',
        confidenceMove: 'Cap your justification at three points, no more, even if you have twelve.'
      }
    }
  },

  // 2 ─────────────────────────────────────────────────────────
  {
    id: 'conflict',
    title: 'Conflict resolution',
    voice: 'E',
    intro: 'How a person handles friction with a colleague says more about their communication level than any polished presentation.',
    byColour: {
      'Red — driven': {
        script: "Name it directly but not personally: \"I want to sort this out — here's what I saw happen and here's the impact.\"",
        technique: 'VOICE-E: Regulate before you speak. Take one breath longer than feels necessary before your opening line.',
        watchFor: 'Turning "solving the problem" into "winning the argument".',
        confidenceMove: 'Before the conversation, write one sentence that is not about being right, but about what you actually want to happen next.'
      },
      'Yellow — influential': {
        script: "Acknowledge the relationship first, then the issue: \"This matters to me, and so does sorting this properly — can we talk it through?\"",
        technique: 'VOICE-O: Structure the conversation as point → reason → example, so it does not drift into storytelling.',
        watchFor: 'Avoiding the actual issue to protect the relationship, and letting resentment build instead.',
        confidenceMove: 'Practice saying the hard sentence first, before any warm-up talk, at least once before the real conversation.'
      },
      'Green — steady': {
        script: "Give yourself permission to raise it at all: \"This has been sitting with me and I wanted to say something.\"",
        technique: 'VOICE-I: Set a clear intent before entering — decide you are allowed to want something different, not just to keep the peace.',
        watchFor: 'Staying silent until the resentment leaks out sideways, weeks later, over something small.',
        confidenceMove: 'Set a personal rule: address friction within 48 hours, before it goes quiet.'
      },
      'Blue — precise': {
        script: "Lay out the facts without editorialising: \"On [date], X happened. The effect was Y. I would like to resolve it by Z.\"",
        technique: 'VOICE-C: Add one line of human connection before the facts land, so precision does not read as cold.',
        watchFor: 'Being so accurate about the problem that the other person feels audited instead of heard.',
        confidenceMove: 'Add one sentence acknowledging their side before presenting your version of events.'
      }
    }
  },

  // 3 ─────────────────────────────────────────────────────────
  {
    id: 'interviews',
    title: 'Interviews',
    voice: 'O',
    intro: 'Interviews reward structure and presence in equal measure — most candidates fluent in the content still lose the room.',
    byColour: {
      'Red — driven': {
        script: "Answer the question first, in one sentence, before you expand: \"Yes — here is the specific example.\"",
        technique: 'VOICE-O: STAR method (Situation, Task, Action, Result), capped at 90 seconds per answer.',
        watchFor: 'Coming across as combative when asked a challenging or skeptical follow-up.',
        confidenceMove: 'Practice one answer out loud with a timer — most Red answers run long because energy overrides structure.'
      },
      'Yellow — influential': {
        script: "Let the story breathe but land it: \"Let me walk you through it — and here is the result that mattered.\"",
        technique: 'VOICE-O: End every answer with the outcome number or result, not the anecdote.',
        watchFor: 'A great story that never actually answers the question that was asked.',
        confidenceMove: 'After every practice answer, ask "what was the actual result?" — if you cannot say it in one sentence, tighten it.'
      },
      'Green — steady': {
        script: "Prepare, then trust the preparation: \"I have an example that fits this well.\"",
        technique: 'VOICE-V: Practice your opening line out loud until it does not need to be found in the moment.',
        watchFor: 'Under-selling real achievements out of instinct to avoid seeming boastful.',
        confidenceMove: 'Write down three achievements and the concrete impact of each — memorise the numbers, not just the story.'
      },
      'Blue — precise': {
        script: "Give the headline result, then the detail only if asked: \"The result was X. Happy to go into how.\"",
        technique: 'VOICE-O: BLUF — one sentence of outcome before any methodology.',
        watchFor: 'Losing the interviewer in process detail before ever stating what the result was.',
        confidenceMove: 'For every prepared answer, write the one-sentence result first, and treat everything else as optional detail.'
      }
    }
  },

  // 4 ─────────────────────────────────────────────────────────
  {
    id: 'credit-theft',
    title: 'When credit is taken from you',
    voice: 'I',
    intro: 'Reclaiming credit without sounding petty is one of the highest-leverage, least-taught communication skills in any workplace.',
    byColour: {
      'Red — driven': {
        script: "Address it directly and immediately, in the room: \"To build on the point I raised earlier about X...\"",
        technique: 'VOICE-I: State intent as informational, not accusatory — the goal is visibility, not confrontation.',
        watchFor: 'Escalating into a visible conflict that makes the room uncomfortable and makes you look reactive.',
        confidenceMove: 'Practice one calm reclaiming line so it is ready instantly, instead of improvised in anger.'
      },
      'Yellow — influential': {
        script: "Reinforce it socially, right after: \"Glad that landed — that was actually the idea I shared with [name] last week.\"",
        technique: 'VOICE-C: Use a warm, easy tone so the correction reads as a friendly clarification, not a scoreboard.',
        watchFor: 'Letting it go in the moment to keep things pleasant, then feeling resentful for weeks.',
        confidenceMove: 'Say the reclaiming line within the same meeting — waiting even one day makes it much harder to say at all.'
      },
      'Green — steady': {
        script: "Follow up in writing afterwards if the room felt too big: \"Following up on the meeting — glad the idea I proposed on [date] is moving forward.\"",
        technique: 'VOICE-O: A written paper trail is a legitimate, low-conflict tool — use it deliberately, not as a last resort.',
        watchFor: 'Saying nothing at all and quietly deciding it does not matter.',
        confidenceMove: 'Set a rule: any time this happens, send one follow-up message within 24 hours, no exceptions.'
      },
      'Blue — precise': {
        script: "Cite the specific evidence calmly: \"That builds on the proposal I sent on [date] — happy to share the original doc.\"",
        technique: 'VOICE-O: Lead with the fact (date, document), not the emotion.',
        watchFor: 'Being so factual it reads as a formal grievance rather than a casual, confident correction.',
        confidenceMove: 'Keep a running log of your own ideas with dates — it removes the emotional load from ever needing to prove it.'
      }
    }
  },

  // 5 ─────────────────────────────────────────────────────────
  {
    id: 'silence-vs-speak',
    title: 'Knowing when to speak up vs. stay silent',
    voice: 'I',
    intro: 'This is a judgment skill, not a personality trait — and most people default to the same choice in every situation, which is the actual problem.',
    byColour: {
      'Red — driven': {
        script: "Before speaking, ask silently: \"Does this need to be said by me, right now, in this way?\"",
        technique: 'VOICE-I: Build a 3-second pause before speaking into every meeting — most Red over-speaking is a timing issue, not a content issue.',
        watchFor: 'Speaking first and most often, which drowns out better input from quieter people.',
        confidenceMove: 'In your next meeting, deliberately let two other people speak before you do.'
      },
      'Yellow — influential': {
        script: "Ask yourself: \"Am I speaking to add value, or because silence feels uncomfortable?\"",
        technique: 'VOICE-I: Separate social energy from informational necessity before contributing.',
        watchFor: 'Filling every silence, which can dilute your most important points among lower-value ones.',
        confidenceMove: 'Pick one meeting a week to speak only twice — make both count.'
      },
      'Green — steady': {
        script: "Use a low-stakes entry line to break silence: \"Can I add something here?\" — then say the thing you were about to talk yourself out of.",
        technique: 'VOICE-I: Pre-decide before the meeting one thing you WILL say, regardless of how the room feels in the moment.',
        watchFor: 'Staying silent on something important and only saying it privately afterwards, where it has no impact.',
        confidenceMove: 'Set a personal minimum: speak at least once in every meeting you attend, even briefly.'
      },
      'Blue — precise': {
        script: "Speak once you have the accurate version, not the perfect version: \"I have a partial thought, but here is what I am seeing.\"",
        technique: 'VOICE-V: Practice speaking before full certainty — waiting for 100% correctness in real time silences good input.',
        watchFor: 'Waiting so long to be fully sure that the moment for the point has already passed.',
        confidenceMove: 'Give yourself permission to say "I might be wrong, but..." once per meeting.'
      }
    }
  },

  // 6 ─────────────────────────────────────────────────────────
  {
    id: 'asking-for-help',
    title: 'Asking for help',
    voice: 'C',
    intro: 'How someone asks for help reveals — and shapes — how they are perceived on competence, not just likeability.',
    byColour: {
      'Red — driven': {
        script: "Frame it as a resource decision, not a weakness: \"I want this done well and fast — where is the fastest path to the right answer?\"",
        technique: 'VOICE-C: Reframe asking as efficiency-seeking, which matches Red\'s own values, rather than as admitting a gap.',
        watchFor: 'Avoiding help until the problem is much bigger than it needed to be.',
        confidenceMove: 'Set a rule: if stuck for more than 30 minutes, ask — no exceptions, no waiting for the "right" moment.'
      },
      'Yellow — influential': {
        script: "Ask specifically, not generally: \"Could you give me 10 minutes on X specifically?\" rather than a vague ask.",
        technique: 'VOICE-O: Specific asks get specific, faster help — vague asks get politely deprioritised.',
        watchFor: 'Asking in a way so casual it is easy for the other person to forget or not prioritise.',
        confidenceMove: 'Follow every verbal ask with one written line confirming what was agreed.'
      },
      'Green — steady': {
        script: "State the ask plainly, without over-apologising: \"I need help with X — do you have 15 minutes today?\"",
        technique: 'VOICE-I: Remove the apology prefix ("sorry to bother you") — it undercuts the ask before it is even heard.',
        watchFor: 'Apologising so much for asking that it becomes easy for others to say no.',
        confidenceMove: 'Practice asking without the word "sorry" in the sentence at all.'
      },
      'Blue — precise': {
        script: "Bring the specific blocker: \"I have tried X and Y — I am stuck at Z specifically, can you help there?\"",
        technique: 'VOICE-O: A precisely scoped ask gets a precise, fast answer — this plays directly to Blue\'s strength.',
        watchFor: 'Waiting to have a fully-formed, polished question before asking at all, which delays help unnecessarily.',
        confidenceMove: 'Allow yourself to ask with an 80%-formed question rather than waiting for 100%.'
      }
    }
  },

  // 7 ─────────────────────────────────────────────────────────
  {
    id: 'saying-no',
    title: "Saying 'no'",
    voice: 'I',
    intro: 'Saying no cleanly, without over-justifying or over-apologising, is one of the clearest signals of communication maturity.',
    byColour: {
      'Red — driven': {
        script: "Say it short and keep the door open: \"No, that doesn't work for me — but here is what could.\"",
        technique: 'VOICE-V: Soften delivery tone even while keeping the words direct, so "no" does not read as dismissal.',
        watchFor: 'A correct "no" delivered so bluntly it damages the relationship unnecessarily.',
        confidenceMove: 'Add one warm sentence before or after your "no" — the answer stays the same, the impact changes.'
      },
      'Yellow — influential': {
        script: "Decline warmly but clearly: \"I really appreciate you thinking of me — I have to say no to this one.\"",
        technique: 'VOICE-C: Keep the warmth, but make sure the actual word "no" is unambiguous in the sentence.',
        watchFor: 'Being so warm about the decline that the other person does not realise it was actually a no.',
        confidenceMove: 'Say the word "no" explicitly at least once in the sentence, not just implied.'
      },
      'Green — steady': {
        script: "State it plainly and resist the urge to over-explain: \"I am not able to take this on right now.\"",
        technique: 'VOICE-I: One reason is enough — stacking multiple justifications signals the "no" is negotiable.',
        watchFor: 'Giving five reasons, which invites the other person to argue against each one.',
        confidenceMove: 'Practice saying no with exactly one sentence and stopping there.'
      },
      'Blue — precise': {
        script: "Give the real constraint, briefly: \"My current workload does not allow for this without dropping something else.\"",
        technique: 'VOICE-O: One factual reason, stated once, is more credible than a long justification.',
        watchFor: 'Over-justifying with data until the "no" sounds like it is up for debate.',
        confidenceMove: 'Cap your reasoning at one sentence, then stop talking.'
      }
    }
  },

  // 8 ─────────────────────────────────────────────────────────
  {
    id: 'presentations',
    title: 'Office presentations',
    voice: 'V',
    intro: 'Presentation skill is really a VOICE-V and VOICE-O problem in disguise — delivery and structure, not content.',
    byColour: {
      'Red — driven': {
        script: "Open with the headline result, not the agenda: \"Here is where we landed — here is why it matters.\"",
        technique: 'VOICE-V: Deliberately slow your pace by 20% in the first minute — Red energy reads as rushed under pressure.',
        watchFor: 'Speaking too fast and too much, losing the room\'s ability to absorb the key point.',
        confidenceMove: 'Practice your opening line at half your natural speaking speed.'
      },
      'Yellow — influential': {
        script: "Use a story to open, but write the closing line word-for-word in advance so energy does not run past the point.",
        technique: 'VOICE-O: Every slide gets one sentence of headline before any story or example.',
        watchFor: 'A presentation full of energy and connection, but no memorable single takeaway.',
        confidenceMove: 'Write the one sentence you want people to remember, and say it twice — once at the start, once at the end.'
      },
      'Green — steady': {
        script: "Use notes without apology — reading a clear point is stronger than an unclear improvisation.",
        technique: 'VOICE-V: Practice projecting volume 10% louder than feels natural — steady voices often under-project in large rooms.',
        watchFor: 'A well-structured, well-thought-out presentation delivered too quietly to land with impact.',
        confidenceMove: 'Record yourself presenting once and check if you can hear yourself clearly from across a room.'
      },
      'Blue — precise': {
        script: "Lead every section with the conclusion: \"The finding is X. Here is the data behind it.\"",
        technique: 'VOICE-O: BLUF at the section level, not just at the top of the whole presentation.',
        watchFor: 'Losing the audience in methodology before ever stating the actual conclusion.',
        confidenceMove: 'For each section, write the one-sentence conclusion first, then build the slide around it.'
      }
    }
  },

  // 9 ─────────────────────────────────────────────────────────
  {
    id: 'qanda',
    title: 'Asking and answering questions',
    voice: 'O',
    intro: 'Q&A is where preparation ends and real fluency is tested — most people over-prepare the talk and under-prepare the exchange.',
    byColour: {
      'Red — driven': {
        script: "Answer, then stop: \"The answer is X.\" Resist the instinct to defend it further unless asked.",
        technique: 'VOICE-E: Let a challenging question land for a full breath before responding, rather than firing back instantly.',
        watchFor: 'Treating a tough question as an attack and answering with intensity that feels combative.',
        confidenceMove: 'Practice pausing for one full second after any question before answering, even ones you know cold.'
      },
      'Yellow — influential': {
        script: "Answer the actual question first, story after: \"Short answer: X. Here is a bit more context if useful.\"",
        technique: 'VOICE-O: Put the direct answer in the first sentence, always — the story is optional garnish.',
        watchFor: 'Answering a related but different question with a great anecdote, without noticing the drift.',
        confidenceMove: 'After answering, silently ask "did I actually answer their exact question?" before continuing.'
      },
      'Green — steady': {
        script: "Ask a clarifying question if needed, without apologising for needing it: \"Could you say more about what you mean by X?\"",
        technique: 'VOICE-I: Clarifying is a sign of engagement, not a weakness — reframe it internally that way before asking.',
        watchFor: 'Guessing at an unclear question rather than asking for clarification, and answering the wrong thing.',
        confidenceMove: 'Give yourself permission to say "let me think about that for a second" instead of rushing an answer.'
      },
      'Blue — precise': {
        script: "Give the concise version first: \"In short, X. I can go deeper if that is useful.\"",
        technique: 'VOICE-O: Offer the depth, do not default to it — let the asker opt in to more detail.',
        watchFor: 'A technically excellent answer that runs so long the original question gets lost.',
        confidenceMove: 'Practice a 15-second version of your most common answer, then a longer version only if asked.'
      }
    }
  }

];

// Small helper — the future engine will use this to pull one block.
// Example: getL1Content('negotiation', 'Blue — precise')
function getL1Content(scenarioId, colour) {
  const scenario = L1_SCENARIOS.find(s => s.id === scenarioId);
  if (!scenario) return null;
  return {
    title: scenario.title,
    voice: scenario.voice,
    intro: scenario.intro,
    ...scenario.byColour[colour]
  };
}

// Export for use in other files / the future engine
if (typeof module !== 'undefined') module.exports = { L1_SCENARIOS, getL1Content };
