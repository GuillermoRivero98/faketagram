
export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/LoginScreen",
  REGISTER: "/auth/RegisterScreen",
  FEED: "/feed/FeedScreen",
  PROFILE: "/profile/ProfileScreen",
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