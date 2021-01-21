const mocks_api = {
  auth: { POST: { token: "This-is-a-user-token"} },
  "user/me": { GET: { name: "doggo", title: "sir" } }
};

const apiCall = ({ url, method }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mocks_api[url][method || "GET"]);
        console.log(`Mocked '${url}' - ${method || "GET"}`);
        console.log("response: ", mocks_api[url][method || "GET"]);
      } catch (err) {
        reject(new Error(err));
      }
    }, 30000);
  });

export default apiCall;
