'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function () {
  const router = useRouter()

  const onClick = (id: number) => {
    console.log(id)
    router.push(`products/${id}`)
  }

  return (
    <>
      <h1>Products</h1>
      {/*<Link href={"products/1"}>product 1</Link>*/}
      <button onClick={() => onClick(1)}>product 1</button>
      <br/>
      {/*<Link href={"products/2"}>product 2</Link>*/}
      <button onClick={() => onClick(2)}>product 2</button>
    </>
  )
}