"use client";

import { useSendEmail } from "@/hooks/query/contact-us/useSendEmail";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import AlertMessage from "../alerts/AlertMessage";
import ImageButtons from "../buttons/ImageButtons";

export default function JoinUsForm() {
    const [message, setMessage] = useState('');
    const emailMutation = useSendEmail();

    const formik = useFormik({
        initialValues: {
            full_name: '',
            email: '',
            phone: '',
            remember: false
        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .required('Name is required')
                .matches(/^[a-zA-Z ]*$/, 'Only alphabets are allowed'),
            email: Yup.string()
                .required('Email is required')
                .email('Invalid email address'),
            phone: Yup.string()
                .required('Phone is required')
                .matches(/^[0-9]*$/, 'Only numbers are allowed')
                .min(10, 'Phone number must be 10 digits')
                .max(15, 'Phone number must be 15 digits'),
            remember: Yup.boolean()
        }),
        onSubmit: async (values) => {
            try {
                const response = await emailMutation.mutateAsync(values);
                formik.resetForm();
                setMessage(response);
            } catch (error) {
                console.error("Error sending email:", error);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto dark:text-white">
            <div className="mb-5">
                <label htmlFor="full_name" className="block mb-2 text-base font-medium">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-500 h-[3.5rem] text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your full name"
                    {...formik.getFieldProps('full_name')} />
                {formik.touched.full_name && formik.errors.full_name ? <div className="text-red-500">{formik.errors.full_name}</div> : null}
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-base font-medium">Email Address</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 h-[3.5rem] text-gray-500 text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your email address"
                    {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 text-base font-medium">Phone Number</label>
                <input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 h-[3.5rem] text-gray-500 text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your contact number"
                    {...formik.getFieldProps('phone')} />
                {formik.touched.phone && formik.errors.phone ? <div className="text-red-500">{formik.errors.phone}</div> : null}
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="remember" name="remember" type="checkbox" value="1" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        {...formik.getFieldProps('remember')} />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium">I'm ready to receive special missions and rewards from KURIXEL Studios</label>
            </div>
            {message && <AlertMessage type="success" message={message} />}
            <ImageButtons
                isSubmit={true}
                text={'Join the Adventure'}
                source="/images/Group.png"
                alt={'Join The adventure Button'}
                className="mt-8 px-6 py-2 md:px-8 md:py-5"
                textSize="text-base"
            />
        </form>
    )
}
