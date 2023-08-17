import * as Yup from 'yup'
type TranslationFunction = (key: string) => string

const phoneRegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
export const nameValidation = (t: TranslationFunction) =>
  Yup.string()
    .required(t('validate.username_required'))
    .min(3, t('validate.username_min_length'))
    .max(20, t('validate.username_max_length'))

export const emailValidation = (t: TranslationFunction) =>
  Yup.string().required(t('validate.email_required')).email(t('validate.email_invalid'))
export const phoneValidation = (t: TranslationFunction) =>
  Yup.string().required(t('validate.phone_required')).matches(phoneRegExp, t('validate.phone_invalid'))
export const fileValidation = (t: TranslationFunction) => Yup.string().required(t('validate.file_required'))
