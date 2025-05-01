"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StarRating from '@/components/StarRating';
import { AiOutlineClose } from "react-icons/ai"; // استيراد أيقونة الإغلاق
import { Toast } from '@/sweetAlert2';
const ReviewForm = ({setReload,setAc}:{
    setAc:React.Dispatch<React.SetStateAction<boolean>>,
    setReload:React.Dispatch<React.SetStateAction<number>>

}) => {
    const formik = useFormik({
        initialValues: {
            userName:"",
            rate: 0,
            opinion: '',
        },
        validationSchema: Yup.object({
            userName:Yup.string().required("userName is required"),
            rate: Yup.number()
                .min(1, 'يجب أن يكون التقييم 1 على الأقل')
                .max(5, 'يجب ألا يتجاوز التقييم 5')
                .required('التقييم مطلوب'),
            opinion: Yup.string()
            .min(10, 'يجب أن يحتوي الرأي على 10 أحرف على الأقل')
            .required('يرجى كتابة رأيك'),
        }),
        onSubmit: async (values) => {
            console.log('Submitted data:', values);
            if ( !values.rate || !values.opinion) {
                console.error("بعض القيم غير صالحة، تحقق من البيانات قبل الإرسال.");
                return;
            }
            const res = await fetch(`/api/blog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });
            if (res.ok) {
                setReload(el => el+1)
                setAc(false)
                Toast.fire({
                    icon: 'success',
                    title: 'تم التقييم بنجاح',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                const errorMessage = await res.text();
                console.error('فشل في إرسال التقييم:', errorMessage);
            }
        },        
        
    });
    return (
        <div className="fixed inset-0 flex justify-center  items-center backdrop-blur-lg bg-black/5 z-50">
            <div className="relative bg-white shadow-lg backdrop-blur-lg rounded-lg p-8 max-w-md w-full">
            <AiOutlineClose
                    className="absolute top-3 right-3 text-gray-700 text-2xl cursor-pointer hover:text-red-500 transition"
                    onClick={() => setAc(false)}
                />
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6"> Review Our service</h2>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    {/* تقييم النجوم */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Rate:</label>
                        <StarRating value={formik.values.rate} onChange={(newValue) => formik.setFieldValue("rate", newValue)} />
                        {formik.touched.rate && formik.errors.rate && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.rate}</div>
                        )}
                    </div>

                    {/* الرأي */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Yor Name:</label>
                        <input
                            {...formik.getFieldProps("userName")}
                            className="w-full text-black/55  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        
                        />
                        {formik.touched.userName && formik.errors.userName && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.userName}</div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Yor opinion:</label>
                        <textarea
                            {...formik.getFieldProps("opinion")}
                            className="w-full text-black/55  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={4}
                        />
                        {formik.touched.opinion && formik.errors.opinion && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.opinion}</div>
                        )}
                    </div>

                    {/* زر الإرسال */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Puplish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
