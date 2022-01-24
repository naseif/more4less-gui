/* eslint-disable @typescript-eslint/ban-ts-comment */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
    var getSearchQuery, cards_div, searchForProduct, html_cards;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                getSearchQuery = document.getElementById("searchField").value;
                cards_div = document.getElementById("cards_div");
                cards_div.innerHTML = "<div class=\"text-center\">\n  <div class=\"spinner-grow text-primary\" role=\"status\">\n    <span class=\"visually-hidden\">Loading...</span>\n  </div>\n</div>";
                return [4 /*yield*/, more4less.search(getSearchQuery)];
            case 1:
                searchForProduct = _a.sent();
                cards_div.innerHTML = "";
                html_cards = generateCards(searchForProduct);
                cards_div.innerHTML = html_cards;
                return [2 /*return*/];
        }
    });
}); });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var generateCards = function (searchResult) {
    var result = "";
    searchResult.forEach(function (product) {
        result += "\n    <div class=\"col-auto mb-3\">\n    <div class=\"card\" style=\"width: 18rem\">\n    <img src=\"".concat(product.thumbnail ? product.thumbnail : "", "\" class=\"card-img-top\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-black\">").concat(product.name, "</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">").concat(product.engine, "</h6>\n        <p class=\"card-text text-black\">Price: ").concat(product.price ? product.price : "Not available", "\u20AC</p>\n        <a href=\"").concat(product.link, "\" class=\"card-link\">Link</a>\n      </div>\n    </div>\n    </div>\n    ");
    });
    return result;
};
//# sourceMappingURL=renderer.js.map