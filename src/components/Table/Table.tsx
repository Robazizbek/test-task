import { useEffect, useState } from "react";
import { objectValues } from "../../helpers/objectHelpers";
import { renderRow } from "../../helpers/renderHelper";
import * as S from "./Table.styled";
import type { CustomRenderers, TableItem, TableHeaders, TableSettings } from "./types";

interface TableProps<T extends TableItem> {
  items: T[];
  headers: TableHeaders<T>;
  settings: TableSettings;
  customRenderers?: CustomRenderers<T>;
  filterString: string;
}

export default function Table<T extends TableItem>({ settings, customRenderers, headers, items, filterString }: TableProps<T>) {
    const [filteredData, setFilteredData] = useState<T[]>(items);
    const {headerHeight, rowHeight, stripedRows} = settings;

    useEffect(() => {
      setFilteredData(items.filter(item => 
        item.first_name.toLowerCase().includes(filterString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(filterString.toLowerCase())
      ));
    }, [filterString, items]);

  return (
    <S.CSTableContainer>
        <S.CSTable stripped={stripedRows}>
        <thead>
            <S.CSRow height={rowHeight} stripped={stripedRows}>
                {objectValues(headers).map((headerValue,index) => (
                <S.CSHeader stripped={stripedRows} height={headerHeight} key={index}>{headerValue}</S.CSHeader>
                ))}
            </S.CSRow>
        </thead>
        <tbody>{filteredData.map((item,index)=>renderRow({item, index, customRenderers, rowHeight, stripedRows}))}</tbody>
        </S.CSTable>
    </S.CSTableContainer>
  );
}
