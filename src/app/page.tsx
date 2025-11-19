import Footer from '@/components/Footer'
import Timer from '@/components/Timer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <Timer />
      </div>
      <Footer />
    </div>
  )
}

export default Home
