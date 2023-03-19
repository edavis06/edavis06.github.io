(function(window, _) {
    window.sparky = window.sparky || {
        numz: {
            /**
             * Turns degrees into radians
             * @param {number} degrees 
             * @returns {number} the degrees in radians
             */
            degreesToRadians(degrees) {
                return degrees * Math.PI / 180;
            },
            /**
             * Turns radians into degrees
             * @param {number} radians 
             * @returns {number} the degrees in radians
             */
            radiansToDegrees(radians){
                return radians * 180 / Math.PI;
            },
            /**
             * Calculates the angle between two points
             * @param {object} pointA
             * @param {number} pointA.x - x value of pointA
             * @param {number} pointA.y - y value of pointA
             * @param {object} pointB
             * @param {number} pointB.x - x value of pointB
             * @param {number} pointB.y - y value of pointB
             * @returns {number} Angle between the two points in degrees. Value range: -180 to 180
             */
            getAngleDegrees(pointA, pointB){
                const
                    distanceX = pointB.x - pointA.x,
                    distanceY = pointB.y - pointA.y,
                    radians = Math.atan2(distanceY, distanceX),
                    degrees = radians * 180 /Math.PI;
                return degrees;
            },

        },
        phyz: {
            /**
             * Calculates the distance between two points
             * @param {object} pointA 
             * @param {number} pointA.x - x value of pointA
             * @param {number} pointA.y - y value of pointA
             * @param {object} pointB
             * @param {number} pointB.x - x value of pointB
             * @param {number} pointB.y - y value of pointB
             * @returns {number} the distance between the pointsA and pointsB. Always positive
             */
            getDistance(pointA, pointB){
                const
                    distanceX = pointB.x - pointA.x,
                    distanceY = pointB.y - pointA.y,
                    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                return distance;
            }
        },
    };
}(window, window._));