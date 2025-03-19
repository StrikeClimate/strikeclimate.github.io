import React from 'react'
import { casestudies } from '@/components/constants'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import HeroComponent from '@/components/HeroComponent';
import SlideIn from '@/components/motion/SlideIn';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Image from 'next/image';

export async function generateStaticParams() {
    return casestudies.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = casestudies.find((p) => p.slug === params.slug);

    return {
        title: post?.title || 'Post Not Found',
    };
}

const page = ({ params }: { params: { slug: string } }) => {
    const post = casestudies.find((p) => p.slug === params.slug);

    if (!post) notFound();

    return (
        <div >
            <HeroComponent
                id="/"
                height="40vh"
                bgImage={post.image}
                gradientClass="bg-gradient-to-r from-secondary to-primary/70"
            >
                <div className="md:flex w-full lg:flex">
                    <div className="flex flex-col">
                        <SlideIn direction='bottom'>

                            <div className="mb-4 text-white">
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>{post.title}</BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                            <h2 className='text-white text-2xl font-medium lg:text-2xl'>
                                {post.title}
                            </h2>
                        </SlideIn>
                    </div>
                </div>
            </HeroComponent>

            <div className='container mx-auto flex flex-col justicy-center py-16 max-w-4xl'>
                <div>
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={800}
                        className='w-full my-8'
                    />
                    <h2 className='font-bold text-2xl lg:text-3xl mb-12'><span className='text-primary'>CaseStudy Title:</span> {post.title}</h2>
                    <h3 className='font-bold text-2xl mb-2'>Problem</h3>
                    <p className='mb-9 font-light'>{post.problem}</p>
                    
                    <div>
                        <h3 className='font-bold text-2xl mb-2'>Solution by <span className="text-primary"> StrikeClimate</span></h3>
                        <p className='mb-3 font-light'>{post.solution.description}</p>
                        <p className='text-xl mb-1 text-primary font-semibold'>Features:</p>
                        <ul className="list-disc pl-5 mb-3">
                            {post.solution.features.map((item, index) => (
                                <li key={index} className=" font-light pl-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className='text-xl mb-1 text-primary font-semibold'>Technologoes:</p>
                        <ul className="list-disc pl-5 mb-9">
                            {post.solution.technologies.map((item, index) => (
                                <li key={index} className=" font-light pl-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h3 className='font-bold text-2xl mb-2'>Impact</h3>
                    
                    <ul className="list-disc pl-5 mb-9">
                        {post.impact.map((item, index) => (
                            <li key={index} className=" font-light pl-1">
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>

                <Link
                    href="/case-studies"
                    className="text-primary hover:text-primary/90"
                >
                    &larr; Back to Case Studies
                </Link>
            </div>
        </div>
    )
}

export default page