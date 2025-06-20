// 'use client'

// import {useEffect, useState} from "react";
import api from "@/app/plugins/api";

export default async function Home() {
  const {data} = await api.get('posts')
  const posts = data

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
