"use client"
import {useParams} from "next/navigation";
// import {useState} from "react";

export default function () {
  const params = useParams()
  console.log(params)
  return (
    <>
      <span>product</span>
    </>
  )
}