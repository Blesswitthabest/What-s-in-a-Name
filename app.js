function nameGenerator() {
  return {
    names: [
      "Jordan",
      "Taylor",
      "Morgan",
      "Cameron",
      "Skyler",
      "Avery",
      "Reese",
      "Peyton",
      "Quinn",
      "Rowan"
    ],
    currentName: "Click the button",

    getRandomName() {
      let randomIndex = Math.floor(Math.random() * this.names.length);
      this.currentName = this.names[randomIndex];
    }
  };
}
