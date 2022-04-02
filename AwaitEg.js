function add(a, b) {
  try {
    var k = new Promise(async function (resolve, reject) {
      try {
        let test1 = 0;
        if (test1 == 0) {
          let s = a + b;
          resolve(s);
        } else {
          reject("failure");
        }
      } catch (err) {
        reject("failure");
      }
    });
    return k;
  } catch (err) {
    return err.message;
  }
}
async function test() {
  try {
    let det = add(5, 6);
    console.log(det);
    return det;
  } catch (err) {
    return err.message;
  }
}
test();
