// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatlesArr = [];
  for(let i = 0; i < musicians.length; i++) {
    //if(musicians[i] === 0 && instruments[i] === 0) {
      beatlesArr.push(musicians[i] + ' plays ' + instruments[i]);
    //}
  }
  return beatlesArr;
}
const facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];
function johnLennonFacts(arr) {
  let i = 0;
	let newArr = [];
  while(i < arr.length) {
  	newArr.push(arr[i]) + '!!!';
  	i++;
  }
  return newArr;
}
