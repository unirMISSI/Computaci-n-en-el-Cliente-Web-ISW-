const moneda = {
    metal: "plata",
    tirar() {
        let lado = "cara";
        if (Math.random() > 0.5) {
            lado = "cruz";
        }
        return `El lado de moneda es ${lado} y el material es ${this.metal}`;
    },
};

console.log(moneda.tirar());
