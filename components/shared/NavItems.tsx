'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

function NavItems() {
    const pathname = usePathname();

    return (
        <ul className='md:flex-between flex w-full flex-col items-start md:flex-row gap-5'>
            {
                headerLinks.map((link)=>{
                    const isActive = pathname === link.route;
                    
                    return (
                        <li key = {link.route} className={`${isActive && 'text-primary-500'} 
                        flex-center p-midium-16 whitespace-nowrap`}>
                            <Link href={link.route}>{link.label}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
    }

export default NavItems;