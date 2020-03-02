//////// Find the average rating of all the movies in the catalog, using reduce.
export const movies : Movie[] = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "rating": 4.0
}, {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "rating": 5.0
}, {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "rating": 4.0
}, {
    "id": 64248315,
    "title": "The Wolf of Wall Street",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheWolfOfWallStreet.jpg",
    "rating": 3.0
}, {
    "id": 64245743,
    "title": "The GodFather",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheGodFather.jpg",
    "rating": 5.0
}];

///////////////////////////////////////////// SOLUTION /////////////////////////////////////////////
function q2(arr: Movie[]) : number {
    return arr.reduce( (accumulator, currentValue) => accumulator + currentValue.rating,  0.0) / arr.length
}

var average = q2(movies)
console.log(average) // 4.428571428571429

///////////////////////////////////////////// Alternate Solution /////////////////////////////////////////////
const alternateSolnQ2 = arr => arr.reduce( (accumulator, currentValue) => accumulator + currentValue.rating,  0.0) / arr.length


export class Movie {
    public id : number;
    public title: String; 
    public boxart: String;
    public rating: number;
}