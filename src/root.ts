import { viewResources } from 'aurelia-framework';

@viewResources("./component")
export class Root {
    name = 'Root';

    private log() {
        console.log("Log from root");
    }
}
