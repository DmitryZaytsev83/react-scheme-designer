export type Connector = {
    id: number;
    link: object | null;
}

export type Block = {
    id: number;
    topConnectors: Connector[] | null;
    bottomConnectors: Connector[] | null;
    leftConnectors: Connector[] | null;
    rightConnectors: Connector[] | null;
    title: string;
}

export type Scheme = {
    blocks: Block[];
}

export type SchemeProxy = {
    top: number;
    left: number;
}

export type SchemeProxies = {
    proxies: SchemeProxy[];
}
