import { FC, PropsWithChildren } from 'react'
import Messenger from '@components/Layout/Messenger/index'
import {Outlet, Link} from "react-router-dom";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout h-full w-full xs:px-3 md:px-6">
            <header className="header">
                <nav className="menu flex justify-between gap-5">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/exercise/article/1'}>Exercises</Link>
                </nav>
            </header>
            <main className="content">{children}</main>
            <footer className="mt-auto"></footer>
            <Messenger />
            <Outlet />
        </div>
    )
}

export default Layout
