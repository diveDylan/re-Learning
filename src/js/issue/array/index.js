const fucArr = [
	next => {
		setTimeout(() => {
			console.log(1);
			next()
		}, 300)
	},
	next => {
		setTimeout(() => {
			console.log(2);
			next()
		}, 200)
	},
	next => {
		setTimeout(() => {
			console.log(3);
			next()
		}, 100)
	}
]

var run = arr=>{
	if(arr.length === 0 ) return
	arr[0](() => run(arr.slice(1)))

}
run([fucArr])