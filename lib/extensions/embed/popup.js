"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
var Check_1 = require("../../components/icons/Check");
var PopupText = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 0 15px 0;\n  color: #333;\n  font-size: 16px;\n"], ["\n  margin: 0 0 15px 0;\n  color: #333;\n  font-size: 16px;\n"])));
var Popup = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 101;\n  background: rgba(0, 0, 0, 0.2);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 101;\n  background: rgba(0, 0, 0, 0.2);\n"])));
var PopupInnder = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-basis: 380px;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 3px 10px 4px rgba(116, 116, 116, 0.2);\n  padding: 15px;\n  box-sizing: border-box;\n  input {\n    display: block;\n    flex: 1;\n    width: 100%;\n    padding: 0 5px;\n    font-size: 16px;\n    line-height: 30px;\n    box-sizing: border-box;\n    border-radius: 3px 0 0 3px;\n    border: 1px solid #eee;\n  }\n\n  input:focus {\n    outline: 0;\n    border: 1px solid #137af3;\n    box-shadow: 0 0 0 2px rgba(19, 122, 243, 0.4),\n      inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  flex-basis: 380px;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 3px 10px 4px rgba(116, 116, 116, 0.2);\n  padding: 15px;\n  box-sizing: border-box;\n  input {\n    display: block;\n    flex: 1;\n    width: 100%;\n    padding: 0 5px;\n    font-size: 16px;\n    line-height: 30px;\n    box-sizing: border-box;\n    border-radius: 3px 0 0 3px;\n    border: 1px solid #eee;\n  }\n\n  input:focus {\n    outline: 0;\n    border: 1px solid #137af3;\n    box-shadow: 0 0 0 2px rgba(19, 122, 243, 0.4),\n      inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  }\n"])));
var PopupTextField = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var Button = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 38px;\n  height: 38px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 0 3px 3px 0;\n  border: 1px solid transparent;\n  background-color: #014cc5;\n\n  &:focus {\n    outline: 0;\n    border: 1px solid #137af3;\n    box-shadow: 0 0 0 2px rgba(19, 122, 243, 0.4),\n      inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  width: 38px;\n  height: 38px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 0 3px 3px 0;\n  border: 1px solid transparent;\n  background-color: #014cc5;\n\n  &:focus {\n    outline: 0;\n    border: 1px solid #137af3;\n    box-shadow: 0 0 0 2px rgba(19, 122, 243, 0.4),\n      inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  }\n"])));
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
function usePortal() {
    var rootElemRef = React.useRef(document.createElement('div'));
    useEffect(function setupElement() {
        // Look for existing target dom element to append to
        var parentElem = document.createElement('div');
        document.body.appendChild(parentElem);
        // Add the detached element to the parent
        parentElem.appendChild(rootElemRef.current);
        // This function is run on unmount
        return function removeElement() {
            parentElem.removeChild(rootElemRef.current);
        };
    }, []);
    return rootElemRef.current;
}
var Modal = function (props) {
    var target = usePortal();
    return react_dom_1.createPortal(props.children, target);
};
exports.default = (function (props) {
    var _a = useState(props.url), url = _a[0], setUrl = _a[1];
    var input = useRef();
    useEffect(function () {
        input.current.focus();
    });
    return (React.createElement(Modal, null,
        React.createElement(Popup, { id: "popup", onClick: function (e) {
                var target = e.target;
                if (target.id === 'popup' && props.onClose) {
                    props.onClose();
                }
            } },
            React.createElement(PopupInnder, null,
                React.createElement(PopupText, null, "Enter URL here..."),
                React.createElement(PopupTextField, null,
                    React.createElement("input", { ref: input, type: "text", value: url, placeholder: "https://", onKeyDown: function (e) {
                            if (e.keyCode === 13 && props.onDone) {
                                props.onDone(url);
                            }
                        }, onChange: function (e) {
                            setUrl(e.target.value);
                        } }),
                    React.createElement(Button, { onClick: function (e) {
                            if (props.onDone) {
                                props.onDone(url);
                            }
                        } },
                        React.createElement(Check_1.default, { style: { width: '24px', height: '24px', overflow: 'hidden' } })))))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=popup.js.map