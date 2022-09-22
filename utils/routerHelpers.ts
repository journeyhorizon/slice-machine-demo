import routeConfiguration from '@config/routeConfiguration';

export const isCurrentPage = (pageName: string, pathName: string) => {
  const currentPagePath =
    routeConfiguration[pageName] && routeConfiguration[pageName].path;
  return currentPagePath === pathName;
};
