let VersionDebian = {
    versiones: [2.0, 2.2, 3.0],
    nombresClave: ["hamm", "potato", "woody"],
    get ultima() {
        return Math.max(...this.versiones);
    },
};

console.log(VersionDebian.ultima);
