import { title } from "process";

const orderSchema = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'First Name'
        },
        {
            name: 'lastName',
            type: 'string',
            title: 'Last Name'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string',
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: "discount",
            title: 'Discount',
            type: 'number'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }]
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
        {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Success', value: 'success' },
                    { title: 'Dispatch', value: 'dispatch' },
                ],
                layout: 'radio'
            },
            initialValue: 'pending'
        }
    ]
};

export default orderSchema;
