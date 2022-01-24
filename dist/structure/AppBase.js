"use strict";
exports.__esModule = true;
exports.AppBaseT = void 0;
var electron_1 = require("electron");
var AppBaseT = /** @class */ (function () {
    function AppBaseT() {
        this.app_menu = new electron_1.Menu();
    }
    AppBaseT.prototype.addMenuItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.addMenuItem(item);
        });
    };
    AppBaseT.prototype.addMenuItem = function (menuItem) {
        this.app_menu.append(new electron_1.MenuItem(menuItem));
    };
    AppBaseT.prototype.setAppMenu = function () {
        electron_1.Menu.setApplicationMenu(this.app_menu);
    };
    return AppBaseT;
}());
exports.AppBaseT = AppBaseT;
//# sourceMappingURL=AppBase.js.map