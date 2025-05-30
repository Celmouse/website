'use client'
import { downloadUrls } from '@/lib/download-urls';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function DownloadButton() {
    const [os, setOs] = useState('');

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        // if (/Windows/i.test(userAgent)) {
        //     setOs('Windows');
        // } else 
        if (/Mac/i.test(userAgent)) {
            setOs('Mac');
        } 
        // else if (/Linux/i.test(userAgent)) {
        //     setOs('Linux');
        // } 
        else if (/Android/i.test(userAgent)) {
            setOs('Android');
        } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            setOs('iOS');
        } else {
            setOs('Outro');
        }
    }, []);



    return (
        <div>
{/*             {os === 'Windows' && <Button asChild><Link href={downloadUrls.win}>Download for Windows</Link></Button>} */}
            {os === 'Mac' && <Button asChild><Link href={downloadUrls.macOS}>Download for Apple MacOS</Link></Button>}
            {/* {os === 'Linux' && <Button asChild><Link href={downloadUrls.linux}>Download para Linux</Link></Button>} */}
            {os === 'Android' && <Button asChild><Link href={downloadUrls.android}>Download para Android</Link></Button>}
            {os === 'iOS' && <Button asChild><Link href={downloadUrls.ios}>Download para iOS</Link></Button>}
            {os === 'Outro' && <Button asChild><Link href="/downloads">Download</Link></Button>}
        </div>
    );
}
