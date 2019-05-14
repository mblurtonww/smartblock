import { splitListItem } from 'prosemirror-schema-list';
var ListItem = /** @class */ (function () {
    function ListItem() {
    }
    Object.defineProperty(ListItem.prototype, "name", {
        get: function () {
            return 'list_item';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "showMenu", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "schema", {
        get: function () {
            return {
                content: 'paragraph block*',
                group: 'block',
                parseDOM: [{ tag: "li" }],
                toDOM: function () { return ["li", 0]; },
                defining: true
            };
        },
        enumerable: true,
        configurable: true
    });
    ListItem.prototype.keys = function (schema) {
        return {
            'Enter': splitListItem(schema.nodes.list_item),
        };
    };
    return ListItem;
}());
export default ListItem;
//# sourceMappingURL=list-item.js.map