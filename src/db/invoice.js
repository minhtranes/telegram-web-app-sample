const requestOptions = {
  method: 'GET'
}

export const exportInvoice = (invoice) => {
  console.info("Call API to export invoice");
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: new Blob([JSON.stringify(invoice)])
  }

  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/export`, opts);
}

export const updateInvoice = (invoice) => {
  console.info("Call API to export invoice");
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: new Blob([JSON.stringify(invoice)])
  }

  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/update`, opts);
}

export const listLatestInvoices = (pageNumber, pageSize) => {
  console.info("Fetching invoices from backend")
  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/list/recent?page=${pageNumber}&size=${pageSize}`, requestOptions)
    .then(response => response.json())
}

export const listStayingAndComingInvoices = (fromDate, pageNumber, pageSize) => {
  console.info("Fetching invoices from backend")

  var opts = {
    method: 'GET'
  }

  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/list/upcoming?fromDate=${fromDate}&page=${pageNumber}&size=${pageSize}`, opts)
    .then(response => response.json())
}

export function getInvoice(invoiceId) {
  console.info("Fetching invoice from backend")
  return fetch(`${process.env.REACT_APP_INVOICE_SERVICE_ENDPOINT}/${invoiceId}`, requestOptions)
    .then(response => response.json())
}

export function getPaymentMethods() {
  return [
    {
      id: "cash",
      name: "Cash",
      template: "invoice_without_transfer_fee"
    }, {
      id: "creditCard",
      name: "Credit Card",
      template: "invoice_with_transfer_fee"
    },
    {
      id: "momo",
      name: "MoMo",
      template: "invoice_without_transfer_fee"
    }, {
      id: "paypal",
      name: "Paypal",
      template: "invoice_without_transfer_fee"
    }, {
      id: "bankTransfer",
      name: "Bank Transfer",
      template: "invoice_without_transfer_fee"
    }
  ]
}

export function getItemList() {
  return [
    {
      id: "R1",
      name: "Bungalow Garden View",
      price: 499000,
      group: "room",
      service: "STAY"
    },
    {
      id: "R2",
      name: "Bungalow Garden View",
      price: 499000,
      group: "room",
      service: "STAY"
    },
    {
      id: "R3",
      name: "Bungalow Lake View",
      price: 499000,
      group: "room",
      service: "STAY"
    },
    {
      id: "R4",
      name: "Airconditioned Room Garden View",
      price: 599000,
      group: "room",
      service: "STAY"
    },
    {
      id: "R5",
      name: "Airconditioned Room Garden View",
      price: 599000,
      group: "room",
      service: "STAY"
    },
    {
      id: "R6",
      name: "Family Room Garden View",
      price: 699000,
      group: "room",
      service: "STAY"
    },
    {
      id: "F1",
      name: "Pepsi",
      price: 15000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F2",
      name: "Cocacola",
      price: 15000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F3",
      name: "7up",
      price: 15000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F4",
      name: "Bia Saigon",
      price: 25000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F5",
      name: "Bia Tiger",
      price: 25000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F6",
      name: "Ăn Tối",
      price: 150000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F7",
      name: "Ăn Trưa",
      price: 150000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "F8",
      name: "Ăn Sáng",
      price: 50000,
      group: "food",
      service: "FOOD"
    },
    {
      id: "T1",
      name: "Tour Mekong Nhom 2 khach",
      price: 700000,
      group: "tour",
      service: "TOUR"
    },
    {
      id: "T2",
      name: "Tour Mekong Nhom 3 khach",
      price: 600000,
      group: "tour",
      service: "TOUR"
    },
    {
      id: "T3",
      name: "Tour Mekong Nhom 4 khach",
      price: 500000,
      group: "tour",
      service: "TOUR"
    },
    {
      id: "T4",
      name: "Tour Mekong Nhom 5 khach",
      price: 450000,
      group: "tour",
      service: "TOUR"
    },
    {
      id: "T5",
      name: "Tour Mekong Nhom 6 khach",
      price: 400000,
      group: "tour",
      service: "TOUR"
    },
    {
      id: "T7",
      name: "Tour Biking Can Tho",
      price: 4000000,
      group: "tour",
      service: "TOUR"
    }
  ]
}