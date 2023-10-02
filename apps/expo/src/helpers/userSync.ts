import type { UserResource } from "@clerk/types";
import { trpc } from "../utils/trpc";

export async function syncClerkUserWithDB(user: UserResource): Promise<void> {
  console.log(user.id, "************************************");
  const existingUser = await trpc.user.getByExternalId(user.id);
  //   console.log(existingUser, "existingUser");
}
