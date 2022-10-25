import React from "react";

export const getAllPublishers = (arr) => {
  const publishers = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      !publishers.includes(arr[i].biography.publisher) &&
      arr[i].biography.publisher !== null &&
      arr[i].biography.publisher !== ""
    ) {
      publishers.push(arr[i].biography.publisher);
    }
  }
  return publishers;
};
