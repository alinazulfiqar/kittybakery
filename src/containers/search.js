import React, { useContext, useState, useEffect } from "react";
import Search from "../components/search/index";
import { useSelector } from "react-redux";
import Fuse from "fuse.js";
import data from "../utils/data.json";

export function SearchContainer({ children, ...restProps }) {
  const search = useSelector((state) => state.search.search);

  const fuse = new Fuse(data, {
    keys: ["title", "desc", "type"],
    includeScore: true,
    threshold: 0.3,
    minMatchCharLength: 3,
  });

  const results = fuse.search(search).map(({ item }) => item);
  console.log(results);
  return (
    <Search>
      <Search.Title>
        Your search for "{search}" revealed the following:
      </Search.Title>
      <Search.SearchBox>
        <Search.SearchInput placeholder="search here"></Search.SearchInput>
        <Search.SearchButton>SEARCH</Search.SearchButton>
      </Search.SearchBox>

      <Search.ReturnBox>
        {results.length < 1 ? (
          <Search.TextTitle>Aww snap, no crumbs found.😫</Search.TextTitle>
        ) : (
          results.map((result, index) => (
            <Search.Item key={index} to={`/products/${result.id}`}>
              <Search.Image src={result.imageUrl} />
              <Search.Text>{result.title}</Search.Text>
              <Search.TextSmall>${result.price}</Search.TextSmall>
            </Search.Item>
          ))
        )}
      </Search.ReturnBox>
    </Search>
  );
}
