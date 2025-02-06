import React from 'react'
import { casestudy } from '@/components/constant'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import HeroComponent from '@/components/HeroComponent';
import SlideIn from '@/components/motion/SlideIn';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

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
                Rich Mercy of the Lord, There is Nothing Like it!
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