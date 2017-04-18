var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-dependency-injection", "./uno"], function (require, exports, aurelia_dependency_injection_1, uno_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(container) {
            this.container = container;
            this.container.registerInstance("Component", uno_1.Uno);
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'root'], name: 'root', moduleId: './root' }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_dependency_injection_1.Container])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration();
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('uno',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Uno = (function () {
        function Uno() {
            this.name = 'Uno component';
            this.log = function () { return console.log("Uno logger"); };
            this.resource = "./uno";
            this.tagName = "uno";
        }
        return Uno;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], Uno.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Function)
    ], Uno.prototype, "log", void 0);
    Uno = __decorate([
        aurelia_framework_1.inlineView("\n  <template>  \n    <p>\n      Uno: <input type=\"text\" value.bind=\"name\" />\n      <button click.delegate=\"log()\">Log</button>\n    </p>\n  </template>\n")
    ], Uno);
    exports.Uno = Uno;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('app - Copy',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.name = 'App';
        }
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.viewResources("./uno")
    ], App);
    exports.App = App;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('root',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Root = (function () {
        function Root() {
            this.name = 'Root';
        }
        Root.prototype.log = function () {
            console.log("Log from root");
        };
        return Root;
    }());
    Root = __decorate([
        aurelia_framework_1.viewResources("./component")
    ], Root);
    exports.Root = Root;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('uno - Copy',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Uno = (function () {
        function Uno() {
            this.name = 'Uno component';
        }
        Uno.prototype.activate = function (model) {
            this.name = model;
        };
        return Uno;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], Uno.prototype, "name", void 0);
    exports.Uno = Uno;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('due',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Due = (function () {
        function Due() {
            this.name = 'Due component';
            this.log = Function;
            this.resource = "./due";
            this.tagName = "due";
        }
        return Due;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], Due.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Function)
    ], Due.prototype, "log", void 0);
    Due = __decorate([
        aurelia_framework_1.inlineView("\n  <template>  \n    <p>\n      Due: <input type=\"text\" value.bind=\"name\" />\n    </p>\n    <button click.delegate=\"log()\">Log</button>\n  </template>\n")
    ], Due);
    exports.Due = Due;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('due - Copy',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Uno = (function () {
        function Uno() {
            this.name = 'Due component';
        }
        Uno.prototype.activate = function (model) {
            this.name = model;
        };
        return Uno;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], Uno.prototype, "name", void 0);
    exports.Uno = Uno;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
define('component',["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "aurelia-framework", "./ViewFactory"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, aurelia_framework_2, ViewFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = (function () {
        function Component(viewFactory, viewEngine, viewResources, host) {
            this.viewFactory = viewFactory;
            this.viewEngine = viewEngine;
            this.viewResources = viewResources;
            this.host = host;
            this.name = 'Component';
            this.log = Function;
            var type = aurelia_dependency_injection_1.Container.instance.get("Component");
            this.gustVm = new type();
        }
        Component.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var template, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(this.gustVm);
                            template = "\n            <template>\n              <" + this.gustVm.tagName + " \n                name.two-way=\"name\"\n                log.call=\"log()\"\n              ></" + this.gustVm.tagName + ">\n            </template>";
                            return [4 /*yield*/, this.viewEngine.importViewResources([this.gustVm.resource], [], this.viewResources)];
                        case 1:
                            res = _a.sent();
                            this.viewFactory.insert(this.host, template, this, res);
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Component;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], Component.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Function)
    ], Component.prototype, "log", void 0);
    Component = __decorate([
        aurelia_framework_1.inlineView("<template></template>"),
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [ViewFactory_1.ViewFactory, aurelia_framework_2.ViewEngine, aurelia_framework_2.ViewResources, Element])
    ], Component);
    exports.Component = Component;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('ViewFactory',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewFactory = (function () {
        function ViewFactory(viewCompiler, container) {
            this.viewCompiler = viewCompiler;
            this.container = container;
        }
        ViewFactory.prototype.insert = function (containerElement, html, viewModel, resources) {
            var viewFactory = this.viewCompiler.compile(html, resources);
            var view = viewFactory.create(this.container);
            var viewSlot = new aurelia_framework_1.ViewSlot(containerElement, true);
            viewSlot.add(view);
            view.bind(viewModel, aurelia_framework_1.createOverrideContext(viewModel));
            return function () {
                viewSlot.remove(view);
                view.unbind();
            };
        };
        return ViewFactory;
    }());
    ViewFactory = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_framework_1.ViewCompiler, aurelia_framework_1.Container])
    ], ViewFactory);
    exports.ViewFactory = ViewFactory;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
define('component - Copy',["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "aurelia-framework", "./ViewFactory"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, aurelia_framework_2, ViewFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = (function () {
        function Component(viewFactory, viewEngine, viewResources) {
            this.viewFactory = viewFactory;
            this.viewEngine = viewEngine;
            this.viewResources = viewResources;
            this.name = 'Component';
            this.gustVm = aurelia_dependency_injection_1.Container.instance.get("Component");
        }
        Component.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var template, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            template = '<template><due name.two-way="name"></due></template>';
                            return [4 /*yield*/, this.viewEngine.importViewResources(["./due"], [this.gustVm], this.viewResources)];
                        case 1:
                            res = _a.sent();
                            this.viewFactory.insert(this.host, template, this, res);
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Component;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], Component.prototype, "name", void 0);
    Component = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        aurelia_framework_2.viewResources(aurelia_dependency_injection_1.Container.instance.get("Component")),
        __metadata("design:paramtypes", [ViewFactory_1.ViewFactory, aurelia_framework_2.ViewEngine, aurelia_framework_2.ViewResources])
    ], Component);
    exports.Component = Component;
});

define('IDynamic',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('IDynamic - Copy',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('MyComponent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('IMyComponent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!uno.html', ['module'], function(module) { module.exports = "<template><p>Uno: <input type=text value.bind=name></p></template>"; });
define('text!app - Copy.html', ['module'], function(module) { module.exports = "<template><p>App: <input type=text value.bind=name></p><uno name.two-way=name></uno><compose view-model=./uno model.two-way=name></compose></template>"; });
define('text!root.html', ['module'], function(module) { module.exports = "<template><p>Root: <input type=text value.bind=name></p><component name.two-way=name log.call=log()></component></template>"; });
define('text!uno - Copy.html', ['module'], function(module) { module.exports = "<template><p>Uno: <input type=text value.bind=name></p></template>"; });
define('text!due.html', ['module'], function(module) { module.exports = ""; });
define('text!due - Copy.html', ['module'], function(module) { module.exports = "<template><p>Due: <input type=text value.bind=name></p></template>"; });
define('text!component.html', ['module'], function(module) { module.exports = "<template></template>"; });
//# sourceMappingURL=app-bundle.js.map