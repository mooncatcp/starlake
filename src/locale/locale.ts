import { createI18n } from 'vue-i18n'
import en from './en.json'
import ru from './ru.json'

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en, ru,
  },
})
