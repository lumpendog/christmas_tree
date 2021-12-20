export class Tree {
  #el;
  #modules;
  constructor(selector) {
    this.#el = document.querySelector(selector);
    this.#modules = [];
  }

  addOrnament(...modules) {
    this.#modules.push(...modules);
  }

  render() {
    const html = `
    <div class="star-container">
        <div class="star"></div>
      </div>
      <div class="xmas-tree">
        <div class="tree1"></div>
        <div class="tree2"></div>
        <div class="tree3"></div>
        <div class="tree4"></div>
        <div class="tree5"></div>
        <div class="trunk"></div>
      </div>
      <div class="xmas-lights">
        <div class="light1"></div>
        <div class="light2"></div>
        <div class="light3"></div>
        <div class="light4"></div>
        <div class="light5"></div>
        <div class="light6"></div>
        <div class="light7"></div>
        <div class="light8"></div>
        <div class="light9"></div>
        <div class="light10"></div>
        <div class="light11"></div>
        <div class="light12"></div>
        <div class="light13"></div>
        <div class="light14"></div>
        <div class="light15"></div>
        <div class="light16"></div>
        <div class="light17"></div>
        <div class="light18"></div>
        <div class="light19"></div>
        <div class="light20"></div>
      </div>
    `;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const elementsArray = Array.from(wrapper.children);
    elementsArray.forEach((element) => {
      this.#el.append(element);
    });
    this.#modules.forEach((element) => {
      const ornament = element.renderElement();
      this.#el.append(ornament);
    });
  }
}
