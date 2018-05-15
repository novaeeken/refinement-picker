const countToWeight = (namesObj) => {
  // pull all the counts of the objects into an array an calculate the total
  const count = namesObj.map(element => element.count);
  const total_count = count.reduce((total, num) => total + num, 0);

  for (let i = 0; i < namesObj.length; i++) {
    const originalWeight = namesObj[i].count / total_count;
    // replace the counts with distributed weights for every entry
    namesObj[i].count = (1 - originalWeight);
  }
  return namesObj;
};

const getRandomName = (list, weight) => {
  const rand = (min, max) => (Math.random() * (max - min)) + min;
  const sampleSize = list.length - 1;
  const random_num = rand(0, sampleSize);

  let weight_sum = 0;

  // entries with larger weights have a greater chance of random number < entry, thus being chosen.
  for (let i = 0; i < list.length; i++) {
    weight_sum += weight[i];

    if (random_num <= weight_sum) {
      return list[i];
    }
  }
};

const updateCount = (name, base) => {
  // find indexposition and up the count with 1
  const position = base.findIndex(element => element.name === name);
  base[position].count += 1;
};

const ConvertSplitPick = (base) => {
  countToWeight(base);
  const names = base.map(element => element.name);
  const weight = base.map(element => element.count);

  return getRandomName(names, weight);
};

// -----------------------------------------------------------------------------------------------

export const pickTwoNames = (originalBase, candidates) => {
  // 1. CLONE ORIGINAL LIST WITHOUT REFERENCE AND SORT NAMES BASED ON COUNT low - high
  let duplicateBase1 = JSON.parse(JSON.stringify(originalBase));

  duplicateBase1.sort((a, b) => {
    if (a.count > b.count) {
      return 1;
    }
    if (a.count < b.count) {
      return -1;
    }

    return 0;
  });

  // 2. IF THERE ARE LESS CANDIDATES THAN COLLEAGUES, REMOVE THEM FROM DUPLICATEBASE
  if (candidates.length < duplicateBase1.length) {
    duplicateBase1 = duplicateBase1.filter(element => candidates.includes(element.name));
  }

  // 3. MAKE ANOTHER DUPLICATE FOR THE SECOND NAME LATER
  const duplicateBase2 = JSON.parse(JSON.stringify(duplicateBase1));

  // 4. PICK THE FIRST NAME
  const name1 = ConvertSplitPick(duplicateBase1);

  // 5. DELETE THAT NAME FROM SECOND BASE AND PICK SECOND NAME
  const indexPos = duplicateBase2.indexOf(duplicateBase2.find(element => element.name === name1));
  duplicateBase2.splice(indexPos, 1);

  const name2 = ConvertSplitPick(duplicateBase2);

  // 6. UPDATE COUNT OF ORIGINAL LIST
  updateCount(name1, originalBase);
  updateCount(name2, originalBase);

  // 7. PUSH THE NAMES INTO HISTORY DB


  // Return the names and the updated list
  return [
    {
      name1,
      name2,
    },
    {
      updatedBase: originalBase,
    },
  ];
};

export default null;
