import Link from "next/link";
import React from "react";

async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const post = [
    {
      id: 1,
      title: "post 1",
      body: "this post 1",
    },
    {
      id: 2,
      title: "post 2",
      body: "this post 2",
    },
    {
      id: 3,
      title: "post 3",
      body: "this post 3",
    },
  ];
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <Link href={`/blog/${item.id}`} className="text-indigo-500">{item.title}</Link>
            <h2>{item.body}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default page;
