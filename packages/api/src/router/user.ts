import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string().email({ message: "Invalid email address" }),
        externalId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input });
    }),

  getByExternalId: protectedProcedure
    .input(
      z.object({
        externalId: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      ctx.prisma.user.findUnique({ where: input });
    }),
});
