import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-50 font-sans dark:bg-black">
            <div className="bg-background border-strokes flex h-16 w-full items-center border-b-4">
                <div className="flex w-full items-center justify-between pr-3 pl-3">
                    <Image
                        src="/old_computer_logo.png"
                        width={40}
                        height={40}
                        alt="Old nostalgic computer logo"
                    />
                    <Image
                        src="/hamburguer_menu.png"
                        width={40}
                        height={40}
                        alt="Old nostalgic computer logo"
                    />
                </div>
            </div>
            <div className="bg-background w-full grow"></div>
            <div className="bg-cards h-16 w-full"></div>
        </div>
    );
}
