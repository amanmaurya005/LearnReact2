import React from 'react'

export default function Routing() {
    return (
        <>
            <header className='flex items-center justify-between p-4 bg-amber-800 text-xl text-white w-full'>
                <div className="logo">Logo</div>
                <div className="leftside flex items-center justify-between w-1/2">
                <div className="menus w-2/3">
                    <ul className='flex items-center justify-around w-full'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tutorials</li>
                    </ul>
                </div>
                <div className="info w-1/6">
                    <ul className='flex items-center justify-between'>
                        <li>cart</li>
                        <li>Login</li>
                    </ul>
                </div>
                </div>
            </header>
        </>
    )
}
