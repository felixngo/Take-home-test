export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    updateExpiresIn() {
        if (this.name != "Magic Pill")
        {
            this.expiresIn--;
        }
    }

    updateBenefit() {
        if (this.name == "Magic Pill")
        {
            return;
        }
        if (this.name == "Herbal Tea")
        {
            this.increaseBenefit();
        }
        else if (this.name == "Fervex") {
            if (this.expiresIn > 0) {
                this.increaseBenefit();
            } else {
                this.benefit = 0;
            }
        }
        else
        {
            this.decreaseBenefit();
        }
    }

    decreaseBenefit() {
        if (this.benefit == 0)
        {
            return;
        }
        if (this.expiresIn > 0)
        {
            this.benefit -= 1;
        }
        else
        {
            this.benefit -= 2;
        }
    }

    increaseBenefit() {
        if (this.benefit >= 50)
        {
            return;
        }
        if (this.name == "Herbal Tea")
        {
            this.benefit += this.expiresIn > 0 ? 1 : 2;
        }
        if (this.name == "Fervex")
        {
            if (this.expiresIn <= 5)
            {
                this.benefit += 3;
            }
            else if (this.expiresIn <= 10)
            {
                this.benefit += 2;
            }
            else
            {
                this.benefit += 1;
            }
        }

        if (this.benefit > 50)
        {
            this.benefit = 50;
        }
    }
}
