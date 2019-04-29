//   /app/models/student.ts
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create a schema
export const User = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Tel: {
        type: Number,
        required: true
    },
  
});
