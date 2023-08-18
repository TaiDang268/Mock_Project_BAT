import HomeBanner from './HomeBanner'
import HomeDescriptionBAT from './HomeDescriptionBAT'
import HomeDiffrentAndPioneer from './HomeDiffrentAndPioneer'
import HomeNewsAndEvent from './HomeNewsAndEvent'
import HomeNewsFromBAT from './HomeNewsFromBAT'
import HomeServicePack from './HomeServicePack'
import FormRegister from '../common/FormRegister'
import Partner from '../common/Partner'

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
      <div className='w-full '>
        <FormRegister />
      </div>
      <div className='w-full '>
        <Partner />
      </div>
    </>
  )
}

export default Home
