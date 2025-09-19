import { z } from "zod";

const AttachmentDto = z.object({
  type: z.enum(["image", "file", "link"]),
  url: z.string(),
  thumbnail: z.string().nullable(),
  title: z.string().nullable(),
});

export const PropertyUpdatesDto = z.object({
  vote: z.object({
    title: z.string(),
    timeRange: z.string(),
    votings: z.array(
      z.object({
        author: z.object({
          name: z.string(),
          avatar: z.string().nullable(),
        }),
        postedAt: z.string(),
        content: z.string(),
        options: z.array(
          z.object({
            label: z.string(),
            count: z.number(),
          })
        ),
        totalVotes: z.number(),
      })
    ),
  }),

  updates: z.array(
    z.object({
      id: z.string(),
      author: z.object({
        name: z.string(),
        avatar: z.string().nullable(),
        role: z.string().nullable(),
      }),
      postedAt: z.string(),
      postText: z.string(),
      attachments: z.array(AttachmentDto),
      actions: z.array(z.enum(["edit", "schedule"])),
    })
  ),

  operationsTransactions: z.array(
    z.object({
      id: z.string(),
      date: z.string(),
      headline: z.string(),
      description: z.string(),
      tags: z.array(
        z.object({
          type: z.enum([
            "property_management",
            "tenant",
            "facility_management",
            "bank_check",
            "lawyer",
            "court",
            "services_charges",
            "alphased_fees",
          ]),
          label: z.string(),
          icon: z.string().nullable(),
        })
      ),
    })
  ),
});

export type PropertyUpdatesDto = z.infer<typeof PropertyUpdatesDto>;
