import React, { useState } from "react";
import DelayedLink from "../../../common/DelayedLink";
import { getMarketData } from '../../../apiServices/market'

import { useQuery } from '@tanstack/react-query'
import { QueryCache } from '@tanstack/react-query'


const Market = () => {
  const { isLoading, isError, data, error, status, refetch } = useQuery({ queryKey: ['marketData'], queryFn: getMarketData }); 

  if (isLoading) return "Loading...";
 
  if (error) return "An error has occurred: " + error.message;



  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log(data,"data")
    },
    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  queryCache.find(['marketData'])

  return (
    status === 'success' &&
    <div className="wrapper-submenu-market wrapper-submenu">
      <div className="container-title-mobile">
        <h2 className="submenu-title">Markets</h2>
        <button className="btn-go-back" data-submenu-close>
          <i className="icon-arrow-left-3"></i>
          <span>Go back</span>
        </button>
      </div>
      <ul className="list-submenu-market list-submenu list-projects font-submenu">
        {data.map((item) => {
          return (
            <li key={item._id} className="list-item">
              <DelayedLink
                to={`/market-post/${item.slug}`}
                className="market-link project-link"
                attributes={{
                  "data-menu-close": "",
                  "data-cursor-style": "view",
                }}
              >
                <div className="container-img bg-blue" data-cursor-style="view">
                  <img src={item.image} data-preload className="media" alt={item.cardname} />
                </div>
                <div className="container-text">
                  <h3 className="title-project split-words">{item.cardname}</h3>
                  <ul className="list-tags">
                    {item.marketTags.map((tag,index) => (
                      <li key={index}>
                        <span>{tag}</span>
                      </li>
                    ))};
                  </ul>
                </div>
              </DelayedLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Market;
