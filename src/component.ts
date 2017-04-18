import { bindable,inlineView } from 'aurelia-framework';
import { Container, autoinject } from 'aurelia-dependency-injection';
import { viewResources, ViewResources, ViewEngine } from 'aurelia-framework';
import { ViewFactory } from './ViewFactory';

import { IDynamic } from './IDynamic';
import { IMyComponent } from './IMyComponent';

@inlineView(`<template></template>`)
@autoinject()
export class Component implements IMyComponent {
    @bindable()
    name = 'Component';

    @bindable()
    log: () => void = Function;

    /* The guet view model injected instance */
    private gustVm: IDynamic;

    constructor(private viewFactory: ViewFactory, private viewEngine: ViewEngine, private viewResources: ViewResources, private host: Element) {
        let type = Container.instance.get("Component");
        this.gustVm = new type();
    }

    async attached() {
        console.log(this.gustVm);
        let template = `
            <template>
              <${this.gustVm.tagName} 
                name.two-way="name"
                log.call="log()"
              ></${this.gustVm.tagName}>
            </template>`;
        let res = await this.viewEngine.importViewResources([this.gustVm.resource], [], this.viewResources);
        this.viewFactory.insert(this.host, template, this, res);
    }
}
