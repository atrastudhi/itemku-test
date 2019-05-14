function solution(record) {
  var answer = [];
  let temp = [];

  record.forEach(e => {
    let splited = e.split(' ');

    if (splited[0] === 'Enter') {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].uid === splited[1]) {
          temp[i].username = splited[2]
        }
      };
      
      temp.push({
        username: splited[2],
        word: 'came in.',
        uid: splited[1]
      });
    }

    if (splited[0] === 'Leave') {
      
      temp.forEach(e => {
        if (e.uid === splited[1]) {
          temp.push({
            username: e.username,
            word: 'has left.',
            uid: splited[1]
          });
        }
      })
    }

    if (splited[0] === 'Change') {
      let check = false;
      temp.forEach(i => {
        if (i.uid === splited[1]) {
          if (i.word === 'has left.') {
            check = false;
          } else if (i.word === 'came in.') {
            check = true;
          }
        }
      });
      console.log(check, splited)
      if (check) {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].uid === splited[1]) {
            temp[i].username = splited[2];
          }
        };
      }
    }
  });

  temp.forEach(e => {
    answer.push(e.username + ' ' + e.word);
  });

  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))