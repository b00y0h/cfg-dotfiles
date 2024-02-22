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
var ITEMS = Array.from(Array(3).keys()).map((key) => {
  return {
    id: key,
    title: "Title " + key,
    subtitle: "Subtitle",
    accessory: "Accessory"
  };
});
function Command() {
  return /* @__PURE__ */ _jsx(import_api.List, null, ITEMS.map((item) => /* @__PURE__ */ _jsx(import_api.List.Item, {
    key: item.id,
    icon: "list-icon.png",
    title: item.title,
    subtitle: item.subtitle,
    accessories: [{ icon: import_api.Icon.Text, text: item.accessory }],
    actions: /* @__PURE__ */ _jsx(import_api.ActionPanel, null, /* @__PURE__ */ _jsx(import_api.Action.CopyToClipboard, {
      content: item.title
    }))
  })));
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc291cmNlL21pc2MvcmF5Y2FzdC1vcmcvZXh0ZW5zaW9ucy9oZWxsby13aWxkLXdvcmxkL3NyYy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFjdGlvblBhbmVsLCBBY3Rpb24sIEljb24sIExpc3QgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbmNvbnN0IElURU1TID0gQXJyYXkuZnJvbShBcnJheSgzKS5rZXlzKCkpLm1hcCgoa2V5KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGtleSxcbiAgICB0aXRsZTogXCJUaXRsZSBcIiArIGtleSxcbiAgICBzdWJ0aXRsZTogXCJTdWJ0aXRsZVwiLFxuICAgIGFjY2Vzc29yeTogXCJBY2Nlc3NvcnlcIixcbiAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tYW5kKCkge1xuICByZXR1cm4gKFxuICAgIDxMaXN0PlxuICAgICAge0lURU1TLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIGljb249XCJsaXN0LWljb24ucG5nXCJcbiAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICBhY2Nlc3Nvcmllcz17W3sgaWNvbjogSWNvbi5UZXh0LCB0ZXh0OiBpdGVtLmFjY2Vzc29yeSB9XX1cbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvbi5Db3B5VG9DbGlwYm9hcmQgY29udGVudD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZ0Q7QUFFaEQsSUFBTSxRQUFRLE1BQU0sS0FBSyxNQUFNLEdBQUcsUUFBUSxJQUFJLENBQUMsUUFBUTtBQUNyRCxTQUFPO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixPQUFPLFdBQVc7QUFBQSxJQUNsQixVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUE7QUFBQTtBQUlBLG1CQUFtQjtBQUNoQyxTQUNFLHFCQUFDLGlCQUFELE1BQ0csTUFBTSxJQUFJLENBQUMsU0FDVixxQkFBQyxnQkFBSyxNQUFOO0FBQUEsSUFDRSxLQUFLLEtBQUs7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE9BQU8sS0FBSztBQUFBLElBQ1osVUFBVSxLQUFLO0FBQUEsSUFDZixhQUFhLENBQUMsRUFBRSxNQUFNLGdCQUFLLE1BQU0sTUFBTSxLQUFLO0FBQUEsSUFDNUMsU0FDRSxxQkFBQyx3QkFBRCxNQUNFLHFCQUFDLGtCQUFPLGlCQUFSO0FBQUEsTUFBd0IsU0FBUyxLQUFLO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
