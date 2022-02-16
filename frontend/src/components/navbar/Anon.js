import React from 'react'
import { v4 as uuidv4 } from "uuid";

export default function Anon() {
  return (
    <div>Anonymous: {uuidv4()}</div>
  )
}