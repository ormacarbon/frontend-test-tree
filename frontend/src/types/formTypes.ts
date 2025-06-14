type IInputDefault = {
    control: any;
    name: string;
    labelName: string;
    placeholder: string;
}

export interface IInputWithMask extends IInputDefault{
    mask: string;
}

export interface IWithoutMask extends IInputDefault {
    type: string;
}