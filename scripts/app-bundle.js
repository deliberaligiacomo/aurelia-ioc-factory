define('IDynamic',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
define('app',["require", "exports", "aurelia-dependency-injection"], function (require, exports, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(container) {
            this.container = container;
            this.container.registerInstance("Component", {
                resource: "./guest-two",
                tagName: "guest-two"
            });
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
            viewSlot.attached();
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

define('IMyComponent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
define('component',["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "aurelia-framework", "./ViewFactory"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, aurelia_framework_2, ViewFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = (function () {
        function Component(viewFactory, viewEngine, viewResources, host, taskQueue) {
            this.viewFactory = viewFactory;
            this.viewEngine = viewEngine;
            this.viewResources = viewResources;
            this.host = host;
            this.taskQueue = taskQueue;
            this.name = 'Component';
            this.log = Function;
            this.onDatabound = Function;
            this.dynamic = aurelia_dependency_injection_1.Container.instance.get("Component");
            this.checkResolve();
        }
        Component.prototype.bind = function () {
            var _this = this;
            var template = "\n            <template>\n              <" + this.dynamic.tagName + " \n                name.two-way=\"name\"\n                log.call=\"log($event)\"\n                view-model.ref=\"instance\"\n                view.ref=\"view\"\n                ref=\"element\"\n              ></" + this.dynamic.tagName + ">\n            </template>";
            return this.viewEngine.importViewResources([this.dynamic.resource], [], this.viewResources).then(function (viewResources) {
                _this.remove = _this.viewFactory.insert(_this.host, template, _this, viewResources);
                _this.taskQueue.queueMicroTask(_this.onDatabound);
            });
        };
        Component.prototype.checkResolve = function () {
            if (!this.dynamic)
                throw new TypeError("[Component] Trying to resolve a guest component that is not registred");
            if (!this.dynamic.resource || this.dynamic.resource.length == 0)
                throw new TypeError("[Component] Trying to resolve a guest component that has not a valid resource value");
            if (!this.dynamic.tagName || this.dynamic.tagName.length == 0)
                throw new TypeError("[Component] Trying to resolve a guest component that has not a valid tag name");
        };
        Component.prototype.detached = function () {
            this.remove();
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
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], Component.prototype, "instance", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], Component.prototype, "view", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Element)
    ], Component.prototype, "element", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Function)
    ], Component.prototype, "onDatabound", void 0);
    Component = __decorate([
        aurelia_framework_1.inlineView("<template></template>"),
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [ViewFactory_1.ViewFactory, aurelia_framework_2.ViewEngine, aurelia_framework_2.ViewResources, Element, aurelia_framework_1.TaskQueue])
    ], Component);
    exports.Component = Component;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
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
define('guest-one',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GuestOne = GuestOne_1 = (function () {
        function GuestOne() {
            this.name = 'GuestOne';
            this.log = function (sender, message) { return console.log("[" + sender + "] " + message); };
        }
        ;
        GuestOne.prototype.created = function () {
            this.log(GuestOne_1.name, "created");
        };
        GuestOne.prototype.bind = function () {
            this.log({ sender: 'GuestOne', message: 'bind' });
        };
        GuestOne.prototype.attached = function () {
            this.log({ sender: 'GuestOne', message: 'attached' });
        };
        return GuestOne;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], GuestOne.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Function)
    ], GuestOne.prototype, "log", void 0);
    GuestOne = GuestOne_1 = __decorate([
        aurelia_framework_1.inlineView("\n  <template>  \n    <p>\n      GuestOne: <input type=\"text\" value.bind=\"name\" />\n      <button click.delegate=\"log({sender:'GuestOne',message:name})\">Greets</button>\n    </p>\n  </template>\n")
    ], GuestOne);
    exports.GuestOne = GuestOne;
    var GuestOne_1;
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
define('guest-two',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GuestTwo = GuestTwo_1 = (function () {
        function GuestTwo() {
            this.name = 'GuestTwo';
            this.log = function (sender, message) { return console.log("[" + sender + "] " + message); };
        }
        ;
        GuestTwo.prototype.created = function () {
            this.log(GuestTwo_1.name, "created");
        };
        GuestTwo.prototype.bind = function () {
            this.log({ sender: 'GuestTwo', message: 'bind' });
        };
        GuestTwo.prototype.attached = function () {
            this.log({ sender: 'GuestTwo', message: 'attached' });
        };
        return GuestTwo;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], GuestTwo.prototype, "name", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Function)
    ], GuestTwo.prototype, "log", void 0);
    GuestTwo = GuestTwo_1 = __decorate([
        aurelia_framework_1.inlineView("\n  <template>  \n    <p>\n      GuestTwo: <input type=\"text\" value.bind=\"name\" />\n      <button click.delegate=\"log({sender:'GuestTwo',message:name})\">Greets</button>\n    </p>\n  </template>\n")
    ], GuestTwo);
    exports.GuestTwo = GuestTwo;
    var GuestTwo_1;
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
define('root',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Root = (function () {
        function Root() {
            this.name = 'Root';
            this.history = 'Look at console for more info...<br/>';
        }
        Root.prototype.log = function (sender, message) {
            console.log("[" + sender + "] " + message);
            this.history += "[" + sender + "] " + message + "<br/>";
        };
        Root.prototype.init = function () {
            console.log("Root init", this.viewModel);
        };
        return Root;
    }());
    Root = __decorate([
        aurelia_framework_1.viewResources("./component")
    ], Root);
    exports.Root = Root;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!root.html', ['module'], function(module) { module.exports = "<template><p>An example on how to use Inversion Of Control combined with Aurelia ViewCompiler.</p><p>Root: <input type=text value.bind=name></p><component name.two-way=name log.call=log(sender,message) instance.bind=viewModel on-databound.call=init()></component><p innerhtml.bind=history></p></template>"; });
//# sourceMappingURL=app-bundle.js.map