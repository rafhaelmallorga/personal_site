import Footer from '@/app/ui/footer';
import Banner from '@/app/ui/home/banner';
import FastLinks from '@/app/ui/home/fast_links';
import SectionOne from '@/app/ui/home/section_one';

export default function Home() {
    return (
        <div className="bg-background custom-scrollbar w-full grow overflow-y-auto">
            <Banner />
            <FastLinks />
            <SectionOne />
            <Footer />
        </div>
    );
}
