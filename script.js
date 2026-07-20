const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
  for(let i=0; i<arr.length; i++){
	  let sum = 0;
	  let curr = [];

	  let j = i;
	  while (j<arr.length && sum <= n) {
	  	curr.push(arr[j]);
		  j++;
	  }

	  ans.push(curr);
  }

	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
