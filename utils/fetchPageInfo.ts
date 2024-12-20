import { PageInfo } from '../typings';

export const fetchPageInfo = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const res = await fetch(new URL('/api/getPageInfo', process.env.NEXT_PUBLIC_BASE_URL));
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", pageInfo);
    return pageInfo;
}