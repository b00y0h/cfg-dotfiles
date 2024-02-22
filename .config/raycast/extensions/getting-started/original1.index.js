var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => Command
});
var import_api = require("@raycast/api");
function Command() {
  return /* @__PURE__ */ _jsx(import_api.List, null, /* @__PURE__ */ _jsx(import_api.List.Section, {
    title: "Basics"
  }, /* @__PURE__ */ _jsx(LinkListItem, {
    title: "Familiarize yourself with Raycast",
    link: "https://raycast.com/manual"
  }), /* @__PURE__ */ _jsx(LinkListItem, {
    title: "Install extensions from our public store",
    link: "https://www.raycast.com/store"
  }), /* @__PURE__ */ _jsx(LinkListItem, {
    title: "Build your own extensions with our API",
    link: "https://developers.raycast.com"
  }), /* @__PURE__ */ _jsx(LinkListItem, {
    title: "Invite your teammates",
    link: "raycast://organizations/eab/manage"
  })), /* @__PURE__ */ _jsx(import_api.List.Section, {
    title: "Next Steps"
  }, /* @__PURE__ */ _jsx(LinkListItem, {
    title: "Join the Raycast community",
    link: "https://raycast.com/community"
  }), /* @__PURE__ */ _jsx(LinkListItem, {
    title: "Stay up to date via Twitter",
    link: "https://twitter.com/raycastapp"
  })));
}
function LinkListItem(props) {
  return /* @__PURE__ */ _jsx(import_api.List.Item, {
    title: props.title,
    icon: import_api.Icon.Link,
    accessories: [{ text: props.link }],
    actions: /* @__PURE__ */ _jsx(import_api.ActionPanel, null, /* @__PURE__ */ _jsx(import_api.Action.OpenInBrowser, {
      url: props.link
    }), /* @__PURE__ */ _jsx(import_api.Action.CopyToClipboard, {
      title: "Copy Link",
      content: props.link
    }))
  });
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc291cmNlL21pc2MvcmF5Y2FzdC1vcmcvcmF5Y2FzdC1leHRlbnNpb25zL2dldHRpbmctc3RhcnRlZC9zcmMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBY3Rpb25QYW5lbCwgQWN0aW9uLCBJY29uLCBMaXN0IH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tYW5kKCkge1xuICByZXR1cm4gKFxuICAgIDxMaXN0PlxuICAgICAgPExpc3QuU2VjdGlvbiB0aXRsZT1cIkJhc2ljc1wiPlxuICAgICAgICA8TGlua0xpc3RJdGVtIHRpdGxlPVwiRmFtaWxpYXJpemUgeW91cnNlbGYgd2l0aCBSYXljYXN0XCIgbGluaz1cImh0dHBzOi8vcmF5Y2FzdC5jb20vbWFudWFsXCIgLz5cbiAgICAgICAgPExpbmtMaXN0SXRlbSB0aXRsZT1cIkluc3RhbGwgZXh0ZW5zaW9ucyBmcm9tIG91ciBwdWJsaWMgc3RvcmVcIiBsaW5rPVwiaHR0cHM6Ly93d3cucmF5Y2FzdC5jb20vc3RvcmVcIiAvPlxuICAgICAgICA8TGlua0xpc3RJdGVtIHRpdGxlPVwiQnVpbGQgeW91ciBvd24gZXh0ZW5zaW9ucyB3aXRoIG91ciBBUElcIiBsaW5rPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLnJheWNhc3QuY29tXCIgLz5cbiAgICAgICAgPExpbmtMaXN0SXRlbSB0aXRsZT1cIkludml0ZSB5b3VyIHRlYW1tYXRlc1wiIGxpbms9XCJyYXljYXN0Oi8vb3JnYW5pemF0aW9ucy9lYWIvbWFuYWdlXCIgLz5cbiAgICAgIDwvTGlzdC5TZWN0aW9uPlxuICAgICAgPExpc3QuU2VjdGlvbiB0aXRsZT1cIk5leHQgU3RlcHNcIj5cbiAgICAgICAgPExpbmtMaXN0SXRlbSB0aXRsZT1cIkpvaW4gdGhlIFJheWNhc3QgY29tbXVuaXR5XCIgbGluaz1cImh0dHBzOi8vcmF5Y2FzdC5jb20vY29tbXVuaXR5XCIgLz5cbiAgICAgICAgPExpbmtMaXN0SXRlbSB0aXRsZT1cIlN0YXkgdXAgdG8gZGF0ZSB2aWEgVHdpdHRlclwiIGxpbms9XCJodHRwczovL3R3aXR0ZXIuY29tL3JheWNhc3RhcHBcIiAvPlxuICAgICAgPC9MaXN0LlNlY3Rpb24+XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5mdW5jdGlvbiBMaW5rTGlzdEl0ZW0ocHJvcHM6IHsgdGl0bGU6IHN0cmluZzsgbGluazogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdC5JdGVtXG4gICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICBpY29uPXtJY29uLkxpbmt9XG4gICAgICBhY2Nlc3Nvcmllcz17W3sgdGV4dDogcHJvcHMubGluayB9XX1cbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgPEFjdGlvbi5PcGVuSW5Ccm93c2VyIHVybD17cHJvcHMubGlua30gLz5cbiAgICAgICAgICA8QWN0aW9uLkNvcHlUb0NsaXBib2FyZCB0aXRsZT1cIkNvcHkgTGlua1wiIGNvbnRlbnQ9e3Byb3BzLmxpbmt9IC8+XG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdEO0FBRWpDLG1CQUFtQjtBQUNoQyxTQUNFLHFCQUFDLGlCQUFELE1BQ0UscUJBQUMsZ0JBQUssU0FBTjtBQUFBLElBQWMsT0FBTTtBQUFBLEtBQ2xCLHFCQUFDLGNBQUQ7QUFBQSxJQUFjLE9BQU07QUFBQSxJQUFvQyxNQUFLO0FBQUEsTUFDN0QscUJBQUMsY0FBRDtBQUFBLElBQWMsT0FBTTtBQUFBLElBQTJDLE1BQUs7QUFBQSxNQUNwRSxxQkFBQyxjQUFEO0FBQUEsSUFBYyxPQUFNO0FBQUEsSUFBeUMsTUFBSztBQUFBLE1BQ2xFLHFCQUFDLGNBQUQ7QUFBQSxJQUFjLE9BQU07QUFBQSxJQUF3QixNQUFLO0FBQUEsT0FFbkQscUJBQUMsZ0JBQUssU0FBTjtBQUFBLElBQWMsT0FBTTtBQUFBLEtBQ2xCLHFCQUFDLGNBQUQ7QUFBQSxJQUFjLE9BQU07QUFBQSxJQUE2QixNQUFLO0FBQUEsTUFDdEQscUJBQUMsY0FBRDtBQUFBLElBQWMsT0FBTTtBQUFBLElBQThCLE1BQUs7QUFBQTtBQUFBO0FBTS9ELHNCQUFzQixPQUF3QztBQUM1RCxTQUNFLHFCQUFDLGdCQUFLLE1BQU47QUFBQSxJQUNFLE9BQU8sTUFBTTtBQUFBLElBQ2IsTUFBTSxnQkFBSztBQUFBLElBQ1gsYUFBYSxDQUFDLEVBQUUsTUFBTSxNQUFNO0FBQUEsSUFDNUIsU0FDRSxxQkFBQyx3QkFBRCxNQUNFLHFCQUFDLGtCQUFPLGVBQVI7QUFBQSxNQUFzQixLQUFLLE1BQU07QUFBQSxRQUNqQyxxQkFBQyxrQkFBTyxpQkFBUjtBQUFBLE1BQXdCLE9BQU07QUFBQSxNQUFZLFNBQVMsTUFBTTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
