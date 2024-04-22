// const BASE_URL = "http://158.180.237.16:8080/api/v1/product/findall"
const BASE_URL = "https://s14-16-n-java-production.up.railway.app/api/v1/"

const error = {
  '404': 'No hay resultados',
}

function confirm(res) {
  if (res.ok) return res.json()
  return Promise.reject(error[res.status] ?? 'No sabemos que ocurrió')
}

export function searchMeal(form) {
  const params = Object
    .entries(form)
    .filter(([,value]) => value)
    .map(([key, value]) => key + '=' + value)
    .join('&')

  return fetch(`${BASE_URL}product/search?${params}`)
    .then(confirm)
}