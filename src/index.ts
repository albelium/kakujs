import { string } from './modules/string'
import { food } from './modules/food'

export const kaku = {
  food,
  string,
}

export { food } from './modules/food'
export { string } from './modules/string'

export { adjective } from './modules/food/adjective'
export { fruit } from './modules/food/fruit'
export { uuid } from './modules/string/uuid'
