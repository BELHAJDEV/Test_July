export type MainStackParamsList = {
    main : undefined,
    detail : {
        item : keyable
    }
}
export default interface keyable {
    [key: string]: any  
}