import join from 'lodash/join';

export function joinArray<T>(arr: T[], sep = ',') {
  const newArr = join(arr, sep);
  return newArr;
}

export function joinJsonArray<T>(arr: T[], key: string, sep = ',') {
  const newArr = arr.map((item: any) => item[key]);
  return join(newArr, sep);
}
