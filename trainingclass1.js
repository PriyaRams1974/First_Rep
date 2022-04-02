function add(a, b) {
  try {
    let s = a + b;
    var k = new Promise(async function (resolve, reject) {
      console.log("tetsdg");
      try {
        let test1 = 0;
        if (test1 == 0) {
          resolve("success");
        } else {
          console.log("else");
          reject("failure");
        }
      } catch (err) {
        reject("failure");
      }
    });
    return k;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}
console.log(add(5, 6));
