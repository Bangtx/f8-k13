'use server'
// "use client"
// import {useParams} from "next/navigation";
// import {useState} from "react";
import { cookies } from 'next/headers'

export default async function () {
  async function action() {
    'use server';
    const cookieStore = await cookies()

    cookieStore.set('name', 'lee')
  }



  return (
    <form action={action}>
      <button type="submit">Click Me</button>
    </form>
  )
}