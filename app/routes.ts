import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp" ,"routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/inspomain", "routes/inspomain.tsx"),
  route("/login", "routes/login.tsx"),
  route("/register", "routes/cast-register.tsx"),
  route("/prod-register", "routes/prod-register.tsx"),
] satisfies RouteConfig;
