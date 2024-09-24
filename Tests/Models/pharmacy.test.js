import { Drug } from "../../Models/Drug.js";
import { Pharmacy } from "../../Models/Pharmacy.js";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("should decrease the benefit by 2 when expired", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)],
    );
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit by 1", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase the benefit by 2 when expired", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit by 3 when 5 days or less left", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 4, 6)]);
    });
    it("should increase the benefit by 2 when 10 days or less left", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 9, 5)]);
    });
    it("should increase the benefit by 1", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 19, 4)]);
    });

    it("should loose all benefits when expired", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
  describe("Dafalgan", () => {
    it("should decrease the benefit by 2", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 5, 5)]).updateBenefitValue(),
      ).toEqual([new Drug("Dafalgan", 4, 3)]);
    });

    it("should decrease the benefit by 4 when expired", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue(),
      ).toEqual([new Drug("Dafalgan", -1, 1)]);
    });
  });
});
