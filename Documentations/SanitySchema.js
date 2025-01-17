export  const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category'
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true // Enables image cropping
      }
    }
  ]
}

// Order schema
export const orderSchema = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'orderId',
      type: 'number',
      title: 'Order ID'
    },
    {
      name: 'productId',
      type: 'number',
      title: 'Product ID'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status'
    },
    {
      name: 'customerInfo',
      type: 'object',
      title: 'Customer Information',
      fields: [
        {
          name: 'phone',
          type: 'string',
          title: 'Phone'
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email'
        },
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address'
        }
      ]
    }  
  ]
}

// Customer Schema
export const customerSchema = {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID'
    },
    {
      name: 'customerInfo',
      type: 'object',
      title: 'Customer Information',
      fields: [
        {
          name: 'phone',
          type: 'string',
          title: 'Phone'
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email'
        },
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address'
        }
      ]
    },
    {
      name: 'orderHistory',
      type: 'array',
      title: 'Order History',
      of: [{ type: 'string' }]
    }
  ]
}

// Payment Schema
export const paymentSchema = {
  name: 'payment',
  type: 'document',
  title: 'Payment',
  fields: [
    {
      name: 'paymentId',
      type: 'number',
      title: 'Payment ID'
    },
    {
      name: 'order',
      type: 'reference',
      to: [{type: 'order'}],
      title: 'Order'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status'
    },
    {
      name: 'paymentMethod',
      type: 'string',
      title: 'Payment Method'
    },
    {
      name: 'amount',
      type: 'number',
      title: 'Amount'
    },
    {
      name: 'transaction',
      type: 'string',
      title: 'Transaction'
    }
  ]
}

// Shipment Schema
export const shipmentSchema = {
  name: 'shipment',
  type: 'document',
  title: 'Shipment',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID'
    },
    {
      name: 'order',
      type: 'reference',
      to: [{type: 'order'}],
      title: 'Order'
    },
    {
      name: 'deliveryDate',
      type: 'datetime',
      title: 'Delivery Date'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status'
    }
  ]
}

// Delivery Zone
export const deliveryZoneSchema = {
  name: 'deliveryZone',
  type: 'document',
  title: 'Delivery Zone',
  fields: [
    {
      name: 'zoneName',
      type: 'string',
      title: 'Zone Name'
    },
    {
      name: 'coverageArea',
      type: 'string',
      title: 'Coverage Area'
    },
    {
      name: 'assignedDrivers',
      type: 'array',
      title: 'Assigned Drivers',
      of: [{ type: 'string' }]
    },
    {
      name: 'assignedCourier',
      type: 'string',
      title: 'Assigned Courier'
    }
  ]
}


export default { 
  name: 'default',
                types: [
                  productSchema,
                  orderSchema,
                  customerSchema,
                  paymentSchema,
                  shipmentSchema,
                  deliveryZoneSchema
                ] }
