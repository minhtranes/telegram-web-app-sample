const requestOptions = {
  method: 'POST',
  headers: { 'Origin': 'phucsinhhcm.hopto.org' },
}

export function getItemList() {
  
  return fetch(`${process.env.REACT_APP_INVENTORY_ENDPOINT}/inventory/_search`, requestOptions)
    .then(response => response.json())
    .then(resp => resp.hits.hits.map(e=>e._source))
}