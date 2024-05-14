"use client";
import { useState } from 'react';
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { NextSeo } from "next-seo";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <NextSeo
                title="Your Company Name | Your App Name"
                description="This is a brief description of your app. It provides an overview of the app's features and benefits."
                openGraph={{
                    title: "Your Company Name | Your App Name",
                    description: "This is a brief description of your app. It provides an overview of the app's features and benefits.",
                    images: [
                        {
                            url: "/path/to/your/image.jpg",
                            width: 800,
                            height: 600,
                            alt: "Image description",
                        },
                    ],
                    site_name: "Your Site Name",
                }}
            />
            <div>
                <h1 className="text-4xl font-bold text-center">Welcome to the Demo</h1>
                <section className="container mx-auto max-w-7xl px-6 py-16">
                    <div className="flex justify-center mb-8">
                        <Input
                            placeholder="Type something here"
                            size="lg"
                            value={searchTerm}                           
                        />
                    </div>               
                </section>
            </div>
        </>
    );
}
