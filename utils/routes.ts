import { compile } from 'path-to-regexp';
import { stringify } from './urlHelpers';

const findRouteByName = (
  nameToFind: string,
  routes: { [name: string]: { path: string } },
) => routes?.[nameToFind]?.path;

/**
 * E.g. ```const toListingPath = toPathByRouteName('ListingPage', routes);```
 * Then we can generate listing paths with given params (```toListingPath({ id: uuidX })```)
 */
const toPathByRouteName = (
  nameToFind: string,
  routes: { [name: string]: { path: string } },
) => {
  const path = findRouteByName(nameToFind, routes);
  if (!path) {
    throw new Error(`Path "${nameToFind}" was not found.`);
  }
  return compile(path);
};

/**
 * Shorthand for single path call. (```pathByRouteName('ListingPage', routes, { id: uuidX });```)
 */
export const pathByRouteName = (
  nameToFind: string,
  routes: { [name: string]: { path: string } },
  params: { [name: string]: string | number | boolean } = {},
) => {
  const hasEmptySlug =
    params && params.hasOwnProperty('slug') && params.slug === '';
  const pathParams = hasEmptySlug ? { ...params, slug: 'no-slug' } : params;
  return toPathByRouteName(nameToFind, routes)(pathParams);
};

/**
 * ResourceLocatorString is used to direct webapp to correct page.
 * In contrast to Universal Resource Locator (URL), this doesn't contain protocol, host, or port.
 */
export const createResourceLocatorString = (
  routeName: string,
  routes: { [name: string]: { path: string } },
  pathParams: { [name: string]: string | number | boolean } = {},
  searchParams: {
    [name: string]: string | string[] | number | boolean | null | undefined;
  } = {},
  hash = '',
) => {
  const searchQuery = stringify(searchParams);
  const includeSearchQuery = searchQuery.length > 0 ? `?${searchQuery}` : '';
  const path = pathByRouteName(routeName, routes, pathParams);
  return `${path}${includeSearchQuery}${hash}`;
};

/**
 * Find component related to route name
 * E.g. `const PageComponent = findComponentByRouteName('CheckoutPage', routes);`
 * Then we can call static methods of given component:
 * `dispatch(PageComponent.setInitialValues({ listing, bookingDates }));`
 *
 * @param {String} nameToFind - Route name
 * @param {Array<{ route }>} routes - Route configuration as flat array.
 *
 * @return {Route} - Route that matches the given route name.
 */
export const findRouteByRouteName = (
  nameToFind: string,
  routes: { [name: string]: { path: string } },
) => {
  const route = findRouteByName(nameToFind, routes);
  if (!route) {
    throw new Error(`Component "${nameToFind}" was not found.`);
  }
  return route;
};
