/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    image
    type
    title
    description
    garage
    oldPrice
    price
    maxVehicles
    latitude
    longitude
    Reservation {
      id
      userId
      postId
      Date
      Time
      Duration
      Total
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    image
    type
    title
    description
    garage
    oldPrice
    price
    maxVehicles
    latitude
    longitude
    Reservation {
      id
      userId
      postId
      Date
      Time
      Duration
      Total
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    image
    type
    title
    description
    garage
    oldPrice
    price
    maxVehicles
    latitude
    longitude
    Reservation {
      id
      userId
      postId
      Date
      Time
      Duration
      Total
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createReservation = /* GraphQL */ `mutation CreateReservation(
  $input: CreateReservationInput!
  $condition: ModelReservationConditionInput
) {
  createReservation(input: $input, condition: $condition) {
    id
    userId
    postId
    Date
    Time
    Duration
    Total
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReservationMutationVariables,
  APITypes.CreateReservationMutation
>;
export const updateReservation = /* GraphQL */ `mutation UpdateReservation(
  $input: UpdateReservationInput!
  $condition: ModelReservationConditionInput
) {
  updateReservation(input: $input, condition: $condition) {
    id
    userId
    postId
    Date
    Time
    Duration
    Total
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReservationMutationVariables,
  APITypes.UpdateReservationMutation
>;
export const deleteReservation = /* GraphQL */ `mutation DeleteReservation(
  $input: DeleteReservationInput!
  $condition: ModelReservationConditionInput
) {
  deleteReservation(input: $input, condition: $condition) {
    id
    userId
    postId
    Date
    Time
    Duration
    Total
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReservationMutationVariables,
  APITypes.DeleteReservationMutation
>;
