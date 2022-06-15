export default interface IResourceContent {
    year: string;
    month: string;
    day: string;
    dayName: {
        Mon: string;
        Tue: string;
        Wed: string;
        Thu: string;
        Fri: string;
        Sat: string;
        Sun: string;
    },
    dayFullName: {
        Monday: string;
        Tuesday: string;
        Wednesday: string;
        Thursday: string;
        Friday: string;
        Saturday: string;
        Sunday: string;
    }
}