// 'use client'

// import {useEffect, useState} from "react";
import api from "@/app/plugins/api";
import {revalidateTag} from "next/cache";

export default async function Home() {
  const data = await fetch('http://localhost:4000/posts', { next: { tags: ['collection'] } })
  const posts = await data.json()

  return (
    <>
      <h1>Home</h1>
      {
        posts.map(post => {
          return <p key={post.id}>{post.title}</p>
        })
      }
    </>
  );
}
