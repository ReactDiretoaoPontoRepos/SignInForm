export async function signIn({ username, password }) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (username === "Artur" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
