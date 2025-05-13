import { ActionButton } from '@/components/Button/ActionButton'
import { ComponentProps, useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import appIcon from '../../../../resources/icon.png'

export type HomePageProps = {
    onGetStarted: () => void
} & ComponentProps<'div'>

export const HomePage = ({ className, onGetStarted, ...props }: HomePageProps) => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    const openWebsite = () => {
        window.open('https://www.yalla-learn.me/', '_blank');
    };

    return (
        <div
            className={twMerge(
                'flex flex-col items-center justify-center h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900', 
                className
            )}
            {...props}
        >
            <div className={`flex flex-col items-center max-w-xl p-8 text-center transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-xl animate-pulse"></div>
                    <img
                        src={appIcon}
                        alt="YallaLearn Logo"
                        className="relative w-32 h-32 mb-6 rounded-full shadow-2xl transform transition-transform hover:scale-105 duration-300"
                    />
                </div>
                
                <h1 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Yalla Learn
                </h1>
                
                <p className="mb-8 text-lg text-zinc-200 leading-relaxed">
                    Your elegant note-taking app designed for creativity and productivity.
                    Write, organize, and access your notes from anywhere, anytime.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <ActionButton
                        onClick={onGetStarted}
                        className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                    >
                        Get Started
                    </ActionButton>
                    
                    <ActionButton
                        onClick={openWebsite}
                        className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-zinc-700 to-zinc-600 hover:from-zinc-600 hover:to-zinc-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Visit Website
                    </ActionButton>
                </div>
                
                <div className="relative mt-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300 max-w-md">
                    <p className="text-zinc-300 text-sm">
                        <span className="font-bold text-indigo-400">✨ Discover More:</span> Join our growing community at <a href="https://www.yalla-learn.me/" className="text-pink-400 hover:text-pink-300 underline decoration-dotted underline-offset-2 transition-colors duration-300" target="_blank" rel="noopener noreferrer">yalla-learn.me</a> for AI tools, productivity resources, blogs, Q&A, and more.
                    </p>
                </div>
            </div>
        </div>
    )
}
