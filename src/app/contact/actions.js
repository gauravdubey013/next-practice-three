"use server";
import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";

// const { default: dbConnect } = require("@/utils/dbConn");

export const submitContact = async (data) => {
  try {
    await dbConnect();

    await Contact.create(data);
    
    return{ status: "OK", message: "Message sent Successfully!!"}
} catch (error) {
    console.log(error);
    return{ status: "ERROR", message: "Server error, try again!"}
  }
};
