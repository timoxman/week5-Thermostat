function Thermostat() {

  this.temperature = 20;
  this.powerSave = true;
};

// the functions in this module are tested using Jasmine, the testing is contained within thermostatSpec.js

Thermostat.prototype.up = function(){
  this.temperature++;
  if ((this.temperature > 25) && this.powerSave ) this.temperature = 25;
  if ((this.temperature > 32) && !this.powerSave ) this.temperature = 32;
};

Thermostat.prototype.down = function(){
  this.temperature--;
  if (this.temperature < 10) this.temperature = 10;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};

// this function is not really required, could just set attribute directy with thermostat.powerSave = True
Thermostat.prototype.powerSaveX = function(value){
   this.powerSave = value;
};