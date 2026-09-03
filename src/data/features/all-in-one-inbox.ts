import type { TemplatePageData } from "@/lib/templates";

const data: TemplatePageData = {
  slug: "all-in-one-inbox",
  breadcrumbName: "All in One Inbox",
  seo: {
    title: "All in One Inbox for Service Businesses | Viking Marketing",
    description:
      "Viking's all in one inbox brings calls, texts, email, and social DMs into one place, tied to your CRM. Built for service businesses. Book a free demo.",
    ogDescription:
      "Viking's all in one inbox brings calls, texts, WhatsApp, email, and social DMs into one place, tied to your CRM. Built for service businesses. Book a free demo.",
    ogImage: "/images/6a25b6fffc95b24549af-d55ba5572650.webp",
    keywords: [
      "all in one inbox",
      "unified inbox",
      "unified inbox software",
      "customer communication platform",
      "social media inbox",
      "omnichannel inbox",
      "Unified Messaging, All Conversations in One Place",
    ],
  },
  schema: {
    kinds: ["organization", "softwareApplication", "breadcrumb", "faq"],
    serviceName: "All in One Inbox",
    serviceDescription:
      "An all in one inbox that pulls calls, texts, WhatsApp, email, social media DMs, web chat, and reviews into one shared workspace tied to your CRM, so nothing gets missed.",
  },
  hero: {
    h1: "All in One Inbox: Every Conversation in One Place",
    lede: "Texts, calls, emails, Facebook and Instagram DMs, web chat, and Google messages, all landing in one inbox your whole team shares. No more app-switching. No more leads slipping through the cracks. Viking's all in one inbox puts every customer conversation in a single place, tied to your CRM, so nothing gets missed and everyone knows who said what.",
    ctaLabel: "Book a Free Demo",
    image: "/images/6a269b9c6a06f03d44a9-6c9af6cef5f4.webp",
    imageAlt: "All in one inbox by Viking Marketing showing calls, texts, email, and social messages in one place",
    checkLines: [
      "✓ Every channel in one view ✓ Works on your existing number ✓ Tied to your CRM ✓ Mobile app for the field ✓ Live in 48 hours",
    ],
  },
  sections: [
    {
      type: "definition",
      title: "What is an all in one inbox?",
      paragraphs: [
        "An all in one inbox is a single shared workspace that pulls every customer conversation, calls, texts, WhatsApp, email, social media DMs, web chat, and reviews, into one screen. Instead of checking six apps, your team sees and answers everything in one place, with the full history saved to each customer. It is also called a unified inbox, and it is how busy teams stop missing leads scattered across tools.",
        "With Viking, that inbox sits inside a full CRM, so every conversation is logged to the customer's profile automatically and nothing lives in a silo.",
      ],
    },
    {
      type: "split",
      title: "The real problem: your leads are scattered across too many apps",
      paragraphs: [
        "Most teams do not have a people problem. They have a systems problem. Every marketing channel you turn on adds another app for your office to babysit, and the conversations pile up in places nobody is watching.",
        "It usually looks like this:",
        'Nobody can answer simple questions like "how many leads came in today?" without opening five apps and doing the math.',
        "A customer calls and your team scrambles across the CRM, Gmail, the texting app, and Facebook to find their history while the caller waits.",
        "Internal notes about a customer happen in personal texts and Slack, totally separate from the customer's actual conversation, and nothing is documented.",
        "Every new hire has to learn a patchwork of six disconnected tools before they can do the job.",
        "An all in one inbox fixes the system, not the people. Everything lands in one place, so the chaos goes away.",
      ],
      image: "/images/6a269e196a06f03d44a9-ccdf770eb91b.webp",
      imageAlt: "Service business team juggling separate messaging apps before using an all in one inbox",
      side: "left",
    },
    {
      type: "iconSteps",
      title: "Every channel in one place",
      intro:
        "Viking's all in one inbox brings every channel your business uses into a single omnichannel inbox. No new phone number, no complicated setup.",
      steps: [
        {
          icon: "/images/6a26b39249e55f8519ae-d5bfff9438b1.svg",
          alt: "All in one inbox combining business calls and voicemail",
          title: "Calls and voicemail",
          body: "",
        },
        {
          icon: "/images/6a26b39219b4ff338bdd-b311cad7155d.svg",
          alt: "All in one inbox managing text messages",
          title: "Text messages",
          body: "",
        },
        {
          icon: "/images/6a26b39426c33f70fcbc-34b6e347c29c.svg",
          alt: "Unified inbox connecting Gmail and Outlook email",
          title: "Email, Gmail & Outlook",
          body: "",
        },
        {
          icon: "/images/6a26b392da24932f125e-b221173a2d34.svg",
          alt: "Social media inbox for Facebook DMs",
          title: "Facebook DMs",
          body: "",
        },
        {
          icon: "/images/6a26b392d91f654725aa-11dd38f849d8.svg",
          alt: "All in one inbox managing WhatsApp messages",
          title: "WhatsApp messages",
          body: "",
        },
        {
          icon: "/images/6a26b39226c33f70fcbc-4fa962d2228d.svg",
          alt: "Social media inbox for Instagram DMs",
          title: "Instagram DMs",
          body: "",
        },
        {
          icon: "/images/6a26b39449e55f8519ae-1df67e42dd6c.svg",
          alt: "All in one inbox managing TikTok messages",
          title: "TikTok messages",
          body: "",
        },
        {
          icon: "/images/6a26b3946a06f03d44ab-fb95237fb81f.svg",
          alt: "All in one inbox handling website chat messages",
          title: "Web chat from your website",
          body: "",
        },
        {
          icon: "/images/6a26b39419b4ff338bdd-7e9f516d1616.svg",
          alt: "Unified inbox managing Google Business messages and reviews",
          title: "Google Business messages and reviews",
          body: "",
        },
        {
          icon: "/images/6a26b3926a06f03d44ab-4319509cabc6.svg",
          alt: "All in one inbox capturing web form submissions",
          title: "Web form submissions",
          body: "",
        },
      ],
      outro:
        "Every message becomes a conversation tied to the customer, so whoever picks it up sees the full context, including past calls, texts, and notes, and nothing slips through the cracks.",
    },
    {
      type: "iconSteps",
      title: "How the all in one inbox works",
      intro: "From first message to closed job, in one system:",
      steps: [
        {
          icon: "/images/call-step-1.svg",
          alt: "Step one, a message arrives in the all in one inbox",
          title: "A message arrives",
          body: "A lead texts your number, DMs you on Instagram, or fills out a form. It lands in the same inbox instantly, and your team sees it the moment it arrives.",
        },
        {
          icon: "/images/call-step-2.svg",
          alt: "Step two, a team member claims the conversation",
          title: "Someone owns it",
          body: "Real-time notifications on desktop and mobile alert the team, and the conversation gets assigned, so there are no duplicate replies and no confusion about who is handling it.",
        },
        {
          icon: "/images/call-step-3.svg",
          alt: "Step three, reply and collaborate from one inbox",
          title: "Reply and collaborate.",
          body: "Answer right from the inbox, no app-switching. Use saved templates for fast replies, and tag a teammate privately when you need input, without the customer seeing it.",
        },
        {
          icon: "/images/call-step-4.svg",
          alt: "Step four, the conversation is logged to the CRM",
          title: "It is logged forever.",
          body: "The full conversation saves to the customer's CRM profile automatically. Archive it to keep the inbox clean, and find it later with search and filters.",
        },
      ],
    },
    {
      type: "split",
      title: "More than an inbox, part of your full customer communication platform",
      paragraphs: [
        'This is where Viking is different from a standalone inbox tool. The all in one inbox is one part of a complete customer communication platform, so the conversation does not stop at "answered."',
        "Every contact is tracked in the CRM, with full history on their profile.",
        "Missed calls trigger an instant text back, so a call you cannot take never becomes a lost lead.",
        "The AI appointment setter can engage and book leads around the clock, then log it in the same inbox.",
        "Follow-ups, review requests, and reactivation fire automatically.",
        "A standalone inbox shows you the message. Viking turns every message into a tracked, followed-up customer.",
        "see how Missed Call Text Back and the AI appointment setter work with your inbox.",
      ],
      image: "/images/6a269f02f607d4002bca-1c672731548c.webp",
      imageAlt: "All in one inbox combining every channel into one CRM-connected view",
      side: "right",
      linkLabel: "Missed Call Text Back",
      linkHref: "/missed-call-text-back",
    },
    {
      type: "iconBullets",
      title: "Everything your team needs to move fast",
      intro:
        "Reply faster, stay organized, and answer from any device. Everything your team needs to handle every conversation lives in one place:",
      items: [
        {
          icon: "/images/6a22ee9e25d536ee37e6-7555a23a948d.svg",
          alt: "Assign conversations in the all in one inbox so everyone knows what they own",
          text: "Assign conversations so everyone knows what they own.",
        },
        {
          icon: "/images/6a282cecbd661f13c1ff-6c7a1460acfe.svg",
          alt: "Convert a message into a task and track it to done in the unified inbox",
          text: "Convert any message into a task and track it to done.",
        },
        {
          icon: "/images/feat-inbox.svg",
          alt: "Message templates for estimates follow-ups and review requests in the all in one inbox",
          text: "Message templates for estimates, follow-ups, and review requests in two clicks.",
        },
        {
          icon: "/images/6a282cecbb09e3b1399b-6325e3283b31.svg",
          alt: "After-hours autoresponder in the all in one inbox so leads know you got their message",
          text: "After-hours autoresponders so leads know you got their message, even at 9 PM.",
        },
        {
          icon: "/images/6a10cb8b6cc0eead5ca6-a27835d14d52.svg",
          alt: "Scheduled messages for reminders and follow-ups in the unified inbox",
          text: "Scheduled messages for reminders and follow-ups.",
        },
        {
          icon: "/images/6a234d4349e55f85197d-7ca8b86129fb.svg",
          alt: "Private at-mentions to pull in a teammate without the customer seeing in the all in one inbox",
          text: "Private @mentions to pull in a teammate without the customer seeing.",
        },
        {
          icon: "/images/6a22ee9e3c3faf82cadb-a752f7098510.svg",
          alt: "Call recording and transcription saving every call to the contact in the all in one inbox",
          text: 'Call recording and transcription, so every call is saved to the contact and searchable as text, no more "what did they say on the phone?"',
        },
        {
          icon: "/images/6a282cecbb09e3b1399b-fbc8ac16d1eb.svg",
          alt: "Voicemail drop leaving a pre-recorded voicemail without the phone ringing",
          text: "Voicemail drops, leave a pre-recorded voicemail without the phone ringing.",
        },
        {
          icon: "/images/6a282cecb71c98ada936-aa1c48cbef28.svg",
          alt: "Collect payments in the conversation by sending an invoice or payment link in the all in one inbox",
          text: "Collect payments in the conversation, send an invoice or payment link right in the thread.",
        },
        {
          icon: "/images/6a282cecdade6ea39e5c-032d89a3f181.svg",
          alt: "Search filter and archive to find any conversation instantly in the unified inbox",
          text: "Search, filter, and archive to find any conversation instantly.",
        },
        {
          icon: "/images/6a282cee7fc0b68efc4e-0eec37792e6d.svg",
          alt: "All in one inbox mobile app with push notifications to reply from the truck job site or chair",
          text: "Mobile app and push notifications, so you can reply from the truck, the job site, or the chair.",
        },
      ],
    },
    {
      type: "compare",
      title: "All in one inbox vs juggling separate apps",
      intro:
        "Most text-back tools do one thing, cap your texts, tack on a setup fee, and never log the lead anywhere. Here's the honest difference.",
      headers: ["Features", "Separate apps", "Viking all in one inbox"],
      rows: [
        ["Where conversations live", "5+ disconnected apps", "One shared inbox"],
        ["Customer history", "Scattered, you hunt for it", "One profile, full history"],
        ["Who is handling a lead", "Unclear, duplicate replies", "Assigned, with clear owner"],
        ["Missed-call recovery", "None", "Instant text back"],
        ["Tied to a CRM", "No", "Yes, automatically"],
        ["New-hire onboarding", "Weeks across six tools", "One system"],
        ["Cost", "Several subscriptions", "One flat plan"],
      ],
    },
    {
      type: "industryCards",
      title: "An all in one inbox built for your industry",
      intro:
        "Viking's all in one inbox is shaped around how your industry actually fields messages, so every channel and every lead is handled the way your business works.",
      cards: [
        {
          icon: "/images/ind-dental.svg",
          alt: "All in one inbox for dental practices",
          title: "Dental Practices",
          body: "New-patient texts, insurance questions, and appointment requests land in one place, so the front desk never loses a message between calls.",
        },
        {
          icon: "/images/ind-medspa.svg",
          alt: "All in one inbox for med spas and aesthetics",
          title: "Med Spas & Aesthetics",
          body: "Turn DMs and form fills into booked consultations from one inbox, with the full conversation saved to each client.",
        },
        {
          icon: "/images/ind-gym.svg",
          alt: "All in one inbox for gyms and fitness studios",
          title: "Gyms & Fitness Studios",
          body: "Answer membership and class questions across SMS, Instagram, and chat without switching apps.",
        },
        {
          icon: "/images/ind-home.svg",
          alt: "All in one inbox for home services and contractors",
          title: "Home Services & Contractors",
          body: "Catch job inquiries from text, web chat, and Facebook while the crew is on site, and reply fast before the customer calls the next company.",
        },
        {
          icon: "/images/ind-realestate.svg",
          alt: "All in one inbox for real estate agents",
          title: "Real Estate Agents",
          body: "Respond to every lead in seconds from any device, when the first agent to reply usually wins the client.",
        },
        {
          icon: "/images/ind-salon.svg",
          alt: "All in one inbox for salons and barbershops",
          title: "Salons & Barbershops",
          body: "Handle bookings, reminders, and rebookings across every channel without interrupting the chair.",
        },
      ],
      note: "Whatever the industry, your whole team works from one inbox and nothing slips through the cracks.",
      ctaLabel: "Book a Free Demo",
    },
    {
      type: "local",
      title: "Built in Chandler, working for businesses coast to coast",
      paragraphs: [
        "Viking Marketing was built in Chandler, Arizona, helping local Valley businesses stop losing customers to scattered messages and slow replies. Our support hours match yours, not a call center on the other side of the world.",
      ],
      note: "If you run a service business in the Valley, you're working with a neighbor. If you're anywhere else in the U.S., you're still working with a team that picks up.",
    },
    {
      type: "setupSteps",
      title: "Live in 48 hours, on your existing number",
      intro:
        "Most businesses go live within 48 hours, on their existing phone number. There's no porting, no second line, and no hardware.",
      image: "/images/6a2300bd49e55f851977-e5b33e226576.webp",
      imageAlt: "Set up your missed call text back in 48 hours Viking Marketing",
      steps: [
        {
          icon: "/images/step-connect.svg",
          title: "We connect your channels.",
          body: "Your number, email, social accounts, and web chat, into one inbox.",
        },
        {
          icon: "/images/step-automate.svg",
          title: "We set up your team.",
          body: "Assignments, templates, and autoresponders configured for how you work.",
        },
        {
          icon: "/images/step-grow.svg",
          title: "You go live in 48 hours",
          body: "and run every conversation from one place.",
        },
      ],
      outro: "Our Chandler team handles the setup. You spend about 30 minutes reviewing it.",
      ctaLabel: "Book a Free Demo",
    },
    { type: "reviews" },
  ],
  faqTitle: "All in one inbox, questions answered",
  faqContextLabel: "the Missed call text back software",
  faqs: [
    {
      q: "What is an all in one inbox?",
      a: "An all in one inbox is a single shared workspace that combines every customer conversation, calls, texts, WhatsApp, email, social media DMs, web chat, and reviews, into one screen. Your team answers everything from one place instead of switching between apps, and each conversation is saved to the customer's history.",
    },
    {
      q: "What channels does it combine?",
      a: "Viking's all in one inbox combines calls, SMS, WhatsApp, email (Gmail and Outlook), Facebook and Instagram DMs, TikTok, website chat, web forms, and Google Business messages and reviews. Everything lands in one view tied to the customer.",
    },
    {
      q: "Does it really bring Facebook, Instagram, WhatsApp, and TikTok into one inbox?",
      a: "Yes. Facebook DMs, Instagram DMs, WhatsApp, and TikTok messages all land in the same inbox as your texts, calls, and email, not separate apps you check one by one. Each message is tied to the customer's record, so anyone on your team can reply with the full history in front of them.",
    },
    {
      q: "Is an all in one inbox the same as a unified inbox?",
      a: 'Yes. "All in one inbox" and "unified inbox" describe the same thing, one place to manage every channel. Viking\'s version goes further by tying every conversation to a full CRM, so the lead is tracked and followed up, not just displayed.',
    },
    {
      q: "Can my team manage every channel from their phones?",
      a: "Yes. The mobile app puts every channel, calls, texts, WhatsApp, social DMs, and email, in your team's pocket, with push notifications for new messages. Your office and your field crew can both reply from anywhere, and everyone sees who is handling what so there are no duplicate replies.",
    },
    {
      q: "Does it work with my existing phone number?",
      a: "Yes. Viking connects to your current business number with no porting, no second line, and no new hardware. Texts and calls flow into the same inbox.",
    },
    {
      q: "How much does an all in one inbox cost?",
      a: "Viking includes the all in one inbox inside a full CRM platform starting at $297 a month, with flat pricing. Instead of paying for a separate texting app, a social inbox tool, and a CRM, you get all of it in one, so it usually replaces several subscriptions rather than adding one.",
    },
    {
      q: "How fast can it be set up?",
      a: "Most businesses go live within 48 hours. Viking's Phoenix team connects your channels and configures your team, and you spend about 30 minutes reviewing it.",
    },
  ],
  finalCta: {
    title: "Stop checking five apps. Start using one inbox.",
    body: "Every conversation in one place, tied to your CRM, answered by your whole team. Book a free demo and we will show you exactly how Viking's all in one inbox would handle your business's messages.",
    ctaLabel: "Book a Free Demo",
    phoneNote: "and talk to a real person in Arizona.",
  },
};

export default data;
