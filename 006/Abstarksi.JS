// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Sepeda extends Kendaraan {
    constructor() {
        super('Sepeda');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di darat.`);
    }
}

class Perahu extends Kendaraan {
    constructor() {
        super('Perahu');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di air.`);
    }
}
class Pesawat extends Kendaraan {
    constructor() {
        super('Pesawat');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di udara.`);
    }
}

class Roket extends Kendaraan {
    constructor() {
        super('Roket');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di angkasa.`);
    }
}
// Penggunaan
const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak di darat.

const perahu = new Perahu();
perahu.bergerak(); // Output: Perahu bergerak di air.

const pesawat = new Pesawat();
pesawat.bergerak(); // Output: Pesawat bergerak di udara.

const roket = new Roket();
roket.bergerak(); // Output: Roket bergerak di angkasa.
