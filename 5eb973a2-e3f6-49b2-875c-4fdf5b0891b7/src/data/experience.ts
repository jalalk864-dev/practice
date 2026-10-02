import { HeadsetIcon, LandmarkIcon, PillIcon, ShieldCheckIcon } from 'lucide-react';
import type { Role, SectorId } from '../types/profile';

export const sectors: Record<SectorId, {label: string;color: string;icon: typeof PillIcon;}> = {
  pharma: { label: 'Pharmaceutical', color: '#D9BC82', icon: PillIcon },
  operations: { label: 'Call Centre Operations', color: '#A9CBEA', icon: HeadsetIcon },
  takaful: { label: 'Takaful & Bancassurance', color: '#9ED8C6', icon: LandmarkIcon },
  insurance: { label: 'Life Insurance & Bancassurance', color: '#E4E6EC', icon: ShieldCheckIcon }
};

export const experience: Role[] = [
{
  id: 'pharma-bez',
  role: 'Sales Manager',
  company: 'Pharma Bez Pvt Ltd',
  location: 'Peshawar, Pakistan',
  period: 'April 2024 – Present',
  start: [2024, 4],
  end: null,
  sector: 'pharma',
  bullets: [
  'Lead sales operations across the Khyber Pakhtunkhwa territory, growing year-over-year revenue by 35–40%.',
  'Direct and coach a team of 20 sales representatives, consistently achieving 100% of annual sales targets while expanding penetration in key accounts.',
  'Design and execute data-driven sales strategies and promotional campaigns that strengthened engagement and relationship-building with new customers.'],

  metrics: [
  { value: '35–40%', label: 'YoY revenue growth' },
  { value: '20', label: 'Sales representatives' },
  { value: '100%', label: 'Annual targets' }]

},
{
  id: 'beehub',
  role: 'Manager, Call Center Operations',
  company: 'BEEHUB Call Center Pvt Ltd',
  location: 'Lahore, Pakistan',
  period: 'February 2020 – March 2024',
  start: [2020, 2],
  end: [2024, 3],
  sector: 'operations',
  bullets: [
  'Managed end-to-end call centre operations and workforce planning for a team of 120 agents.',
  'Led, coached, and developed customer service and sales teams, meeting 100% of quality benchmarks and improving training delivery, sales performance, and hiring outcomes by up to 50%.',
  'Directed operational planning and process improvement initiatives that reduced costs by 25–30% and improved staff punctuality and overall efficiency.'],

  metrics: [
  { value: '120', label: 'Agents' },
  { value: '25–30%', label: 'Cost reduction' },
  { value: 'Up to 50%', label: 'Performance uplift' }]

},
{
  id: 'pak-qatar',
  role: 'Sales Support Officer',
  company: 'Pak-Qatar Takaful',
  location: 'Peshawar, Pakistan',
  period: 'June 2019 – 2020',
  start: [2019, 6],
  end: [2020, 1],
  sector: 'takaful',
  bullets: [
  'Supported bancassurance operations across six Islamic banking partners.',
  'Coordinated with partner banks to deliver seamless sales operations and customer service.',
  'Managed policy documentation, client onboarding, and after-sales support, consistently achieving 90–95% of assigned sales targets.'],

  metrics: [
  { value: '6', label: 'Banking partners' },
  { value: '90–95%', label: 'Sales targets' }],

  partners: ['Faysal Bank', 'Askari Bank', 'Dubai Islamic Bank', 'Al Baraka Bank', 'BankIslami', 'MCB Islamic Bank']
},
{
  id: 'efu-faysal',
  role: 'Executive Coordinator',
  company: 'EFU Life Assurance Ltd',
  partnership: 'in partnership with Faysal Bank',
  location: 'Peshawar, Pakistan',
  period: 'November 2017 – January 2019',
  start: [2017, 11],
  end: [2019, 1],
  sector: 'insurance',
  bullets: [
  'Facilitated bancassurance operations and client engagement in a strategic partnership with Faysal Bank.',
  'Managed policy administration, customer relationship management, and sales support coordination to improve operational efficiency and service quality.',
  'Collaborated with cross-functional teams to drive business growth, contributing to 25–30% growth against assigned targets.'],

  metrics: [{ value: '25–30%', label: 'Growth vs. targets' }],
  partners: ['Faysal Bank']
},
{
  id: 'jubilee',
  role: 'Team Leader',
  company: 'Jubilee Life Insurance',
  partnership: 'in partnership with Bank Alfalah',
  location: 'Peshawar, Pakistan',
  period: 'January 2017 – October 2017',
  start: [2017, 1],
  end: [2017, 10],
  sector: 'insurance',
  bullets: [
  'Led sales and operational activities in partnership with Bank Alfalah, managing a team of 20.',
  'Oversaw team performance, client relationship management, and achievement of business growth targets.',
  'Managed operations across three business lines while maintaining high service standards and operational efficiency.'],

  metrics: [
  { value: '20', label: 'Team members' },
  { value: '3', label: 'Business lines' }],

  partners: ['Bank Alfalah']
},
{
  id: 'efu-bop-ubl',
  role: 'Executive Coordinator',
  company: 'EFU Life Assurance Ltd',
  partnership: 'Bank of Punjab & United Bank Limited',
  location: 'Peshawar, Pakistan',
  period: 'February 2016 – February 2017',
  start: [2016, 2],
  end: [2017, 2],
  sector: 'insurance',
  bullets: [
  'Coordinated insurance operations within The Bank of Punjab and United Bank Limited.',
  'Managed executive coordination, client relations, and administrative operations, ensuring effective communication between banking and insurance stakeholders.',
  'Demonstrated strong organizational, interpersonal, and multitasking abilities in a fast-paced corporate environment.'],

  metrics: [],
  partners: ['The Bank of Punjab', 'United Bank Limited']
}];