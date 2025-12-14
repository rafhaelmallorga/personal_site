import Image from 'next/image';
import Footer from '@/app/ui/footer';

export default function Home() {
    return (
        <div className="bg-background custom-scrollbar w-full grow overflow-y-auto">
            <div className="flex h-2000 items-center justify-center">a</div>
            <Footer />
        </div>
    );
}
