// -- hyper-stylesheet-hash:d0e6223a61c9405f87c8ab655a2396b9 --
module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',
    // webGLRenderer: false,

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Hack Nerd Font", monospace',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '0px',

    // shell: '/bin/zsh',

    activeTab: '',

    // need padding for hyperline
    padding: '0 0 2rem 0',

    wickedBorder: true,
    // change the color here
    wickedBorderColor: '#ff0000',
    lineHeight: 1.3,
    hyperTabs: {
      // trafficButtons: true,
      border: true,
      tabIcons: false,
      tabIconsColored: true,
      activityColor: 'salmon',
    },
    hyperline: {
      plugins: ['hostname', 'ip', 'cpu', 'memory', 'battery'],
      padding: '.5rem .5rem 1.8rem .5rem',
    },
  },

  plugins: [
    'hyperline',
    'hypercwd',
    'hyper-font-ligatures',
    'hyper-active-tab',
    'hyper-stylesheet',
    // "hyperterm-cobalt2-theme",
    'hyper-tabs-enhanced',
    'hyper-material-theme',
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
