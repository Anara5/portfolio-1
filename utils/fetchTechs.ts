import { Tech } from '../typings';

export const fetchTechs = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTechs`);
    const res = await fetch(new URL('/api/getTechs', process.env.NEXT_PUBLIC_BASE_URL));
    const data = await res.json();
    const techs: Tech[] = data.techs;

    // console.log("fetching", techs);
    return techs;
}