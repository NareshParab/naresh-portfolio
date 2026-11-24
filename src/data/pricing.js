import { Monitor, PanelsTopLeft, Layers3, Code2, Workflow } from 'lucide-react';

export const pricingPlans = [
  {
    id: 'web-development',
    title: 'Website Development',
    icon: Monitor,
    price: '7,999',
    summary: 'A polished, multi-page website for your business.',
    includes: [
      'Up to 6 pages: Home, About, Services, Projects, FAQs and Contact',
      'Responsive layouts for mobile, tablet and desktop',
      'Custom styling based on your brand and supplied content',
      'Contact form with basic on-page SEO',
      'Launch-ready deployment setup',
    ],
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    icon: PanelsTopLeft,
    price: '5,999',
    summary: 'A focused page built around one offer or campaign.',
    includes: [
      'One responsive, conversion-focused page',
      'Hero, benefits, offer and social-proof sections',
      'Clear calls to action and contact or lead form',
      'Basic metadata and performance-conscious build',
      'One revision round after the first draft',
    ],
  },
  {
    id: 'saas-product',
    title: 'SaaS Product',
    icon: Layers3,
    price: '14,999',
    summary: 'A tightly scoped first slice to validate a product idea.',
    includes: [
      'One core user journey or MVP feature',
      'Sign-up and login for one user type',
      'A simple dashboard connected to a data source',
      'Responsive working preview for early feedback',
      'Basic setup notes and handover',
    ],
  },
  {
    id: 'software-product',
    title: 'Software Product',
    icon: Code2,
    price: '15,999',
    summary: 'A small custom tool for one focused business workflow.',
    includes: [
      'Up to 3 core screens for one user type',
      'One main data workflow with create, view and update actions',
      'Input validation and a practical overview screen',
      'Responsive interface and test deployment',
      'Source handover with basic setup guidance',
    ],
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    icon: Workflow,
    price: '9,999',
    summary: 'Less repetitive work through one connected workflow.',
    includes: [
      'Walkthrough and mapping of one existing process',
      'One workflow connecting up to 2 apps or tools',
      'Example: form submission to a sheet or CRM and alert',
      'Field mapping, basic error checks and test run',
      'Workflow handover and usage notes',
    ],
  },
];
