// Thermostat starts at 20 degrees                - tick
// You can increase the temp with the up button   - tick
// You can decrease the temp with the down button - tick
// The minimum temperature is 10 degrees          - tick
// If power saving mode is on, the maximum temperature is 25 degrees                  - tick
// If power saving mode is off, the maximum temperature is 32 degrees               - tick
// Power saving mode is on by default             - tick
// You can reset the temperature to 20 by hitting the reset button                - tick
// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
// After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when initialised is', function() {
    it('set at 20c', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('when initialised is', function() {
    it('set to power save on', function() {
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe('when temperature rises by 1 the temperature is', function() {
    it('set to 21c', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('when temperature lowers by 1 the temperature is', function() {
    it('set to 19c', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('when raised temperature it cant go higher than 25 is', function() {
    it('set to 25c', function() {
      for (var i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('when raised temperature it cant go lower than 10 is', function() {
    it('set to 10c', function() {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('when the reset is pressed temperature is reset is', function() {
    it('set to 20c', function() {
      for (var i = 0; i > 20; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

    describe('when the powersave is off the max temp cant reach more than 32 is', function() {
    it('set to 32c', function() {
      thermostat.powerSaveX(false);
      for (var i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
  });

//bit of a repeat test
  describe('when the powersave is off the max temp cant reach more than 25 is', function() {
    it('set to 25c', function() {
      thermostat.powerSaveX(true);
      for (var i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });

});
