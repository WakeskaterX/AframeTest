AFRAME.registerComponent('interactable', {
  schema: {
    color: {
      default: '#AAA'
    },
    message_id: {
      default: ''
    }
  },
  init() {
    let data = this.data;
    data.message = this.el.getAttribute('message');
    data.original_color = this.el.getAttribute('color') || '#FFF';

    this.el.addEventListener('mouseenter', function setcolor() {
      this.setAttribute('color', data.color);
    });

    this.el.addEventListener('mouseleave', function revertColor() {
      this.setAttribute('color', data.original_color);
    });

    this.el.addEventListener('click', () => {
      console.log('clicked box');
      setTimeout(() => {
        let all_text = this.el.querySelectorAll('[interactable-text]');
        all_text.forEach(node => node.setAttribute('visible', true));
      }, 10);
    });
  }
});

AFRAME.registerComponent('interactable-text', {
  schema: {
    text: {
      default: 'Default Message'
    },
    color: {
      default: '#FFF'
    },
    background: {
      default: 'rgba(0, 0, 100, .5)'
    }
  },
  init() {
    this.el.setAttribute('material', `color: ${this.data.background};`);
  }
});

AFRAME.registerComponent('cursor-interactable', {
  init() {
    this.el.addEventListener('click', () => {
      let all_nodes = document.querySelectorAll('[interactable-text]');
      all_nodes.forEach((node) => {
        node.setAttribute('visible', false);
      });
    });
  }
});
