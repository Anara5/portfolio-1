export default {
    name: "tech",
    title: "Tech",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of tech",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};
