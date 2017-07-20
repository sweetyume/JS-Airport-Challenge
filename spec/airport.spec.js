describe("Billet", function () {
  var billet;
  beforeEach(function () {
    billet = new Billet();
  });
  it("should be return params passager", function () {
    billet.passager("Amelle", 2, "F");
  expect(billet.name).toEqual("Amelle");
  expect(billet.age).toEqual(2);
  expect(billet.sex).toEqual("F")
  });
  it("should return vol", function () {
    billet.vol("Los Angeles");
    expect(billet.city).toEqual("Los Angeles");
  });
  it("should return avion", function (){
    billet.avion("777");
    expect(billet.id).toEqual("777");
  })

});
