import dynamic from 'next/dynamic'

const DynamicIndex = dynamic(() => import('@/components/index').then((mod) => mod.Index), {
  ssr: false,
})

export default function Page() {
  return <DynamicIndex />
}