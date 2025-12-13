import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-zinc-50 font-sans dark:bg-black">
      <div className='flex items-center bg-background w-full h-16 border-b-4 border-strokes'>
        <div className='flex items-center justify-between w-full pl-3 pr-3'>
            <Image
                src='/old_computer_logo.png'
                width={40}
                height={40}
                alt='Old nostalgic computer logo'
            />
            <Image
                src='/hamburguer_menu.png'
                width={40}
                height={40}
                alt='Old nostalgic computer logo'
            />
        </div>
      </div>
        <div className='bg-background w-full grow'></div>
        <div className='bg-cards w-full h-16'></div>
    </div>
  );
}
