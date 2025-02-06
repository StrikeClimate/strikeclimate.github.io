import React from 'react'
import { casestudy } from '@/components/constants'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import HeroComponent from '@/components/HeroComponent';
import SlideIn from '@/components/motion/SlideIn';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Image from 'next/image';

export async function generateStaticParams() {
    return casestudy.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = casestudy.find((p) => p.slug === params.slug);

    return {
        title: post?.title || 'Post Not Found',
    };
}

const page = ({ params }: { params: { slug: string } }) => {
    const post = casestudy.find((p) => p.slug === params.slug);

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
                    <h3 className='font-bold text-2xl mb-2'>{post.problemTitle}</h3>
                    <p className='mb-9 font-light'>{post.problemContent}</p>
                    <h3 className='font-bold text-2xl mb-2'>{post.solutionTitle}<span className="text-primary"> StrikeClimate</span></h3>
                    <p className='mb-9 font-light'>{post.solutionContent}</p>
                    <h3 className='font-bold text-2xl mb-2'>{post.impactTitle}</h3>
                    <p className='mb-9 font-light'>{post.impactContent}</p>

                </div>
            <div className=" py-8">
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