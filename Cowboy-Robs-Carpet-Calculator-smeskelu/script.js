function calculateCarpet() {
  // first I tried to read the instruction and try it all by myslef, however, I went to studyhall to get helped.
  // 👇 Write your code here 👇
  let room1Width = getRoomWidth(1);
  let room1Length = getRoomLength(1);
  let room2Width = getRoomWidth(2);
  let room2Length = getRoomLength(2);


  const room1Area = room1Width * room1Length;
  const room2Area = room2Width * room2Length;

  const totalArea = (room1Area + room2Area) * 1.1;

  showResult(totalArea);

  
  // 👆 Write your code here 👆
}

  calculateCarpetTest();