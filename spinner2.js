const line=['|','/','-','\\'];
for(let i in line){
  setTimeout(() => {
    process.stdout.write(`\r${line[i]}   `);
  }, 100+i*200);
};
