import { useEffect, useState } from 'react'

const TOTAL = 120 // 2 daqiqa
const HOT = 20 // oxirgi 20 soniyada qizil bo'lib tebranadi

export default function Timer() {
  const [left, setLeft] = useState(TOTAL)

  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const l = Math.max(0, TOTAL - Math.floor((Date.now() - start) / 1000))
      setLeft(l)
      if (!l) clearInterval(id)
    }, 250)
    return () => clearInterval(id)
  }, [])

  const m = Math.floor(left / 60)
  const s = String(left % 60).padStart(2, '0')
  const hot = left <= HOT && left > 0

  return (
    <div className={'timer' + (hot ? ' hot' : '') + (left ? '' : ' done')} role="timer" aria-live="off">
      <small>Aksiya tugashiga</small>
      <b>0{m}:{s}</b>
    </div>
  )
}
