import HomeDescriptionBAT from './HomeDescriptionBAT'
import HomeBanner from './HomeBanner'
import HomeDiffrentAndPioneer from './HomeDiffrentAndPioneer'
import HomeNewsFromBAT from './HomeNewsFromBAT'
import HomeNewsAndEvent from './HomeNewsAndEvent'
import HomeServicePack from './HomeServicePack'

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HomeBanner />
      </div>
      <div className='w-full '>
        <HomeDescriptionBAT />
      </div>
      <div className='w-full'>
        <HomeDiffrentAndPioneer />
      </div>
      <div className='w-full '>
        <HomeNewsFromBAT />
      </div>
      <div className='w-full '>
        <HomeNewsAndEvent />
      </div>
      <div className='w-full '>
        <HomeServicePack />
      </div>
    </>
  )
}

export default Home
