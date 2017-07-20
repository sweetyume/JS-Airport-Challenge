function Airport()  {
  this._planes = [];
}
Airport.prototype.planes = function () {
  return this._planes;
};
Airport.prototype.clearForLanding = function (plane) {
this._planes.push(plane);
};

Airport.prototype.clearToTakeOff = function (plane) {
  // this._planes.pop(plane);
  let planeIndex = this._planes.indexOf(plane)
  this._planes.splice(planeIndex,1)
};
Airport.prototype.isStormy = function() {
  return(Math.random() < 0.5 ) ? true : false
}
