import { Dispatch, SetStateAction} from "react";

export default function switchState(stateFunction:Dispatch<SetStateAction<boolean>>) {
    return stateFunction(prevState => !prevState);
}