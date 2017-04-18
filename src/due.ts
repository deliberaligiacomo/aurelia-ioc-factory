import { bindable, inlineView } from 'aurelia-framework';
import { IDynamic } from './IDynamic';
import { IMyComponent } from './IMyComponent';

@inlineView(`
  <template>  
    <p>
      Due: <input type="text" value.bind="name" />
    </p>
    <button click.delegate="log()">Log</button>
  </template>
`)
export class Due implements IDynamic, IMyComponent {
    @bindable()
    name = 'Due component';

    @bindable()
    log: () => void = Function;

    resource: string = "./due";
    tagName: string = "due";
}
