import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export type PipeMiddleware<T extends NextRequest = NextRequest> = (
  req: T,
  event: NextFetchEvent,
  res?: NextResponse
) =>
  | { next: boolean; res: NextResponse }
  | Promise<{ next: boolean; res: NextResponse }>;

export function pipe(...args: PipeMiddleware[]) {
  return (initialResponse?: NextResponse) =>
    async (req: NextRequest, event: NextFetchEvent) => {
      const result = await args.reduce((current, nextPipeMiddleware) => {
        return current.then(({ res, next }) => {
          if (!next) {
            return current;
          }

          return nextPipeMiddleware(req, event, res);
        });
      }, Promise.resolve({ next: true, res: initialResponse || NextResponse.next() }));

      return result.res;
    };
}

function redirectToWelcome(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/welcome";

  return NextResponse.redirect(url);
}

function redirectToHome(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/";

  return NextResponse.redirect(url);
}

export const ignoreAssetsAndApi: PipeMiddleware = (
  req,
  _,
  res = NextResponse.next()
) => {
  if (!req.page.name || req.page.name?.startsWith("/api")) {
    return { next: false, res };
  }

  return { next: true, res };
};

export const checkWalltId: PipeMiddleware = (
  req,
  _,
  res = NextResponse.next()
) => {
  // if wallet_id does not exists, go to /welcome page from / page
  if (!req.cookies.wallet_id && req.page.name === "/") {
    return {
      next: false,
      res: redirectToWelcome(req),
    };
  }

  // if wallet_id exists, go to / page from /welcome page
  if (req.cookies.wallet_id && req.page.name !== "/") {
    return {
      next: false,
      res: redirectToHome(req),
    };
  }

  return { next: true, res };
};

export const middleware: NextMiddleware = pipe(
  ignoreAssetsAndApi,
  checkWalltId
)();
