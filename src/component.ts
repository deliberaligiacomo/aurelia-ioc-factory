import { bindable, inlineView, bindingMode, TaskQueue } from 'aurelia-framework';
import { Container, autoinject } from 'aurelia-dependency-injection';
import { ViewResources, ViewEngine } from 'aurelia-framework';
import { ViewFactory } from './ViewFactory';

import { IDynamic } from './IDynamic';
import { IMyComponent } from './IMyComponent';

@inlineView(`<template></template>`)
@autoinject()
export class Component implements IMyComponent {

    /** IMyComponent implementation */
    @bindable() name = 'Component';
    @bindable() log: () => void = Function;

    /** The guest's view model reference */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public instance: any;
    /** The guest's view instance (not an HTML Element) */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public view: any;
    /** The guest's HTML Element view */
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public element: Element;

    /** Called when the data is bound */
    @bindable() onDatabound: () => void = Function;

    /** The injected guest component information */
    private dynamic: IDynamic;

    /** Removes the view slot and detach the injected components */
    private remove: () => void;

    /** Inject required services and resolve 'Component' */
    constructor(private viewFactory: ViewFactory, private viewEngine: ViewEngine, private viewResources: ViewResources, private host: Element, private taskQueue: TaskQueue) {
        this.dynamic = Container.instance.get("Component");
        this.checkResolve();
    }

    /**
     * Called by framework
     */
    bind() {
        let template = `
            <template>
              <${this.dynamic.tagName} 
                name.two-way="name"
                log.call="log($event)"
                view-model.ref="instance"
                view.ref="view"
                ref="element"
              ></${this.dynamic.tagName}>
            </template>`;
        return this.viewEngine.importViewResources([this.dynamic.resource], [], this.viewResources).then(viewResources => {
            this.remove = this.viewFactory.insert(this.host, template, this, viewResources);
            this.taskQueue.queueMicroTask(this.onDatabound);
        });
    }

    /**
     * Checks that the resolved guest component instance is valid. Throws a TypeError otherwise
     */
    private checkResolve() {
        if (!this.dynamic)
            throw new TypeError("[Component] Trying to resolve a guest component that is not registred");

        if (!this.dynamic.resource || this.dynamic.resource.length == 0)
            throw new TypeError("[Component] Trying to resolve a guest component that has not a valid resource value");

        if (!this.dynamic.tagName || this.dynamic.tagName.length == 0)
            throw new TypeError("[Component] Trying to resolve a guest component that has not a valid tag name");
    }

    /**
     * Called by framework when the component is detached from the DOM
     */
    detached() {
        this.remove();
    }
}
