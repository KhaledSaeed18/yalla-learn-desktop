import { ActionButton } from '@/components/Button/ActionButton'
import { appDirectoryName } from '@shared/constants'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import appIcon from '../../../../resources/icon.png'

export type HomePageProps = {
    onGetStarted: () => void
} & ComponentProps<'div'>

export const HomePage = ({ className, onGetStarted, ...props }: HomePageProps) => {
    return (
        <div
            className={twMerge('flex flex-col items-center justify-center h-full bg-zinc-900/80', className)}
            {...props}
        >
            <div className="flex flex-col items-center max-w-lg p-8 text-center">
                <img
                    src={appIcon}
                    alt="YallaLearn Logo"
                    className="w-32 h-32 mb-6"
                />
                <h1 className="mb-4 text-4xl font-bold text-white">Yalla Learn</h1>
                <p className="mb-8 text-lg text-zinc-300">
                    Your elegant note-taking app. Write, organize and access your notes from anywhere.
                </p>
                <ActionButton
                    onClick={onGetStarted}
                    className="px-6 py-3 text-lg font-bold bg-zinc-700 hover:bg-zinc-600"
                >
                    Get Started
                </ActionButton>
            </div>
        </div>
    )
}
