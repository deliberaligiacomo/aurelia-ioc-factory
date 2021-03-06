import { bindable, inlineView } from 'aurelia-framework';

/** The interface of main component container */
import { IMyComponent } from './IMyComponent';

/**
 * A component thet could be injected in the Component (becouse implements IMyComponent interface)
 */
@inlineView(`
  <template>  
    <p>
      GuestTwo: <input type="text" value.bind="name" />
      <button click.delegate="log({sender:'GuestTwo',message:name})">Greets</button>
    </p>
  </template>
`)
export class GuestTwo implements IMyComponent {

  @bindable() name = 'GuestTwo';
  /** Once the bind() is done, this function calls the parent one, so the created() is printed here, while other messages are catched from parent log().
   * But since the parent log() is called with .call="log($event)", future calls must must pass an object instead of two params. 
   */
  @bindable() log: (...args) => void = (sender: string, message: string) => console.log(`[${sender}] ${message}`);;

  created() {
    this.log(GuestTwo.name, "created");
  }

  bind() {
    this.log({ sender: 'GuestTwo', message: 'bind' });
  }

  attached() {
    this.log({ sender: 'GuestTwo', message: 'attached' });
  }
}
