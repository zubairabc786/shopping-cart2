import React from "react";

const page = () => {
  interface IUser {
    name: string;
    email: string;
    age: number;
  }
  interface IId extends IUser {
    id: number;
  }
  const user: IId = {
    name: "Zubair",
    email: "zubair@test.com",
    age: 44,
    id: 12,
  };
  console.log(user);
  return (
    <div>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
    </div>
  );
};

export default page;
