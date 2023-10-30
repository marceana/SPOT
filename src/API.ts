/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  image: string,
  type: string,
  title: string,
  description: string,
  garage: number,
  oldPrice?: number | null,
  price: number,
  maxVehicles: number,
  latitude: number,
  longitude: number,
};

export type ModelPostConditionInput = {
  image?: ModelStringInput | null,
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  garage?: ModelIntInput | null,
  oldPrice?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  maxVehicles?: ModelIntInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  image: string,
  type: string,
  title: string,
  description: string,
  garage: number,
  oldPrice?: number | null,
  price: number,
  maxVehicles: number,
  latitude: number,
  longitude: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  image?: string | null,
  type?: string | null,
  title?: string | null,
  description?: string | null,
  garage?: number | null,
  oldPrice?: number | null,
  price?: number | null,
  maxVehicles?: number | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeletePostInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  garage?: ModelIntInput | null,
  oldPrice?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  maxVehicles?: ModelIntInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  garage?: ModelSubscriptionIntInput | null,
  oldPrice?: ModelSubscriptionFloatInput | null,
  price?: ModelSubscriptionFloatInput | null,
  maxVehicles?: ModelSubscriptionIntInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      image: string,
      type: string,
      title: string,
      description: string,
      garage: number,
      oldPrice?: number | null,
      price: number,
      maxVehicles: number,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    garage: number,
    oldPrice?: number | null,
    price: number,
    maxVehicles: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
