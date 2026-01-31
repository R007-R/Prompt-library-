
import React from 'react';
import { LayoutGrid, Megaphone, Code, Palette, PenTool, Database, Briefcase, Zap } from 'lucide-react';
import { Category, Prompt, ToolType } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Marketing', slug: 'marketing', icon: 'Megaphone', count: 124 },
  { id: '2', name: 'Coding', slug: 'coding', icon: 'Code', count: 86 },
  { id: '3', name: 'Art & Design', slug: 'art-design', icon: 'Palette', count: 210 },
  { id: '4', name: 'Content Writing', slug: 'writing', icon: 'PenTool', count: 145 },
  { id: '5', name: 'Data Science', slug: 'data', icon: 'Database', count: 42 },
  { id: '6', name: 'Business', slug: 'business', icon: 'Briefcase', count: 98 },
  { id: '7', name: 'Productivity', slug: 'productivity', icon: 'Zap', count: 75 },
  { id: '8', name: 'SEO', slug: 'seo', icon: 'LayoutGrid', count: 63 },
];

export const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Megaphone': <Megaphone className="w-6 h-6" />,
  'Code': <Code className="w-6 h-6" />,
  'Palette': <Palette className="w-6 h-6" />,
  'PenTool': <PenTool className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
  'Briefcase': <Briefcase className="w-6 h-6" />,
  'Zap': <Zap className="w-6 h-6" />,
  'LayoutGrid': <LayoutGrid className="w-6 h-6" />,
};

export const MOCK_PROMPTS: Prompt[] = [
  {
    id: 'p1',
    title: 'Advanced SaaS Growth Strategist',
    description: 'A comprehensive prompt to generate 30-day growth plans for B2B SaaS startups.',
    body: 'Act as a Senior SaaS Growth Consultant with 15 years of experience in Silicon Valley. Your goal is to analyze the following product: [PRODUCT_NAME]. Create a detailed 30-day go-to-market strategy focusing on PLG (Product Led Growth), content flywheels, and specific outbound automation tactics. Include KPIs for each week.',
    category: 'marketing',
    tags: ['SaaS', 'Growth', 'Strategy'],
    tools: ['ChatGPT', 'Claude'],
    isPremium: true,
    difficulty: 'Advanced',
    instructions: 'Replace [PRODUCT_NAME] with your actual startup name and provide a brief description of your target audience for best results.',
    exampleOutput: 'Week 1: Foundations & Quick Wins... Week 2: Content Multipliers...',
    createdAt: '2024-03-20',
    slug: 'advanced-saas-growth-strategist'
  },
  {
    id: 'p2',
    title: 'Modern Abstract Architecture Generator',
    description: 'Generate stunning, hyper-realistic architectural renders with a focus on minimalism and light.',
    body: 'Hyper-realistic architectural render, futuristic minimalist museum, white curves, golden hour lighting, cinematic composition, depth of field, 8k resolution, Unreal Engine 5 style --ar 16:9 --v 6.0',
    category: 'art-design',
    tags: ['Architecture', 'Minimalism', '3D'],
    tools: ['Midjourney'],
    isPremium: false,
    difficulty: 'Intermediate',
    instructions: 'Best used with Midjourney V6. Adjust the --ar parameter for different orientations.',
    exampleOutput: '[Visual results vary based on AI generator seeds]',
    createdAt: '2024-03-22',
    slug: 'modern-abstract-architecture'
  },
  {
    id: 'p3',
    title: 'Python React Boilerplate Generator',
    description: 'Instantly generate full-stack project structures with FastAPI and React.',
    body: 'Write a bash script that scaffolds a full-stack project with a FastAPI backend (Python 3.10+) and a Vite + React + Tailwind frontend. Include Dockerfile for both services and a docker-compose.yml file.',
    category: 'coding',
    tags: ['Python', 'React', 'Fullstack', 'DevOps'],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    isPremium: true,
    difficulty: 'Advanced',
    instructions: 'Ensure you have Docker installed. Run the output script in an empty directory.',
    exampleOutput: '#!/bin/bash\nmkdir backend frontend...\n',
    createdAt: '2024-03-25',
    slug: 'python-react-boilerplate'
  },
  {
    id: 'p4',
    title: 'Viral Twitter Thread Planner',
    description: 'Convert long-form blog posts into high-engagement Twitter threads with hooks.',
    body: 'I will provide a blog post content. Your task is to extract the 7 most impactful insights and format them into a 10-tweet Twitter thread. Tweet 1 must be a viral hook. Tweet 10 must be a Call to Action. Use psychology-backed copywriting frameworks.',
    category: 'writing',
    tags: ['Twitter', 'Social Media', 'Copywriting'],
    tools: ['ChatGPT', 'Gemini'],
    isPremium: false,
    difficulty: 'Beginner',
    instructions: 'Paste your blog content directly after the prompt.',
    exampleOutput: 'Tweet 1: Most people think X is true. They are wrong. Here is why (Thread) 🧵...',
    createdAt: '2024-03-26',
    slug: 'viral-twitter-thread-planner'
  },
  {
    id: 'p5',
    title: 'SEO Topical Map Generator',
    description: 'Build a massive topical authority map for any niche to dominate Google rankings.',
    body: 'Create a topical map for the niche: [NICHE]. Organize the topics into a hierarchy of pillars, clusters, and long-tail keywords. Include search intent (Informational, Transactional) for each keyword and suggest internal linking structures.',
    category: 'seo',
    tags: ['SEO', 'Content Strategy', 'Authority'],
    tools: ['ChatGPT', 'Claude'],
    isPremium: true,
    difficulty: 'Intermediate',
    instructions: 'Specify your main niche/topic in place of [NICHE].',
    exampleOutput: 'Pillar: Home Office Design\n - Cluster: Ergonomic Chairs\n - Cluster: Lighting...',
    createdAt: '2024-03-28',
    slug: 'seo-topical-map'
  }
];
