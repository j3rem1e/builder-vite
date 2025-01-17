module.exports = {
  framework: '@storybook/react',
  stories: [
    { directory: '../../app/stories', files: '*.stories.mdx' },
    { directory: '../../app/stories', files: '*.stories.jsx', titlePrefix: 'Example' },
  ],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};
