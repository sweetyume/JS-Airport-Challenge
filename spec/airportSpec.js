describe("AirportChallenge", function() {
  let airport;
  let plane;
  let meteo;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport;
  });
  it("plane can land at airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it("plane can take off the airport", function() {
    plane.land(airport)
    plane.takeOff(airport)
    expect(airport.planes).not.toContain(plane);
  });
  describe('When weather is stormy', function(){
    beforeEach(function() {
      plane = new Plane()
      airport = new Airport()

    });
    it("blocks when weather is stormy", function(){
      airport._planes.push(plane)
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){
        plane.takeOff(airport);
      }).toThrowError("cannot takeoff during storm")
      expect(airport.planes()).toContain(plane);
    });
  });

  // xit("plane can't take off if airport is full", function() {
  //   plane.not.takeOff(airport, meteo);
  //   expect(airport.planes()).not.toContain(plane);
  // });


});
