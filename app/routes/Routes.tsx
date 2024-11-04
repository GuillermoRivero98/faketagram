export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FEED: "/feed",
    PROFILE: "/profile",
    EDIT_PROFILE: "/profile/edit",
    POST_DETAIL: "/feed/:postId",
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