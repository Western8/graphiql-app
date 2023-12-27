export const mockQuery = `query ($filter: CountryFilterInput) { countries(filter: $filter) {name code capital
      currency

    }

}
`;

export const mockQueryPrettified = `query ($filter:  CountryFilterInput) {
  countries(filter:  $filter) {
    name 
    code 
    capital 
    currency 
  }
}`;
