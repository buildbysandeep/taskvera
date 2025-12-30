// export const generateRoomNumber = () => {
//   const roomNumber = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit number
//   return roomNumber;
// };

const generatedCodes = new Set<string>();

const generateMeetCode = (): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomSegment = () => {
    let segment = "";
    const array = new Uint8Array(3);
    crypto.getRandomValues(array);
    for (let i = 0; i < 3; i++) {
      segment += alphabet[array[i] % 26];
    }
    return segment;
  };

  return `${randomSegment()}-${randomSegment()}-${randomSegment()}`;
};

export const generateUniqueMeetCode = (): string => {
  let code: string;
  do {
    code = generateMeetCode();
  } while (generatedCodes.has(code));

  generatedCodes.add(code);
  return code;
};
