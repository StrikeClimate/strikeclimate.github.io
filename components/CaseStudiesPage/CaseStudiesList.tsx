import React from "react";
import { casestudy } from '@/components/constants'
import Image from 'next/image'
// import TruncateText from '@/components/TruncateText'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CaseStudiesList = () => {

  return (
    <section className="py-12 md:py-24 lg:py-24">
      <div className="container mx-auto md:max-w-5xl flex flex-col md:flex-row gap-12 md:gap-32 items-center w-full">
        <div className='flex items-center justify-center  w-full'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 ">
            {casestudy.length === 0 ? (
              <p className="col-span-full text-center">
                No case studies available at the moment.
              </p>
            ) : (
              casestudy.map((post) => (
                <div key={post.id} className="dark:bg-[#E9E9E9]/10 bg-[#E9E9E9]/30 p-3 flex flex-col rounded-md">
                  <article>
                    <Image
                      src={post.image}
                      width={600}
                      height={150}
                      alt={post.title}
                      className='w-full bg-cover rounded-md mb-3'
                    />
                    <h2 className="text-md font-semibold">{post.title}</h2>
                    {/* <TruncateText wordLimit={15} className="text-sm font-light">{post.solutionContent}</TruncateText> */}
                    <p className="text-sm font-light line-clamp-3">{post.solutionContent}</p>
                    <div className='mt-5'>

                      <Button asChild>
                        <Link href={`/case-studies/${post.slug}`}>
                        {/* <Link href={(`/case-studies/${post.title.toLowerCase().replace(/\s+/g, "-")}`)}> */}
                          Read More
                        </Link>
                      </Button>
                    </div>

                  </article>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesList
