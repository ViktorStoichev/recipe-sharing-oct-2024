import { connect } from "mongoose";

export default function mongooseInit() {
    try {
        connect('mongodb://localhost:27017/recipe-sharing');
        console.log('Successfuly connected to database!');
    } catch (error) {
        console.log('Cannot connect to database!');
        console.log(error);
    }
}