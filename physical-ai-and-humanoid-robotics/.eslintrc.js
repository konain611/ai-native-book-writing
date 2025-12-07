module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true, // Assuming Jest might be used for testing later
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@docusaurus/recommended', // Docusaurus specific rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    // Add custom rules here
    'react/react-in-jsx-scope': 'off', // Not needed for new React versions with automatic JSX runtime
    'react/jsx-uses-react': 'off', // Not needed for new React versions with automatic JSX runtime
  },
  overrides: [
    {
      // Configuration for MDX files
      files: ['*.mdx'],
      parser: 'eslint-plugin-mdx', // Use mdx plugin for MDX files
      extends: [
        'plugin:mdx/recommended',
        // 'plugin:mdx/prettier', // Using @docusaurus/prettier-preset might handle this
      ],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'] }],
        'prettier/prettier': 'off', // Prettier will handle MDX formatting, so turn off ESLint Prettier rule
        // Other MDX-specific rules can go here
      },
    },
  ],
};