import type { TemplatePageData } from "@/lib/templates";

const data: TemplatePageData = {
  slug: "sms-payment-link",
  breadcrumbName: "SMS Payment Link",
  seo: {
    title: "SMS Payment Link for Service Businesses | Viking Marketing",
    description:
      "Viking sends a secure SMS payment link from any conversation, so customers pay in seconds. Branded invoices, auto-reminders, & CRM sync. Book a free demo.",
    ogDescription:
      "Viking sends a secure SMS payment link from any conversation so customers pay in seconds. Branded invoices, auto-reminders, CRM sync. Book a free demo.",
    ogImage: "/images/6a29a77e2719d8cb18ab-aa0de6393d52.webp",
    keywords: [
      "sms payment link",
      "text to pay",
      "pay by text message",
      "text to pay software",
      "sms payment provider",
      "text payment link",
      "payment request software",
      "text to pay for contractors",
      "text to pay dental",
      "text to pay for small business",
      "send payment request by text",
      "get paid by text message,",
      "ollect payment by text",
    ],
  },
  schema: {
    kinds: ["organization", "service", "softwareApplication", "breadcrumb", "faq"],
    serviceName: "SMS Payment Link",
    serviceDescription:
      "Secure SMS payment links sent from any conversation by text or email, so customers pay in seconds, with branded invoices, automated reminders, and every payment logged to the CRM.",
  },
  hero: {
    h1: "SMS Payment Link:Get Paid Faster Without Chasing Anyone",
    lede: "When a job is done, getting paid should be easy. Viking lets you send a secure payment link directly from the conversation, by text or email, right after the job is complete, before the customer even gets home. They tap the link, pay in seconds, and the payment logs to their contact in your CRM automatically. No invoices sitting in inboxes. No awkward follow-ups. No waiting weeks.",
    ctaLabel: "Book a Free Demo",
    image: "/images/6a29ebf984a439b9c7e5-6fff064e84b8.webp",
    imageAlt: "SMS payment link sent by Viking Marketing for instant text-to-pay collection",
    checkLines: [
      "✓ Send a payment link by text or email in two taps ✓ Branded invoices by text and email ✓ Automated reminders until paid ✓ Every payment logged to your CRM ✓ Flat pricing, no contracts",
    ],
  },
  sections: [
    {
      type: "definition",
      title: "What is an SMS payment link?",
      paragraphs: [
        "An SMS payment link is a secure URL you send to a customer, by text message or email, that opens a mobile-friendly checkout page. The customer taps the link, enters their card details or uses Apple Pay, and the payment goes through in seconds. No app, no account, no complicated process. The business gets paid immediately and the customer gets a confirmation. For service businesses, it is the fastest way to collect money at the moment the job is freshest in the customer's mind.",
      ],
    },
    {
      type: "split",
      title: "Why are service businesses switching to text-to-pay?",
      paragraphs: [
        "Collecting payment used to mean handing over a card reader, emailing an invoice and hoping they open it, or calling to chase a balance weeks later. Text-to-pay changes the dynamic:",
        "35% of small business customers now prefer to pay by text, according to industry research. Most people respond to texts faster than emails.",
        "Only 4% of small businesses currently offer text-to-pay, which means adopting it now puts you ahead of most competitors in your area.",
        "SMS has a 98% open rate, so payment requests sent by text are seen almost immediately, unlike invoices that sit unread for days.",
        "The faster you ask, the faster you get paid. Sending a payment link while the customer is still satisfied with the work closes the collection loop before the momentum fades.",
      ],
      image: "/images/6a29ebfe2719d8cb18b3-b651ec89d8a9.webp",
      imageAlt: "Service businesses switching from slow paper invoices to fast text-to-pay",
      side: "left",
    },
    {
      type: "compare",
      title: "Text-to-pay vs the old ways of collecting payment",
      intro:
        "A Viking payment link can go out by text, by email, or both, and either way the customer pays in one tap. Here is how that compares to the slower methods most service businesses still rely on:",
      headers: ["Method", "Speed to get paid · Customer effort", "Chasing required · Logged to CRM"],
      rows: [
        [
          "Viking payment link (text or email)",
          "Seconds to minutes · One tap, then pay, no app",
          "Automated reminders do it · Yes, automatic",
        ],
        [
          "Static PDF invoice (no pay button)",
          "Days to weeks · Open file, then find how to pay separately",
          "You chase manually · Usually a separate tool",
        ],
        ["Card reader in person", "Immediate, but only on-site · Must be face to face", "N/A · Rarely"],
        ["Card details over the phone", "Slow, error-prone · Read out card numbers aloud", "You call back · No"],
        ["Mailed paper check", "One to three weeks · Write and mail a check", "Constant follow-up · No"],
      ],
      outro:
        "The difference is not which channel you use, text and email both work, it is that a Viking payment link is tappable, self-reminding, and automatically recorded against the customer in your CRM. A plain PDF invoice, a card reader, a phone payment, or a check is none of those things.",
    },
    {
      type: "iconSteps",
      title: "How do I send a payment link by text?",
      intro:
        "You send a payment link in two taps: from inside the customer conversation, tap the payment icon, set the amount, and send it by text or email. The customer gets a branded message, pays in seconds, and it logs to their record automatically. Here is the full flow:",
      steps: [
        {
          icon: "/images/call-step-1.svg",
          alt: "Step one, job is done and ready for payment",
          title: "The job is done.",
          body: "You mark the job complete, or a trigger fires automatically in your workflow.",
        },
        {
          icon: "/images/call-step-2.svg",
          alt: "Step two, sending an SMS payment link from the conversation",
          title: "You send the payment link.",
          body: "From the conversation, tap the payment icon, set the amount, and send by text, email, or both. The customer gets a branded message with a secure checkout link.",
        },
        {
          icon: "/images/call-step-3.svg",
          alt: "Step three, customer pays via the SMS payment link",
          title: "The customer pays in seconds.",
          body: "They tap the link and pay by card, Apple Pay, or another method, no app download, no account required.",
        },
        {
          icon: "/images/call-step-4.svg",
          alt: "Step four, payment logs to the CRM contact record",
          title: "The payment logs to their CRM contact.",
          body: "The amount, date, and confirmation appear on the customer's record automatically, with no manual data entry.",
        },
        {
          icon: "/images/6a29839e944ae1c947bb-60abb83aa4d7.svg",
          alt: "Step five, automated payment reminder fires if unpaid",
          title: "A reminder fires if they haven't paid.",
          body: "Automated follow-ups go out by text and email at the intervals you set, so you never have to personally chase a balance again.",
        },
      ],
    },
    {
      type: "iconBullets",
      title: "Everything in Viking's payment tools",
      items: [
        {
          icon: "/images/6a2a0b952719d8cb18b4-e4ddbf4f15d5.svg",
          alt: "SMS payment links sent from any conversation",
          text: "Payment links sent directly from any conversation by text or email, in two taps.",
        },
        {
          icon: "/images/6a2a0b952719d8cb18b4-4b68da2ed1f1.svg",
          alt: "Branded invoices by text and email",
          text: "Branded invoices by text and email, with your logo, line items, discounts, taxes, and due dates.",
        },
        {
          icon: "/images/6a2a0b9561b1ee5d8874-739c0ae7a73c.svg",
          alt: "Automated payment reminders until invoice is paid",
          text: "Automated payment reminders that follow up until the invoice is paid, without you lifting a finger.",
        },
        {
          icon: "/images/6a2a0b9584a439b9c7e7-df906ef95926.svg",
          alt: "Recurring invoices and subscription billing",
          text: "Recurring invoices and subscriptions for clients on retainer or maintenance plans.",
        },
        {
          icon: "/images/6a2a0b957ce0b3c81a8e-37f915fee871.svg",
          alt: "Payment deposits before the job starts",
          text: "Deposits before the job starts, to protect yourself on larger projects.",
        },
        {
          icon: "/images/6a2a0b957ce0b3c81a8e-7dfbef906554.svg",
          alt: "Multiple payment processors including Stripe and PayPal",
          text: "Multiple payment processors, Stripe, PayPal, Authorize.net, NMI, and Square all connect to the same system.",
        },
        {
          icon: "/images/6a2a0b97018172204511-1bb9352a16e9.svg",
          alt: "Payment workflow automation on payment or non-payment",
          text: "Workflow automation, trigger follow-up actions when a payment is made or missed, a thank-you, a review request, or a rebooking nudge.",
        },
        {
          icon: "/images/6a234d43fc95b245498f-93ff2c026c1a.svg",
          alt: "All payments logged to the CRM contact record",
          text: "Everything in your CRM, every payment, invoice, and reminder is attached to the customer record so your whole team can see the status.",
        },
      ],
    },
    {
      type: "split",
      title: "No app required, no new account for your customer",
      paragraphs: [
        "Your customer doesn't need to download anything or sign up for a service. They get a text, tap the link, and pay. The checkout page is fully branded to your business so it feels familiar, not like a random third-party request. This removes the biggest friction point in getting paid by text: customers trust it because it looks and feels like your business.",
      ],
      image: "/images/6a29ebfc1388fabc64b4-dcacc81f5dc6.webp",
      imageAlt: "Customer paying a text payment link with no app download and no account required",
      side: "right",
    },
    {
      type: "iconSteps",
      title: "Are SMS payment links safe?",
      intro:
        "Yes. A Viking payment link is as secure as any major online checkout, because the payment never happens inside the text or email itself. The message only carries a link. When the customer taps it, they land on a secure, encrypted checkout page hosted by a PCI-compliant processor, where the actual payment is handled. Here is what protects every transaction:",
      steps: [
        {
          icon: "/images/6a2b1639c53e51acc091-539eb609a397.svg",
          alt: "Text to pay HTTPS encryption.",
          title: "HTTPS encryption.",
          body: "Every payment link opens an https:// page with SSL/TLS encryption, so card details are protected in transit and can't be intercepted.",
        },
        {
          icon: "/images/6a2b1639240b96aa6e06-2871100fd198.svg",
          alt: "SMS payment link PCI-DSS compliance.",
          title: "PCI-DSS compliance.",
          body: "Payments run through PCI-compliant processors like Stripe, the highest standard for handling card data, so you stay compliant without the paperwork.",
        },
        {
          icon: "/images/6a2b1639baba791b894a-128f427858b0.svg",
          alt: "SMS payment link Tokenization.",
          title: "Tokenization.",
          body: "Card numbers are replaced with a secure token that is useless to anyone who intercepts it, and Viking never stores raw card data.",
        },
        {
          icon: "/images/6a2b1639983b31ac4a57-34b1bcbbbe32.svg",
          alt: "Text to pay Branded, verified sender.",
          title: "Branded, verified sender.",
          body: 'The link comes from your business name and the same number your customer already recognizes, not a random shortcode, which removes the "is this a scam?" hesitation.',
        },
      ],
      outro: "The result: customers pay with confidence, and you collect faster without taking on security risk.",
    },
    {
      type: "split",
      title: "Payments tied to your whole platform",
      paragraphs: [
        "This is the difference between a standalone payment tool and Viking. The SMS payment link lives inside the same platform as your missed call text back, AI appointment setter, all in one inbox, and review generation. So when a payment clears, your CRM can automatically send a review request, update the pipeline, and schedule the next service, all without you touching it.",
      ],
      image: "/images/6a29ebf668ff5700be47-e09bf0b12aa4.webp",
      imageAlt:
        "SMS payment link tied to the Viking Marketing CRM and platform, triggering automation after payment",
      side: "left",
      linkLabel: "Missed Call Text Back",
      linkHref: "/missed-call-text-back",
    },
    {
      type: "industryCards",
      title: "Built for every industry Viking serves",
      cards: [
        {
          icon: "/images/ind-dental.svg",
          alt: "Text to pay for dental practices",
          title: "Dental Practices",
          body: "Collect co-pays and outstanding balances by text after the appointment, before the patient leaves the parking lot.",
        },
        {
          icon: "/images/ind-medspa.svg",
          alt: "SMS payment link for med spas and aesthetics",
          title: "Med Spas & Aesthetics",
          body: "Take deposits for treatments upfront and collect balances by text after the appointment, no front-desk awkwardness.",
        },
        {
          icon: "/images/ind-gym.svg",
          alt: "Text to pay for gyms and fitness studios",
          title: "Gyms & Fitness Studios",
          body: "Collect membership dues and package payments automatically with recurring invoices, no monthly chasing.",
        },
        {
          icon: "/images/ind-home.svg",
          alt: "SMS payment link for home services and contractors",
          title: "Home Services & Contractors",
          body: "Send a text-to-pay link the moment you finish the job, before you drive away. Get paid for roofing, HVAC, plumbing, and electrical jobs the same day, not 30 days later.",
        },
        {
          icon: "/images/ind-realestate.svg",
          alt: "SMS payment link for real estate agents",
          title: "Real Estate Agents",
          body: "Collect inspection deposits and service fees quickly with a text link, without needing a card reader.",
        },
        {
          icon: "/images/ind-salon.svg",
          alt: "Text to pay for salons and barbershops",
          title: "Salons & Barbershops",
          body: "Send a payment link for no-shows or online bookings, and collect deposits before the appointment",
        },
      ],
    },
    {
      type: "local",
      title: "Built in Chandler, working for businesses coast to coast",
      paragraphs: [
        "Viking Marketing was built in Chandler, Arizona, helping local service businesses get paid without the chase. Real people, real support, your hours.",
      ],
    },
    { type: "reviews" },
  ],
  faqTitle: "SMS payment links, questions answered",
  faqContextLabel: "the SMS payment links",
  faqs: [
    {
      q: "What is an SMS payment link and how does it work?",
      a: "An SMS payment link is a secure URL sent to a customer by text message. When they tap it, a mobile-friendly checkout page opens where they pay by card, Apple Pay, or another method in a few seconds. The business gets paid immediately and the payment is confirmed. No app and no account are required on the customer's side. You can also send the same payment link by email.",
    },
    {
      q: "Can clients pay the invoice directly from what I send them?",
      a: "Yes. Whether you send by text or email, the customer pays straight from the link, no logging in, no separate portal, no back-and-forth. They tap, pay, and you both get a confirmation. Removing that friction is the single biggest reason text-to-pay gets you paid faster than a traditional invoice.",
    },
    {
      q: "Can I send invoices by text or does it have to be email?",
      a: "Both. Viking sends payment links and branded invoices by text, by email, or both at once, so the customer can pay from whichever they open first. Text usually gets the fastest response, but email is there for customers who prefer a paper trail.",
    },
    {
      q: "Is text-to-pay secure?",
      a: "Yes. Payment links use the same encryption and security standards as any online checkout, backed by PCI-compliant processors like Stripe, PayPal, and Authorize.net. The customer enters their card details on a secure hosted page, not in the text or email itself, and Viking never stores card numbers.",
    },
    {
      q: "How do I track unpaid invoices and follow up?",
      a: "Every invoice shows its status, sent, viewed, paid, or overdue, on the customer's record in your CRM. Automated reminders go out by text and email at the intervals you set, so unpaid invoices follow themselves up instead of relying on you to remember.",
    },
    {
      q: "Can I send payment reminders without being annoying?",
      a: "Yes. You control the timing and number of reminders, and they go out in your brand voice as a friendly nudge, not a nag. Because they are automated and spaced sensibly, customers get a helpful reminder rather than repeated manual chasing.",
    },
    {
      q: "Can I customize invoices with my company branding?",
      a: "Yes. Invoices and the checkout page carry your logo, colors, business name, line items, taxes, and terms, so the whole experience looks like your business, not a generic third-party request. That branding is also what makes customers trust and pay the link.",
    },
    {
      q: "Can I set up recurring invoices for monthly clients?",
      a: "Yes. For clients on retainers, maintenance plans, or memberships, you can set up recurring invoices and subscription billing that send and collect automatically each cycle, with no manual re-sending.",
    },
    {
      q: "Does it work with my existing payment processor?",
      a: "Viking connects to Stripe, PayPal, Authorize.net, NMI, and Square. If you already use one, connecting it takes a few minutes in settings. If not, Stripe is the fastest to set up and takes about ten minutes.",
    },
    {
      q: "How much does it cost?",
      a: "Standalone payment and invoicing tools often charge monthly fees plus per-transaction add-ons. Viking includes text-to-pay, invoicing, and reminders inside a full platform starting at $297 a month flat, alongside your CRM, missed call text back, and review tools, with no per-feature fees and no contracts (standard payment-processor transaction rates still apply).",
    },
  ],
  finalCta: {
    title: "Stop Waiting. Start Collecting.",
    body: "Your work is done. Getting paid should be too. Book a free demo and we will show you exactly how Viking sends payment links for your business.",
    ctaLabel: "Book a Free Demo",
    phoneNote: "and talk to a real person in Arizona.",
  },
};

export default data;
