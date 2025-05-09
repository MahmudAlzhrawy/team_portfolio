'use client'
import ReviewForm from "@/components/OpinionForm";
import Blog from "@/components/Blog";
import { useState } from "react";


export default function Opinion() {
    const [addReview, setAc] = useState<boolean>(false);
    const [reload, setReload] = useState<number>(0);

    return (
        <div className="w-full min-h-screen mt-10 bg-gradient-to-br from-white to-secondary-light relative py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl text-center font-bold text-primary-dark mb-10">
                    Clients Reviews
                </h2>

                {addReview && (
                    <div className="mb-8 bg-white border border-gray-light p-6 rounded-2xl shadow-sm transition-all duration-300">
                        <ReviewForm setReload={setReload} setAc={setAc} />
                    </div>
                )}

                <div className="bg-white border border-gray-light p-6 rounded-2xl shadow-sm">
                    <Blog reload={reload} />
                </div>
            </div>

            <div className="fixed bottom-6 left-6">
                <button
                    className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-md"
                    onClick={() => {
                        setAc((el) => !el)
                        setReload((el) => el + 1)
                    }}
                >
                    {addReview ? "Cancel Review" : "Add Review"}
                </button>
            </div>
        </div>
    );
}
