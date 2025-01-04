import { FC, PropsWithChildren } from 'react'
import Messenger from '@components/Layout/Messenger/index'

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout h-full w-full">
            <header className="header">
                <nav className="menu flex justify-between">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <main className="content">{children}</main>
            <footer className="mt-auto"></footer>
            <Messenger />
        </div>
    )
}

export default Layout
