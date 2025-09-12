export interface Options {
    selector?: string;
    startYearAttr?: string;
    separator?: string;
    prefix?: string;
    suffix?: string;
}

export default function updateCopyrightYears(options?: Options): void;
