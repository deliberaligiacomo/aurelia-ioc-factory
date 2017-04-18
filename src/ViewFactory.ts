import {
    autoinject,
    ViewCompiler,
    ViewResources,
    Container,
    ViewSlot,
    createOverrideContext
} from 'aurelia-framework';

@autoinject()
export class ViewFactory {

    constructor(private viewCompiler: ViewCompiler, private container: Container) {
    }

    insert(containerElement, html, viewModel, resources: ViewResources) {
        let viewFactory = this.viewCompiler.compile(html, resources);
        let view = viewFactory.create(this.container);
        let viewSlot = new ViewSlot(containerElement, true);
        viewSlot.add(view);
        view.bind(viewModel, createOverrideContext(viewModel));
        return () => {
            viewSlot.remove(view);
            view.unbind();
        };
    }
}