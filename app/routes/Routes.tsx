
export const ROUTES = {
  LOGIN: "modules/(auth)/LoginScreen",
  REGISTER: "modules/(auth)/RegisterScreen",
  FEED: "modules/(feed)/FeedScreen",
  PROFILE: "modules/(profile)/ProfileScreen",
  EDIT_PROFILE: "modules/(profile)/edit",
  POST_DETAIL: "modules/(feed)/:postId",
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