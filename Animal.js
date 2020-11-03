class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        return this.name;
    }

    setWight(weight) {
        return this.weight;
    }
    getName() {
        return this.name;
    }

    getWight() {
        return this.weight;
    }

    toString() {
        return "name=" + this.name + ",weight=" + this.weight;
    }
}