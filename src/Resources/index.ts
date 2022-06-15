import IResourceContent from "./IResourceContent";
import en from "./en";
import ko from "./ko";

const Resource: Readonly<{ [lang: string]: Readonly<IResourceContent> }> = Object.freeze({
    'ko': ko,
    'en': en
});


export default Resource;