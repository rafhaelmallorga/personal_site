import Image from 'next/image';
import Footer from '@/app/ui/footer';
import Banner from '@/app/ui/home/banner';

export default function Home() {
    return (
        <div className="bg-background custom-scrollbar w-full grow overflow-y-auto">
            <Banner />
            <div className="flex h-2000 items-center justify-center"></div>
            <Footer />
        </div>
    );
}
