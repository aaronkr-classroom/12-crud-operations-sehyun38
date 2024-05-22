// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    /**
     * @TODO 1. 스키마에 필드 추가
     */
    _id:{ 
      type:String,
      required: true,
      unique: true,
    },
    title:{
      type:String,
      required: true,
    },
    description: {
      type:String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min
    },
    courseImg: {
      type: String
    }
  });


  courseSchema.methods.getInfo =()=>{
    return `Title ${this.title} Description : ${this.description}`;
  };

  courseSchema.methods.findSamePrice = () => {
    return this.model("Course")
    .find({pirce: this.price})
    .exec();
  };

  courseSchema.methods.findDiscountPrice = () => {
    return this.model("Course")
    .find({pirce: { $lt: price}})
    .exec();
  };

  courseSchema.virtual("Subscribers",{
    ref: "Subscriber",
    localField: "_id",
    foreignField: "courses"
  });
  courseSchema.set("toObject", {virtuals: ture});
  courseSchema.set("toJSON", {virtuals: ture});
  
module.exports = mongoose.model("Course", courseSchema);
