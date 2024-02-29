const config = {
  local: {
    db: {
      host: "localhost",
      port: "27017",
      databaseName: "siddhant",
      userName: "",
      password: "",
    },
    api_port: 5001,
    client_secret_key: "thsgsjs",
  },
};
export const get = (env) => {
  return config[env];
};
export default get;
