import PocketBase from "pocketbase";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { GetServerSidePropsContext } from "next";
import { IncomingMessage, ServerResponse } from "http";
import { UserData } from "@/context/User.context";

class pbClient {
  public client: PocketBase;
  private readonly req: IncomingMessage & { cookies: NextApiRequestCookies };
  private readonly res: ServerResponse<IncomingMessage>;

  constructor(ctx: GetServerSidePropsContext) {
    const { req, res } = ctx;
    this.req = req;
    this.res = res;
    this.client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

    // load the store data from the request cookie string
    this.client.authStore.loadFromCookie(req?.headers?.cookie || "");

    // send back the default 'pb_auth' cookie to the client with the latest store state
    this.client.authStore.onChange(() => {
      this.res?.setHeader("set-cookie", this.client.authStore.exportToCookie());
    });

    // this.refreshAuth();
  }

  // private refreshAuth() {
  //   try {
  //     const userCollectionId = this.client.authStore.model?.collectionId;
  //     this.client.authStore.isValid &&
  //       this.client.collection(userCollectionId).authRefresh();
  //   } catch (_) {
  //     this.client.authStore.clear();
  //   }
  // }

  public isAuthValid(): boolean {
    return this.client.authStore.isValid;
  }

  public getUserData(): UserData {
    try {
      if (!this.client.authStore.isValid) {
        return {
          isLoggedIn: false,
          id: "",
          email: "",
          name: "",
          verified: false,
          role: "",
        };
      }

      const user = this.client.authStore.model;
      return {
        isLoggedIn: true,
        id: user?.id || "",
        email: user?.email,
        name: user?.name,
        verified: user?.verified,
        role: user?.role,
      };
    } catch (err: any) {
      return {
        isLoggedIn: false,
        id: "",
        email: "",
        name: "",
        verified: false,
        role: "",
      };
    }
  }
}

export { pbClient };
