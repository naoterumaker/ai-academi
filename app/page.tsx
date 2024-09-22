import dynamic from 'next/dynamic'

const DynamicIndex = dynamic(() => import('@/components/index'), {
  ssr: false,
})

export default function Page() {
  return <DynamicIndex />
}