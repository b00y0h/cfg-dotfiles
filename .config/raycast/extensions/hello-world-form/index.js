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
  function handleSubmit(values) {
    console.log(values);
    (0, import_api.showToast)({ title: "Submitted form", message: "See logs for submitted values" });
  }
  return /* @__PURE__ */ _jsx(import_api.Form, {
    actions: /* @__PURE__ */ _jsx(import_api.ActionPanel, null, /* @__PURE__ */ _jsx(import_api.Action.SubmitForm, {
      onSubmit: handleSubmit
    }))
  }, /* @__PURE__ */ _jsx(import_api.Form.Description, {
    text: "This form showcases all available form elements."
  }), /* @__PURE__ */ _jsx(import_api.Form.TextField, {
    id: "textfield",
    title: "Text field",
    placeholder: "Enter text",
    defaultValue: "Raycast"
  }), /* @__PURE__ */ _jsx(import_api.Form.TextArea, {
    id: "textarea",
    title: "Text area",
    placeholder: "Enter multi-line text"
  }), /* @__PURE__ */ _jsx(import_api.Form.Separator, null), /* @__PURE__ */ _jsx(import_api.Form.DatePicker, {
    id: "datepicker",
    title: "Date picker"
  }), /* @__PURE__ */ _jsx(import_api.Form.Checkbox, {
    id: "checkbox",
    title: "Checkbox",
    label: "Checkbox Label",
    storeValue: true
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown, {
    id: "dropdown",
    title: "Dropdown"
  }, /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "dropdown-item",
    title: "Dropdown Item"
  })), /* @__PURE__ */ _jsx(import_api.Form.TagPicker, {
    id: "tokeneditor",
    title: "Tag picker"
  }, /* @__PURE__ */ _jsx(import_api.Form.TagPicker.Item, {
    value: "tagpicker-item",
    title: "Tag Picker Item"
  })));
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc291cmNlL21pc2MvcmF5Y2FzdC1vcmcvZXh0ZW5zaW9ucy9oZWxsby13b3JsZC1mb3JtL3NyYy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEZvcm0sIEFjdGlvblBhbmVsLCBBY3Rpb24sIHNob3dUb2FzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcblxudHlwZSBWYWx1ZXMgPSB7XG4gIHRleHRmaWVsZDogc3RyaW5nO1xuICB0ZXh0YXJlYTogc3RyaW5nO1xuICBkYXRlcGlja2VyOiBEYXRlO1xuICBjaGVja2JveDogYm9vbGVhbjtcbiAgZHJvcGRvd246IHN0cmluZztcbiAgdG9rZW5lZGl0b3I6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWFuZCgpIHtcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHZhbHVlczogVmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICBzaG93VG9hc3QoeyB0aXRsZTogXCJTdWJtaXR0ZWQgZm9ybVwiLCBtZXNzYWdlOiBcIlNlZSBsb2dzIGZvciBzdWJtaXR0ZWQgdmFsdWVzXCIgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgIDxBY3Rpb24uU3VibWl0Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxGb3JtLkRlc2NyaXB0aW9uIHRleHQ9XCJUaGlzIGZvcm0gc2hvd2Nhc2VzIGFsbCBhdmFpbGFibGUgZm9ybSBlbGVtZW50cy5cIiAvPlxuICAgICAgPEZvcm0uVGV4dEZpZWxkIGlkPVwidGV4dGZpZWxkXCIgdGl0bGU9XCJUZXh0IGZpZWxkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0XCIgZGVmYXVsdFZhbHVlPVwiUmF5Y2FzdFwiIC8+XG4gICAgICA8Rm9ybS5UZXh0QXJlYSBpZD1cInRleHRhcmVhXCIgdGl0bGU9XCJUZXh0IGFyZWFcIiBwbGFjZWhvbGRlcj1cIkVudGVyIG11bHRpLWxpbmUgdGV4dFwiIC8+XG4gICAgICA8Rm9ybS5TZXBhcmF0b3IgLz5cbiAgICAgIDxGb3JtLkRhdGVQaWNrZXIgaWQ9XCJkYXRlcGlja2VyXCIgdGl0bGU9XCJEYXRlIHBpY2tlclwiIC8+XG4gICAgICA8Rm9ybS5DaGVja2JveCBpZD1cImNoZWNrYm94XCIgdGl0bGU9XCJDaGVja2JveFwiIGxhYmVsPVwiQ2hlY2tib3ggTGFiZWxcIiBzdG9yZVZhbHVlIC8+XG4gICAgICA8Rm9ybS5Ecm9wZG93biBpZD1cImRyb3Bkb3duXCIgdGl0bGU9XCJEcm9wZG93blwiPlxuICAgICAgICA8Rm9ybS5Ecm9wZG93bi5JdGVtIHZhbHVlPVwiZHJvcGRvd24taXRlbVwiIHRpdGxlPVwiRHJvcGRvd24gSXRlbVwiIC8+XG4gICAgICA8L0Zvcm0uRHJvcGRvd24+XG4gICAgICA8Rm9ybS5UYWdQaWNrZXIgaWQ9XCJ0b2tlbmVkaXRvclwiIHRpdGxlPVwiVGFnIHBpY2tlclwiPlxuICAgICAgICA8Rm9ybS5UYWdQaWNrZXIuSXRlbSB2YWx1ZT1cInRhZ3BpY2tlci1pdGVtXCIgdGl0bGU9XCJUYWcgUGlja2VyIEl0ZW1cIiAvPlxuICAgICAgPC9Gb3JtLlRhZ1BpY2tlcj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFxRDtBQVd0QyxtQkFBbUI7QUFDaEMsd0JBQXNCLFFBQWdCO0FBQ3BDLFlBQVEsSUFBSTtBQUNaLDhCQUFVLEVBQUUsT0FBTyxrQkFBa0IsU0FBUztBQUFBO0FBR2hELFNBQ0UscUJBQUMsaUJBQUQ7QUFBQSxJQUNFLFNBQ0UscUJBQUMsd0JBQUQsTUFDRSxxQkFBQyxrQkFBTyxZQUFSO0FBQUEsTUFBbUIsVUFBVTtBQUFBO0FBQUEsS0FJakMscUJBQUMsZ0JBQUssYUFBTjtBQUFBLElBQWtCLE1BQUs7QUFBQSxNQUN2QixxQkFBQyxnQkFBSyxXQUFOO0FBQUEsSUFBZ0IsSUFBRztBQUFBLElBQVksT0FBTTtBQUFBLElBQWEsYUFBWTtBQUFBLElBQWEsY0FBYTtBQUFBLE1BQ3hGLHFCQUFDLGdCQUFLLFVBQU47QUFBQSxJQUFlLElBQUc7QUFBQSxJQUFXLE9BQU07QUFBQSxJQUFZLGFBQVk7QUFBQSxNQUMzRCxxQkFBQyxnQkFBSyxXQUFOLE9BQ0EscUJBQUMsZ0JBQUssWUFBTjtBQUFBLElBQWlCLElBQUc7QUFBQSxJQUFhLE9BQU07QUFBQSxNQUN2QyxxQkFBQyxnQkFBSyxVQUFOO0FBQUEsSUFBZSxJQUFHO0FBQUEsSUFBVyxPQUFNO0FBQUEsSUFBVyxPQUFNO0FBQUEsSUFBaUIsWUFBVTtBQUFBLE1BQy9FLHFCQUFDLGdCQUFLLFVBQU47QUFBQSxJQUFlLElBQUc7QUFBQSxJQUFXLE9BQU07QUFBQSxLQUNqQyxxQkFBQyxnQkFBSyxTQUFTLE1BQWY7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBZ0IsT0FBTTtBQUFBLE9BRWxELHFCQUFDLGdCQUFLLFdBQU47QUFBQSxJQUFnQixJQUFHO0FBQUEsSUFBYyxPQUFNO0FBQUEsS0FDckMscUJBQUMsZ0JBQUssVUFBVSxNQUFoQjtBQUFBLElBQXFCLE9BQU07QUFBQSxJQUFpQixPQUFNO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
