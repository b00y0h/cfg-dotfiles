// -- hyper-stylesheet-hash:128569e017c92721d52dee4a814c9cf1 --
module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: "canary",

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Hack Nerd Font", monospace',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: "BLOCK",

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: "0px",

    shell: "/bin/zsh",

    activeTab: "🚀",

    // need padding for hyperline
    padding: "0 0 1.8rem 0",

    wickedBorder: true,
    // change the color here
    wickedBorderColor: "#ffc600",
    lineHeight: 1.3,
    hyperTabs: {
      trafficButtons: true,
      border: true,
      tabIcons: false,
      tabIconsColored: true,
      activityColor: "salmon",
    },
    hyperline: {
      plugins: ["hostname", "ip", "cpu", "memory", "battery"],
      padding: ".5rem .5rem 1.8rem .5rem",
    },
  },

  plugins: [
    "hyperterm-cobalt2-theme",
    "hyper-search",
    "hyper-tabs-enhanced",
    "hyperline",
    "hypercwd",
    "hyper-font-ligatures",
    "hyper-active-tab",
    "hyper-stylesheet",
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
