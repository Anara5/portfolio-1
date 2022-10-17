interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    aboutInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    profilePic: Image;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
}

export interface Tech extends SanityBody {
    _type: "tech";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    summary: string;
    linkToGitHub: string;
    linkToLive: string;
    technologies: Tech[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}