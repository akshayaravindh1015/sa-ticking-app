export const initalize2D_Arr = (size: number): number[][] => {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
};

//   class Grid {
//   public arr: number[][];
//   constructor(size: number, arr?: number[][]) {
//     if (arr) {
//       this.arr = arr;
//       return;
//     }
//     this.arr = new Array(size);
//     for (let i = 0; i < size; i++) {
//       this.arr[i] = new Array(size);
//     }
//   }
// }
// export default Grid;
