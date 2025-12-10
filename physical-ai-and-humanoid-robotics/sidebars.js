// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part 1: Foundations',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Foundations of Physical AI',
          link: {
            type: 'doc',
            id: 'part-1/chapter-1',
          },
          items: ['part-1/chapter-1'],
        },
        {
          type: 'category',
          label: 'Chapter 2: Robot Kinematics and Dynamics',
          link: {
            type: 'doc',
            id: 'part-1/chapter-2',
          },
          items: ['part-1/chapter-2'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 2: Core Components',
      items: [
        {
          type: 'category',
          label: 'Chapter 3: Sensors and Perception',
          link: {
            type: 'doc',
            id: 'part-2/chapter-3',
          },
          items: ['part-2/chapter-3'],
        },
        {
          type: 'category',
          label: 'Chapter 4: Actuators and Motion Control',
          link: {
            type: 'doc',
            id: 'part-2/chapter-4',
          },
          items: ['part-2/chapter-4'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Navigation and Interaction',
      items: [
        {
          type: 'category',
          label: 'Chapter 5: Robot Navigation and Path Planning',
          link: {
            type: 'doc',
            id: 'part-3/chapter-5',
          },
          items: ['part-3/chapter-5'],
        },
        {
          type: 'category',
          label: 'Chapter 6: Human-Robot Interaction (HRI)',
          link: {
            type: 'doc',
            id: 'part-3/chapter-6',
          },
          items: ['part-3/chapter-6'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 4: Core Disciplines in Humanoid Robotics',
      items: [
        {
          type: 'category',
          label: 'Chapter 7: Locomotion and Mobility',
          link: {
            type: 'doc',
            id: 'part-4/chapter-7',
          },
          items: ['part-4/chapter-7'],
        },
        {
          type: 'category',
          label: 'Chapter 8: Manipulation and Grasping',
          link: {
            type: 'doc',
            id: 'part-4/chapter-8',
          },
          items: ['part-4/chapter-8'],
        },
        {
          type: 'category',
          label: 'Chapter 9: Human-Robot Interaction (HRI)',
          link: {
            type: 'doc',
            id: 'part-4/chapter-9',
          },
          items: ['part-4/chapter-9'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 5: Advanced AI and Future Directions',
      items: [
        {
          type: 'category',
          label: 'Chapter 10: AI Architectures for Robotics',
          link: {
            type: 'doc',
            id: 'part-5/chapter-10',
          },
          items: ['part-5/chapter-10'],
        },
        {
          type: 'category',
          label: 'Chapter 11: Navigation and SLAM',
          link: {
            type: 'doc',
            id: 'part-5/chapter-11',
          },
          items: ['part-5/chapter-11'],
        },
        {
          type: 'category',
          label: 'Chapter 12: The Future of Humanoid Robotics',
          link: {
            type: 'doc',
            id: 'part-5/chapter-12',
          },
          items: ['part-5/chapter-12'],
        },
      ],
    },
  ],
};

export default sidebars;
