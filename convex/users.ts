import { getAuthUserId } from "@convex-dev/auth/server"

import { query } from "./_generated/server"

/**
 * The signed-in user's profile, or null when signed out.
 *
 * Convex Auth stores only `name`, `email` and `image` from the Google profile.
 */
export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)

    if (userId === null) {
      return null
    }

    const user = await ctx.db.get(userId)

    if (user === null) {
      return null
    }

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      emailVerificationTime: user.emailVerificationTime,
    }
  },
})
