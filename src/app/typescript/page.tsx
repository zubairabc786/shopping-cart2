import React from "react";

const page = () => {
  interface IEmploy {
    id: number;
  }
  interface IUser<T> {
    name: string;
    age: number;
    extra: T;
  }
  const user: IUser<IEmploy> = {
    name: "zubair",
    age: 44,
    extra: { id: 66 },
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
