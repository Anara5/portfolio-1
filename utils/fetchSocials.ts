import { Social } from '../typings';

export const fetchSocials = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const res = await fetch(new URL('/api/getSocials', process.env.NEXT_PUBLIC_BASE_URL));
    const data = await res.json();
    const socials: Social[] = data.socials;

    // console.log("fetching", socials);
    return socials;
}