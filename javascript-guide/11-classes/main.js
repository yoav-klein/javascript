
// CLASS DECLARATION

class Color {
  values = [];

  constructor(r, g, b) {
    this.values = [r, g, b];
  }

  getRed() {
    return this.values[0];
  }
}

const black = new Color(0, 0, 0);
const red = new Color(255, 0, 0);
