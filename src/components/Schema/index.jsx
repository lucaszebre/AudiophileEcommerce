import React from 'react'
import * as yup from 'yup'
export const schema = yup.object().shape({
    FullName: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    Number: yup.string().required('Number is required'),
    Adresse: yup.string().required('Adress is required'),
    Zip: yup.string().required('Zip is required'),
    City: yup.string().required('City is required'),
    Country: yup.string().required('Country is required'),
    Cash: yup.string().required('Cash is required'),
    EmoneyNumber: yup.string().required('EmoneyNumber is required'),
    EmoneyPin: yup.string().required('EmoneyPin is required'),
})
