import React, { useContext } from "react";
import { MovieContext } from "../../App";
import { StyledLink, StyledListItem, StyledNav, StyledList} from './Pagination.style'

export default function Pagination(props) {
  const consumer = useContext(MovieContext);
  const totalPage = consumer?.movieData?.total_pages;
  

  const range = (n) => [...Array(n).keys()];

  return (
    <StyledNav>
      <StyledList>
        {range(totalPage).map((num) => (
          <StyledListItem key={num}>
            <StyledLink 
            onClick={()=> props.paginate(num)}
            href="!#">{num + 1}</StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNav>
  );
}
