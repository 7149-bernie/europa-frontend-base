import type {FC} from "react";

export type EuropaTestProps = {
    test: string;
}

export const EuropaTest: FC<EuropaTestProps> = props => {
    return (
        <>This is a successful test of Europa: {props.test}</>
    )
}