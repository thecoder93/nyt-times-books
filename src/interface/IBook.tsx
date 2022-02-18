export interface IBook {
    author?: string;
    contributor?: string;
    description?: string;
    book_image?: string;
    buy_links?: BuyLinks[];
    primary_isbn13?: string;
    primary_isbn10?: string;
    publisher?: string;
    rank?: number;
    title?: string;
    weeks_on_list?: string;
}

interface BuyLinks {
    name: string;
    url: string
}