import FormRegister from '../common/FormRegister'
import Partner from '../common/Partner'
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
