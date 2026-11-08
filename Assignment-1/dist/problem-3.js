function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Loacation: ${locationName} (${latitude},${longitude})`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
export {};
