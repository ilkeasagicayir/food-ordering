import * as yup from 'yup';

export const reservationSchema = yup.object({
    fullName: yup.string().required('Full name is required').min(3, 'Full name must be at least 3 characters'),
    phoneNumber: yup.string().required('Phone number is required').min(9, 'Phone number must be at least 9 characters'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    people: yup.number().required('People is required').min(1, 'People must be at least 1'),
    date: yup.date().required('Date is required').min(new Date(), 'Date must be a future date'),
})