"use client"
import { FOOTER_ITEMS } from "@/constants/FOOTER_ITEMS"


const Footer = () => {
  return (
    <section className='md:p-8 p-4 bg-surface flex md:items-center w-full md:h-40'>
        <footer className='md:flex items-center justify-between w-full'>    
            <div>
                <h4 className="text-2xl text-primary font-extrabold text-center">THE MONOLITH</h4>
            </div>
            <div>
                <nav className="md:flex">
                    <ul className="md:flex">
                    {FOOTER_ITEMS.map((item) => (
                        <li className="flex items-center w-full" key={item.id}>
                            <a 
                                key={item.id} 
                                href={item.href} 
                                className="text-tertiary uppercase text-sm hover:text-primary flex items-center md:mx-8 center justify-center w-full my-4">
                                {item.label}  
                            </a>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
            <div>
               <p className="md:text-md text-tertiary text-center text-xs">&copy; {new Date().getFullYear()} The Monolith Editorial. All rights reserved.</p>
            </div>
        </footer>
    </section>
  )
}

export default Footer