import { bindable, inlineView } from 'aurelia-framework';
import { IMyComponent } from './IMyComponent';
import { IDynamic } from './IDynamic';

@inlineView(`
  <template>  
    <p>
      Uno: <input type="text" value.bind="name" />
      <button click.delegate="log()">Log</button>
    </p>
  </template>
`)
export class Uno implements IDynamic {
    @bindable()
    name = 'Uno component';

    @bindable()
    log: () => void = () => console.log("Uno logger");

    resource: string = "./uno";
    tagName: string = "uno";
}
