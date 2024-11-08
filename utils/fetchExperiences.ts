import { Experience } from '../typings';

export const fetchExperiences = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const res = await fetch(new URL('/api/getExperience', process.env.NEXT_PUBLIC_BASE_URL));
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", experiences);
    return experiences;
}