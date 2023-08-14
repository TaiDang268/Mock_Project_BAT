import images from '~/assets/images'
import ContactForm from './ContactForm'

const arr = [
  {
    title: 'Địa chỉ',
    icon: images.contact_address,
    name: 'Tầng 2, Tòa HH02, Eco Lakeview, 32 Đại Từ, P. Đại Kim, Q. Hoàng Mai, TP. Hà Nội'
  },
  {
    title: 'Email',
    icon: images.contact_email,
    name: 'cskh@battech.vn'
  },
  {
    title: 'SDT',
    icon: images.contact_phone,
    name: '024 85 896 999'
  }
]
const ContactPage = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto max-xl: px-3  '>
        <div className='flex my-20 max-md:flex-col'>
          <div className='w-1/2 max-md:w-full'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.978965078186!2d105.81467728715822!3d20.962763600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad2838c1faed%3A0x22f08f742bc365f6!2sBAT%20GROUP!5e0!3m2!1svi!2s!4v1691544457890!5m2!1svi!2s'
              width='600'
              height='450'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-xl overflow-hidden w-full min-w-[300px]'
            ></iframe>
          </div>
          <div className='w-1/2 md:pl-8 max-md:w-full max-md:my-6 '>
            <p className='uppercase font-bold text-[24px]'>Liên hệ với chúng tôi </p>
            <p className='font-medium'>
              Hãy gọi cho chúng tôi hoặc ghé qua bất cứ lúc nào, chúng tôi sẽ cố gắng giải đáp mọi thắc mắc trong vòng
              24 giờ vào các ngày làm việc. Rất hân hạnh được trả lời câu hỏi của bạn.
            </p>
            <div className='my-5'>
              {arr.map((item) => (
                <div className='rounded-xl shadow-md p-4 my-4'>
                  <div className='flex pb-2'>
                    <img src={item.icon} className='mr-3' />
                    <p className='text-[#7A7A7A] font-medium'>{item.title}</p>
                  </div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  )
}
export default ContactPage
