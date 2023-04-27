const requestOptions = {
  method: 'GET'
}

const listLatestInvoices = (pageNumber, pageSize) => {
  console.info("Fetching report from backend")
  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/api/invoice/list/recent?page=${pageNumber}&size=${pageSize}`, requestOptions)
    .then(response => response.json())
}

export default listLatestInvoices;

export function getInvoice(invoiceId) {
  console.info("Fetching invoice from backend")
  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/api/invoice/${invoiceId}`, requestOptions)
    .then(response => response.json())
}

export function getItemList() {
  
  return fetch(`${process.env.REACT_APP_INVENTORY_ENDPOINT}/api/inventory`, requestOptions)
    .then(response => response.json())
}