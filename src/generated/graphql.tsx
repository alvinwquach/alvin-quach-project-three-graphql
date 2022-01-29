import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Expense = {
  __typename?: 'Expense';
  amount: Scalars['Float'];
  category: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Int'];
  transaction: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  statement: Statement;
};


export type QueryStatementArgs = {
  month: Scalars['String'];
};

export type Statement = {
  __typename?: 'Statement';
  expenses?: Maybe<Array<Expense>>;
  month: Scalars['String'];
};

export type FetchExpensesQueryVariables = Exact<{
  month: Scalars['String'];
}>;


export type FetchExpensesQuery = { __typename?: 'Query', statement: { __typename?: 'Statement', month: string, expenses?: Array<{ __typename?: 'Expense', id: number, date: string, transaction: string, amount: number, category: string }> | null | undefined } };


export const FetchExpensesDocument = gql`
    query fetchExpenses($month: String!) {
  statement(month: $month) {
    month
    expenses {
      id
      date
      transaction
      amount
      category
    }
  }
}
    `;

/**
 * __useFetchExpensesQuery__
 *
 * To run a query within a React component, call `useFetchExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchExpensesQuery({
 *   variables: {
 *      month: // value for 'month'
 *   },
 * });
 */
export function useFetchExpensesQuery(baseOptions: Apollo.QueryHookOptions<FetchExpensesQuery, FetchExpensesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchExpensesQuery, FetchExpensesQueryVariables>(FetchExpensesDocument, options);
      }
export function useFetchExpensesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchExpensesQuery, FetchExpensesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchExpensesQuery, FetchExpensesQueryVariables>(FetchExpensesDocument, options);
        }
export type FetchExpensesQueryHookResult = ReturnType<typeof useFetchExpensesQuery>;
export type FetchExpensesLazyQueryHookResult = ReturnType<typeof useFetchExpensesLazyQuery>;
export type FetchExpensesQueryResult = Apollo.QueryResult<FetchExpensesQuery, FetchExpensesQueryVariables>;