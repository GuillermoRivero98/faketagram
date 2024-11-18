export const ROUTES = {
    HOME: "/",
    LOGIN: "modules/login",
    REGISTER: "modules/register",
    FEED: "modules/feed",
    PROFILE: "modules/profile",
    EDIT_PROFILE: "modules/profile/edit",
    POST_DETAIL: "modules/feed/:postId",
  };
  
  export function getRoute(routeKey: keyof typeof ROUTES, params?: Record<string, string>): string {
    let route = ROUTES[routeKey];
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        route = route.replace(`:${key}`, value);
      });
    }
    return route;
  }