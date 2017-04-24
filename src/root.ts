import { viewResources } from 'aurelia-framework';

import { IMyComponent } from './IMyComponent';

@viewResources("./component")
export class Root {
    name = 'Root';

    private history: string = 'Look at console for more info...<br/>';


    private viewModel: IMyComponent;

    private log(sender: string, message: string) {
        console.log(`[${sender}] ${message}`);
        this.history += `[${sender}] ${message}<br/>`;
    }

    init() {
        console.log("Root init", this.viewModel);
    }
}
