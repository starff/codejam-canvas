function draw(a) {
    console.log(a);
    let canvas = document.querySelector('.canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        if (a.length == 4) {
            ctx.clearRect(0, 0, 512, 512);
            a.forEach((row, i) => {
                console.log(a);
                row.forEach((column, j) => {
                    ctx.fillStyle = '#' + column;
                    ctx.fillRect(i*128, j*128, (i+1)*128, (j+1)*128);
                });
            });
        } else if (a.length == 32) {
            ctx.clearRect(0, 0, 512, 512);
            a.forEach((row, i) => {
                console.log(a);
                row.forEach((column, j) => {
                    if (column.length == 4) {
                    column.pop();
                    };
                    let str = column.join();
                    ctx.fillStyle = 'RGB(' + str + ')';
                    ctx.fillRect(i*16, j*16, (i+1)*16, (j+1)*16);
                });
            });
        };
      
    };
  };
  let imgData1 = [];
  let imgData2 = [];


fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
  .then(res => res.json())
  .then(data => imgData1 = data)
fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
  .then(res => res.json())
  .then(data => imgData2 = data)



document.getElementById('img4').addEventListener('click', () => { 
    draw(imgData1);
});
document.getElementById('img32').addEventListener('click', () => { 
    draw(imgData2);
});