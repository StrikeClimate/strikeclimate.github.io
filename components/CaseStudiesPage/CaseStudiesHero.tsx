import HeroComponent from "../HeroComponent";
import { CaseStudiesHero as CaseStudiesHeroData } from '@/constants';
import SlideIn from "@/components/motion/SlideIn";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";


export default function CaseStudiesHero() {
    return (
        <div>
            <HeroComponent
                id="/"
                height="50vh"
                bgImage="/images/lake.jpg"
                gradientClass="bg-gradient-to-r from-primary to-transparent"
            >
                <div className="flex justify-center w-full">
                    <div className="flex flex-col lg:items-center">
                        <div className="mb-4 text-white">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/case-studies" className="">Case Studies</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <SlideIn direction='bottom'>
                            {CaseStudiesHeroData.map((item, index) => (
                                <div key={index} className='space-y-2 lg:text-center'>
                                    <h2 className='text-white text-2xl font-medium lg:text-4xl'>{item.text}</h2>
                                    <h5 className='text-white max-w-lg'>{item.subText}</h5>
                                </div>
                            ))}
                        </SlideIn>
                    </div>
                </div>
            </HeroComponent>
        </div>
    )
}
