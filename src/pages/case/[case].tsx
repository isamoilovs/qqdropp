import { useRouter } from 'next/router'
import Header from '../../components/Header'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    </div>
  )
}
