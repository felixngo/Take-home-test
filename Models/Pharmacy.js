export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;
    }
    updateBenefitValue() {
        for (var i = 0; i < this.drugs.length; i++) {
            this.drugs[i].updateBenefitValue();
            this.drugs[i].updateExpiresIn();
        }

        return this.drugs;
    }
}