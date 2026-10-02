import type { Highlight } from '../types/profile';

export const profile = {
  name: 'Muhammad Jalal Khan',
  title: 'Sales & Business Development Manager',
  location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  phoneDisplay: '+92-334-9171817',
  phoneHref: 'tel:+923349171817',
  whatsappHref:
  'https://wa.me/923349171817?text=' +
  encodeURIComponent('Hello Muhammad, I found your website and would like to connect.'),
  email: 'jalalk864@gmail.com',
  emailHref: 'mailto:jalalk864@gmail.com?subject=' + encodeURIComponent('Enquiry via your website'),
  summary:
  'Results-driven Sales and Business Development professional with over eight years of progressive experience across the pharmaceutical, insurance, and bancassurance sectors in Pakistan. Proven track record of leading sales and service teams, exceeding revenue and performance targets, and building strong working relationships with financial institutions, healthcare partners, and clients.',
  strengths:
  'Skilled in team leadership, staff coaching, operational planning, and customer relationship management, with strong written and spoken English.',
  goal: 'Seeking to bring sales management and team leadership experience to an employer in New Brunswick, Canada.'
};

export const portraits = {
  hero: "/suit_04.png",
  about: "/suit_05.png",
  aboutSecondary: "/suit_08.png",
  experience: "/suit_01.png",
  education: "/suit_02.png",
  skills: "/suit_06.png",
  contact: "/suit_07.png",
  closing: "/suit_03.png"
};

export const competencyGroups = [
{
  title: 'Commercial',
  items: ['Sales & Business Development', 'Client Relationship Management', 'Negotiation', 'Digital Marketing']
},
{
  title: 'People',
  items: ['Team Leadership & Coaching', 'Staff Training & Performance Management']
},
{
  title: 'Operations',
  items: ['Operations & Process Improvement', 'Bancassurance Operations', 'Compliance & Reporting']
}];


export const technicalSkills = [
{ name: 'Microsoft Excel', note: 'Advanced', icon: 'excel' },
{ name: 'Microsoft Word', icon: 'word' },
{ name: 'PowerPoint', icon: 'powerpoint' },
{ name: 'Outlook', icon: 'outlook' },
{ name: 'Power BI', icon: 'powerbi' },
{ name: 'CRM Software', note: 'Salesforce · HubSpot · MS Dynamics', icon: 'crm' },
{ name: 'Google Workspace', icon: 'google' },
{ name: 'SAP', icon: 'sap' }] as
const;

export const languages = ['English', 'Urdu', 'Pashto'];

export const education = [
{ degree: 'Master of Arts', institution: 'University of Peshawar, Pakistan', period: '2015 – 2016' },
{ degree: 'Bachelor of Arts', institution: 'University of Peshawar, Pakistan', period: '2012 – 2014' }];


export const highlights: Highlight[] = [
{ value: '35–40%', label: 'Year-over-year revenue growth', context: 'Sales Manager · Pharma Bez · Khyber Pakhtunkhwa territory', fill: 40 },
{ value: '100%', label: 'Of annual sales targets achieved, consistently', context: 'Sales Manager · Pharma Bez · team of 20', fill: 100 },
{ value: '120', label: 'Call centre agents managed end to end', context: 'Manager, Call Center Operations · BEEHUB' },
{ value: '100%', label: 'Of quality benchmarks met', context: 'Manager, Call Center Operations · BEEHUB', fill: 100 },
{ value: 'Up to 50%', label: 'Improvement in training delivery, sales performance and hiring outcomes', context: 'Manager, Call Center Operations · BEEHUB', fill: 50 },
{ value: '25–30%', label: 'Reduction in operating costs', context: 'Manager, Call Center Operations · BEEHUB', fill: 30 },
{ value: '6', label: 'Islamic banking partners supported', context: 'Sales Support Officer · Pak-Qatar Takaful' },
{ value: '90–95%', label: 'Of assigned sales targets achieved, consistently', context: 'Sales Support Officer · Pak-Qatar Takaful', fill: 95 },
{ value: '25–30%', label: 'Growth contributed against assigned targets', context: 'Executive Coordinator · EFU Life Assurance (Faysal Bank)', fill: 30 }];