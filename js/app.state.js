export const initialCategories = [
  {id: 0, label: 'Initial'},
  {id: 1, label: 'Categories'}
]

export function categoriesReducer (state, args) {
  if (!state) {
    state = this.initialCategories
  }

  switch (args.type) {
    case 'GET_CATEGORIES':
      return args.payload || state
    default:
      return state
  }
}
