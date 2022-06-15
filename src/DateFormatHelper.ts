import Resources from "./Resources";

export const dayNameOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];
export const dayFullNameOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const numberToZeroPadString = (n: number) => n.toString().padStart(2, '0');
const defaultLang = 'en';

export default class DateFormatHelper {
    private static getResource(lang?: string) {
        if (lang === undefined) {
            lang = navigator.language;
        }

        return Resources[lang] ?? Resources[defaultLang];
    }

    static toLocaleLognWeekDay(date: Date, lang?: string) {
        const resource = DateFormatHelper.getResource(lang);
        return resource.dayFullName[dayFullNameOfWeek[date.getDay()]];
    }

    static toLocaleDateString(date: Date, lang?: string) {
        const resource = DateFormatHelper.getResource(lang);

        return `${date.getFullYear()}${resource['year']} ${date.getMonth() + 1}${resource['month']} ${date.getDate()}${resource['day']}`;
    }

    static toDateString(date: Date) {
        let month = numberToZeroPadString(date.getMonth() + 1);
        let day = numberToZeroPadString(date.getDate());

        return `${date.getFullYear()}-${month}-${day}`;
    }
} 