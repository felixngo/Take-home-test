export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;
    }
    updateBenefitValue() {
        for (var i = 0; i < this.drugs.length; i++) {
            if (this.drugs[i].name === "Magic Pill")
            {
                continue;
            }
            if (this.drugs[i].name === "Herbal Tea")
            {
                this.drugs[i].increaseBenefit();
            }
            else if (this.drugs[i].name === "Fervex") {
                if (this.drugs[i].expiresIn > 0) {
                    this.drugs[i].increaseBenefit();
                } else {
                    this.drugs[i].benefit = 0;
                }
            }
            else
            {
                this.drugs[i].decreaseBenefit();
            }
            this.drugs[i].decreaseExpiresIn();
        }

        return this.drugs;
    }
}