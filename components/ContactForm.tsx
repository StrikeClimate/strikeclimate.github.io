"use client"

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';


const formSchema = z.object({
    fullName: z.string().min(1, 'Full Name is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    message: z.string().min(1, 'Message is required'),
});


type FormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormSchema> = data => {
        console.log(data);
    };


    
    return (
        <div className="dark:bg-[#E9E9E9]/10 bg-[#E9E9E9]/30 mx-auto border border-border-2 dark:border-secondary px-6 py-8 md:px-12 md:py-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="message-form" method="post" action="#contact">
                <div>
                    <input
                        {...register('fullName')}
                        placeholder="Enter Your Name*"
                        className="inputStyle-3"
                    />
                    {errors.fullName && <span className="inputSpan-2">{errors.fullName.message}</span>}
                </div>
               
                <div>
                    <input
                        {...register('email')}
                        placeholder="Email Address*"
                        className="inputStyle-3"
                    />
                    {errors.email && <span className="inputSpan-2">{errors.email.message}</span>}
                </div>
                <div>
                    <textarea
                        {...register('message')}
                        placeholder="Your Message*"
                        className="inputStyle-3 h-32"
                    />
                    {errors.message && <span className="inputSpan-2">{errors.message.message}</span>}
                </div>
                <Button type="submit" className="mt-4 button-dark">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ContactForm