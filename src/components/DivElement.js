import HTMLElement from './HTMLElement';

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    this.content = content;
  }
}
export default DivElement;
