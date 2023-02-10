export interface TableItem {
    avatar: string,
    first_name: string,
    last_name: string,
    email: string,
    ethereum_address: string,
    ip_address: string,
}

export interface TableSettings {
    headerHeight: number;
    rowHeight: number;
    stripedRows: boolean;
}
export type TableHeaders<T extends TableItem> = Record<keyof T | string, string>;

export type CustomRenderers<T> = Partial<
    Record<keyof T, (it: T) => React.ReactNode>
  >;