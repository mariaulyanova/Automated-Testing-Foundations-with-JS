try {
    console.log(a);
    let a = 3;
} catch( error ) {
  console.log('let перед использованием нужно объявить');
}
///////////
try {
    const result = 1 / 0;
    if (!isFinite(result)) {
      throw new Error('на ноль делить нельзя')
    }
} catch(err) {
      console.error('Error: ' + err.message);
}