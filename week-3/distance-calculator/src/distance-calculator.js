'use strict';

// Distances from each planet to sun in AU
// Source: https://science.nasa.gov/learning-resources/how-big-is-the-solar-system/
const planetDistances = {
  Mercury: 0.4,
  Venus: 0.7,
  Earth: 1,
  Mars: 1.5,
  Jupiter: 5.2,
  Saturn: 9.5,
  Uranus: 19,
  Neptune: 30
};

function calculateDistance(planet1, planet2) {
  const distance = Math.abs(planetDistances[planet1]-planetDistances[planet2]); // distance of first planet minus distance of second planet
  return distance; // return difference
}

module.exports = calculateDistance;