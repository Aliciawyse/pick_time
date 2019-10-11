import fetch from 'isomorphic-fetch';

export default async function availabilityRequest() {
    let url = "http://localhost:3000/api/get-list"
    try {
        // don't return until I get this data back
        console.log("this is working")
        let res = await fetch(url);
        let availabilityData = await res.json();
        console.log(availabilityData)
        return availabilityData;
    } catch (error) {
        console.log("Oops: ", error);
    }
}