import {useState, useEffect} from 'react';
import Button from "@/components/base/button2";
import { useLocation, useNavigate } from "react-router-dom";
import { mainMenu, dappMenu } from "@/content/header";
import LogoBrand from "@/components/base/logobrand";
import LinkList from "@/components/customer/link";
import { Container } from "@/components/Container";


export default function Header() {
    const [activeKey, setActiveKey] = useState<string>('Home')
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const currentMenu = mainMenu.find(item => item.href === location.pathname);
        if (currentMenu) {
            setActiveKey(currentMenu.name);
        }
    }, [location.pathname]);

    const handleLaunchApp = () => {
        navigate(dappMenu.beta.href);
    };

    return (
        <header className="w-full bg-black/50 backdrop-blur sticky top-0 z-50">
            <Container className="py-2 flex items-center justify-between">
                <LogoBrand />
                <nav className="flex gap-2 lg:gap-4 items-center">
                    <LinkList 
                        links={mainMenu} 
                        onLinkClick={setActiveKey} 
                        activeKey={activeKey}
                    />
                    <div className="hidden md:block">
                        <Button 
                        onClick={handleLaunchApp}>
                            {dappMenu.beta.name}
                        </Button>
                    </div>
                    <div className="md:hidden relative">
                        <Button
                            onClick={handleLaunchApp}
                        >
                            {dappMenu.beta.phone}
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}


