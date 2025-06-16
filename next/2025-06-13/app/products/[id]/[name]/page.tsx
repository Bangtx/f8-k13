"use client"
import {useParams} from "next/navigation";
import { useSearchParams } from 'next/navigation'

// import {useState} from "react";

export default function () {
  const params = useParams()
  const searchParams = useSearchParams()
  console.log(searchParams.get('age'))
  return (
    <>
      <span>product ben trong</span>
    </>
  )
}