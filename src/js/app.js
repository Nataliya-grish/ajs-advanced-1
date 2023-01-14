export default function orderByProps(obj, arrSort = []) {
  let arrKeys = [];
  for (const key in obj) {
    if (arrSort.indexOf(key) === -1) {
      arrKeys.push(key);
    }
  }
  arrKeys = [...arrSort, ...arrKeys.sort()];
  const result = [];
  for (const key of arrKeys) {
    result.push({ key, value: obj[key] });
  }
  return result;
}
