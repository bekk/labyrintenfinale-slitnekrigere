import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp" ,"routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/inspomain", "routes/inspomain.tsx"),
  route("/user-login", "routes/userLogin.tsx"),
  route("/producer-login", "routes/producerLogin.tsx"),
] satisfies RouteConfig;
