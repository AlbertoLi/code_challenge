// Question 3: Return all movies that
///////  + starts with 'The' (account for case insensitivity)
///////  + have a rating > 3
///////  + Append Property imageFileName which is the base file name. Example: {..., boxart: http://cdn-0.nflximg.com/images/2891/DieHard.jpg} => {..., imageFileName: DieHard.jpg} 
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

function q3(arr: Movie[]) : Movie[] {
    return arr        
            .filter(x => x.title.substring(0,3).toUpperCase() === ("THE"))                              // Returns all items in array that start with 'The'
            .filter(x => x.rating > 3)                                                                  // Returns all items in array that have rating of greather than 3
            .map(x => {
                x['imageFileName'] = x.boxart.split("/")[x.boxart.split("/").length - 1];
                return x;
            })                                                                                          // Appends new property 'imageFileName' which is the base file name of the boxart.
        }

var result = q3(movies)
console.log(result)


const alternateSolnQ3 = (arr: Movie[]) => arr
                                        .filter(x => x.title.substring(0,3).toUpperCase() === ("THE"))  // Returns all items in array that start with 'The'
                                        .filter(x => x.rating > 3)                                      // Returns all items in array that have rating of greather than 3
                                        .map(x => ({...x, imageFilename: x.boxart.split("/").pop()}));  //or .map(x => (<any>Object).assign(x, {imageFilename: x.boxart.split('/').pop()}) );
                                                                                                        // Appends new property 'imageFileName' which is the base file name of the boxart.
const alternateSolnQ3_1 = (arr: Movie[]) => arr
                                            .filter(x => x.title.substring(0,3).toUpperCase() === ("THE"))                              // Returns all items in array that start with 'The'
                                            .filter(x => x.rating > 3)                                                                  // Returns all items in array that have rating of greather than 3
                                            .map(x => ({...x, imageFilename: x.boxart.split("/").pop()}))                               // Appends new property 'imageFileName' which is the base file name of the boxart.    

export class Movie {
    public id : number;
    public title: String; 
    public boxart: String;
    public rating: number;
}