import {
    autoinject,
    ViewCompiler,
    ViewResources,
    Container,
    ViewSlot,
    createOverrideContext
} from 'aurelia-framework';

/** A custom element Factory */
@autoinject()
export class ViewFactory {

    /**
     * Creates a new ViewFactory
     */
    constructor(private viewCompiler: ViewCompiler, private container: Container) {
    }

    /**
     * Compile and insert a new custom element (or plain HTML) to the given container element.
     * @param containerElement The html container element that will host the new compiled component
     * @param html The row HTML code to compile (could be plain HTML or aurelia custom element, attribute and so on)
     * @param viewModel The view model that will be used to bind properties and functions to the new compiled component
     * @param resources The ViewResources of the new component (the <require from='...'> that must be used to use this component)
     * @returns A function to call when the gust component should be detached (remove and unbind the gust component)
     */
    insert(containerElement: Element, html: string, viewModel: any, resources: ViewResources) {
        let viewFactory = this.viewCompiler.compile(html, resources);
        let view = viewFactory.create(this.container);
        let viewSlot = new ViewSlot(containerElement, true);
        viewSlot.add(view);
        view.bind(viewModel, createOverrideContext(viewModel));
        viewSlot.attached();
        return () => {
            viewSlot.remove(view);
            view.unbind();
        };
    }
}