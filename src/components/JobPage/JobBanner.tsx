import images from '~/assets/images'

const JobBanner = () => {
  return (
    <>
      <div className='w-full h-[334px] bg-[#E9F9D6] grid grid-cols-12 '>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] left-[100px] '>
            <img src={images.job_banner_1} />
          </div>
        </div>
        <div className='xl:col-span-4 my-auto col-span-12 max-xl:mx-auto '>
          <p className='font-bold text-[32px] text-[#008345] uppercase text-center '>
            Công việc giấc mơ của bạn là đây
          </p>
          <p className='text-center text-[#444444]'>
            BATTECH tin tưởng vào tiềm năng và sự vĩ đại của mỗi người. Chúng tôi coi trọng việc học hỏi, hợp tác và hỗ
            trợ lẫn nhau. Khám phá bản thân. Hãy cho chúng tôi biết bạn đã có những gì và chúng tôi sẽ liên hệ với bạn
            nếu có một vai trò nào đó có vẻ phù hợp.
          </p>
        </div>
        <div className='xl:col-span-4 relative  '>
          <div className='absolute bottom-[-66px] right-[100px] '>
            <img src={images.job_banner_2} />
          </div>
        </div>
      </div>
    </>
  )
}
export default JobBanner
