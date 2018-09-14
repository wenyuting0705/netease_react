import ajax from "./ajax";

export const reqHomeData = () => ajax('/home_data')

export const reqCategorysData = () => ajax('/category_data')

export const reqShiwuData = () => ajax('/shiwu_data')
