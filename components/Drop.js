import React from 'react'
import { Disclosure, Menu } from '@headlessui/react';
import Link from 'next/link';

const dropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M6.293 7.707a1 1 0 011.414 0l3 3a1 1 0 001.414 0l3-3a1 1 0 011.414 1.414l-3 3a3 3 0 01-4.242 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/login" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`} >
                      Manufacturer
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/login" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`} >
                    Airlines
                  </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/login" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`} >
                    Recycler
                  </Link>
                  )}
                </Menu.Item>
              </Menu>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default dropdown
