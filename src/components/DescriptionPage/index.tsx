import FormRegister from '../FormRegister'
import Partner from '../Partner'
import DescBATTECH from './DescBATTECH'
import DescBanner from './DescBanner'
import DescPrinciple from './DescPrinciple'
import DescStaff from './DescStaff'

const DescriptionPage = () => {
  return (
    <>
      <DescBanner />
      <DescBATTECH />
      <DescPrinciple />
      <DescStaff />
      <FormRegister />
      <Partner />
    </>
  )
}
export default DescriptionPage
