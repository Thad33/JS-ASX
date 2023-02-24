function reverseInGroupsOfFour(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i += 4) {
      let group = str.slice(i, i + 4);
      reversed += group.split('').reverse().join('');
    }
    return reversed;
  }
  console.log(reverseInGroupsOfFour('Lorem at')); 
  console.log(reverseInGroupsOfFour('Tempor ip')); 
    