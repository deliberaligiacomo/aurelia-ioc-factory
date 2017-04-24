import { Container, autoinject } from 'aurelia-dependency-injection';

import { IDynamic } from './IDynamic';

@autoinject()
export class App {
    private router;

    constructor(private container: Container) {
        // this.container.registerInstance("Component", {
        //     resource: "./guest-one",
        //     tagName: "guest-one"
        // } as IDynamic);

        this.container.registerInstance("Component", {
            resource: "./guest-two",
            tagName: "guest-two"
        } as IDynamic);
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'root'], name: 'root', moduleId: './root' }
        ]);
    }
}
