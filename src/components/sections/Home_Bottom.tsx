import { Container } from '@/components/Container';
import { visionTitle, visionContent } from '@/content/home';
import Bottom from '@/components/customer/Bottom';

export default function Home_Bottom() {
    return (
        <section className="w-full py-12 md:py-20 relative overflow-hidden bg-black">
            <Container className="relative z-10">
                <Bottom title={visionTitle} content={visionContent} />
            </Container>
        </section>
    );
}

