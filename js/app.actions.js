export default function categoriesActions () {
  return {
    getCategories: function (categories) {
      return { type: 'GET_CATEGORIES', payload: categories }
    },
    selectCategory: function (category) {
      return { type: 'GET_CURRENT_CATEGORY', payload: category }
    }
  }
}
