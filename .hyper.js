module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'canary',

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Hack Nerd Font", monospace',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '0px',

    shell: '/bin/zsh',

    wickedBorder: true,
    // change the color here
    wickedBorderColor: '#ffc600',

    lineHeight: 1.3
  },

  plugins: [
    'hyperterm-cobalt2-theme',
    'hyper-search'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
