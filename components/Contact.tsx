import React from 'react';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function Contact({}: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:anara.zhunusova@appliedtechnology.com?subject=
        ${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. 
        ${formData.email}`;
    }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-5">
        <h3 className="absolute top-20 uppercase tracking-[20px] 
        text-gray-500 lg:text-2xl">Contact</h3>

        <div className="flex flex-col space-y-10">
           <h4 className="text-xl font-semibold text-center">
                Please contact me if any questions.         
           </h4>

           <div className="space-y-5">
                <div className="flex items-center space-x-4 justify-center">
                    <EnvelopeIcon className="text-[#fed700] h-6 w-6 animate-pulse"/>
                    <p className="text-xl">anara.zhunusova@appliedtechnology.se</p>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                    <MapPinIcon className="text-[#fed700] h-6 w-6 animate-pulse"/>
                    <p className="text-xl">Lustgårdsgatan 19, Stockholm</p>
                </div>
           </div>

           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contactInput" />

                <button type="submit" className="bg-[#fed700] py-3 px-10 rounded-md text-gray-800 font-bold text-lg">Submit</button>
           </form>
        </div>
    </div>
  )
}

export default Contact;
