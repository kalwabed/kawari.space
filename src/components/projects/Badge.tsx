/* eslint-disable no-nested-ternary */
import React from 'react'

import styled from '@/styles/Badge.module.css'

// sementara pakai nested ternary
const Badge = ({ badge }: { badge: string }) => {
  return badge === 'react' ? (
    <caption className={styled.react}>React</caption>
  ) : badge === 'bootstrap' ? (
    <caption className={styled.bootstrap}>Bootstrap</caption>
  ) : badge === 'express' ? (
    <caption className={styled.express}>Express</caption>
  ) : badge === 'nextjs' ? (
    <caption className={styled.nextjs}>Next.js</caption>
  ) : (
    <caption className={styled.tailwindcss}>Tailwindcss</caption>
  )
}

export default Badge
