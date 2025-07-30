import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/noticias", "routes/noticias.tsx"),
  route("/noticias/:slug", "routes/noticias.$slug.tsx"),
  route("/contato", "routes/contato.tsx"),
] satisfies RouteConfig;
