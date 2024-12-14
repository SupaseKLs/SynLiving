"use client";
import Fur5 from '@/assets/images/Fur5.png'
import Image from 'next/image';
import React, { useState } from "react";
import Fav from '@/assets/svg/favorite.svg'
import AddtoCart from '@/assets/svg/addToCart.svg'
const categories = ["All", "Chair", "Table"];
const popularData = [
    { id: 1, image: "/images/Fur5.png", title: "Hedaety", category: "Chair", price: "$200.00" },
    { id: 2, image: "/images/Fur5.png", title: "Healthy", category: "Chair", price: "$200.00" },
    { id: 3, image: "/images/Fur5.png", title: " Living Tips", category: "Table", price: "$200.00" },
    { id: 4, image: "/images/Fur5.png", title: "Work-Life", category: "Table", price: "$200.00" },
    { id: 5, image: "/images/Fur5.png", title: "The Future", category: "Table", price: "$200.00" },
];

const FilterComponent = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredData =
        activeCategory === "All"
            ? popularData
            : popularData.filter((item) => item.category === activeCategory);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex space-x-4 my-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`uppercase w-20 h-8 rounded-full ${activeCategory === category ? "bg-secondary text-white" : "bg-transparent border text-secondary border-secondary"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Filtered Data */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="shadow-md"
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <Image src={item.image} width={440} height={440} alt="Furniture" className="w-full h-full object-cover" />
                                <div className="absolute text-primary bottom-0 pl-4 pb-4 text-2xl">
                                    <h1>{item.title}</h1>
                                    <h1>{item.price}</h1>
                                </div>
                                <div className="absolute bottom-0 right-0 pr-4 pb-4">
                                    <div className='mb-2 inset-0 p-4 bg-white rounded-full bg-opacity-50 backdrop-blur-sm'>
                                        <Image src={Fav} width={30} height={30} alt="favorite" />
                                    </div>
                                    <div className='inset-0 p-4 bg-white rounded-full bg-opacity-50 backdrop-blur-sm'>
                                        <Image src={AddtoCart} width={30} height={30} alt="favorite" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-muted-foreground">
                        No items found in this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FilterComponent;
