import { Container, autoinject } from 'aurelia-dependency-injection';
import { Uno } from './uno';
import { Due } from './due';

@autoinject()
export class App {
    private router;

    constructor(private container: Container) {
        this.container.registerInstance("Component", Uno);
        //this.container.registerInstance("Component", Due);
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'root'], name: 'root', moduleId: './root' }
        ]);
    }
}
