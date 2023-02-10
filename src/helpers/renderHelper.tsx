import { objectKeys } from "./objectHelpers";
import * as S from '../components/Table/Table.styled';
import { CustomRenderers, TableItem } from "../components/Table/types";

interface rederRowProps<T extends TableItem> {
    item: T;
    index: number;
    customRenderers?:CustomRenderers<T>;
    rowHeight:number,
    stripedRows:boolean
}
export  function renderRow<T extends TableItem>({item, index, customRenderers, rowHeight, stripedRows}:rederRowProps<T>) {
    return (
        <S.CSRow height={rowHeight} stripped={stripedRows} key={index}>
            {objectKeys(item).map((itemProperty,index) => {
            const customRenderer = customRenderers?.[itemProperty];
            const shouldBeHighlighted = item.first_name.toLowerCase().includes('b') && item.last_name.toLowerCase().includes('e');

            if (customRenderer) {
                return <S.CSTableData stripped={stripedRows} highlighted={false} key={index}>{customRenderer(item)}</S.CSTableData>;
            }
                return (
                    <S.CSTableData 
                        stripped={stripedRows}
                        highlighted={shouldBeHighlighted && (itemProperty === 'first_name' || itemProperty === 'last_name')}
                        key={index}
                    >
                        {item[itemProperty] as String}
                    </S.CSTableData>
                );
            })}
        </S.CSRow>
    );
}