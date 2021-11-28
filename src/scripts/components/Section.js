class Section {
  
  constructor({renderer}, container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item)
    })
  }

  addItem(element, order = true) {
    if(order){
      this._container.append(element);
    }else{
      this._container.prepend(element);
    }
    
  }
}

export {Section}