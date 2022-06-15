import IResourceContent from "./IResourceContent";

const data: IResourceContent = {
    day: '일',
    month: '월',
    year: '년',
    dayName: {
        Mon: '월',
        Tue: '화',
        Wed: '수',
        Thu: '목',
        Fri: '금',
        Sat: '토',
        Sun: '일'
    },
    dayFullName: {
        Monday: '월요일',
        Tuesday: '화요일',
        Wednesday: '수요일',
        Thursday: '목요일',
        Friday: '금요일',
        Saturday: '토요일',
        Sunday: '일요일',
    }
}

const ko = Object.freeze<IResourceContent>(data)
export default ko;