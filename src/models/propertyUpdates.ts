export type VoteOptionModel = { label: string; count: number };

export type VotingModel = {
  author: { name: string; avatar: string | null };
  postedAt: string;
  content: string;
  options: VoteOptionModel[];
  totalVotes: number;
};

export type VoteBlockModel = {
  title: string;
  timeRange: string;
  votings: VotingModel[];
};

export type UpdateAttachmentModel = {
  type: "image" | "file" | "link";
  url: string;
  thumbnail: string | null;
  title: string | null;
};

export type UpdateItemModel = {
  id: string;
  author: { name: string; avatar: string | null; role: string | null };
  postedAt: string;
  postText: string;
  attachments: UpdateAttachmentModel[];
  actions: Array<"edit" | "schedule">;
};

export type OperationTagModel = {
  type:
    | "property_management"
    | "tenant"
    | "facility_management"
    | "bank_check"
    | "lawyer"
    | "court"
    | "services_charges"
    | "alphased_fees";
  label: string;
  icon: string | null;
};

export type OperationItemModel = {
  id: string;
  date: string;
  headline: string;
  description: string;
  tags: OperationTagModel[];
};

export type PropertyUpdatesModel = {
  vote: VoteBlockModel;
  updates: UpdateItemModel[];
  operationsTransactions: OperationItemModel[];
};
