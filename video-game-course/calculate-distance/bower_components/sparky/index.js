(function(window, _) {
    window.sparky = window.sparky || {
        numz: {
            /**
             * 
             * @param {number} degrees 
             * @returns the degrees in radians
             */
            degreesToRadians(degrees) {
                return degrees * Math.PI / 180;
            },
            /**
             * 
             * @param {number} degrees 
             * @returns the degrees in radians
             */
            radiansToDegrees(radians){
                return radians * 180 / Math.PI;
            },
            /**
             * 
             * @param {object} pointA 
             * @param {number} pointA.x 
             * @param {number} pointA.y 
             * @param {object} pointB
             * @param {number} pointB.x 
             * @param {number} pointB.y  
             * @returns The angle between the two points in degrees
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
             * 
             * @param {object} pointA 
             * @param {number} pointA.x 
             * @param {number} pointA.y 
             * @param {object} pointB
             * @param {number} pointB.x 
             * @param {number} pointB.y 
             * @returns the distance between the pointsA and pointsB. It is always positive, and directionless
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