import React, { useContext } from "react";
import { MovieContext } from "../../App";
import {
  StyledLink,
  StyledListItem,
  StyledNav,
  StyledList,
  StyledButton,
} from "./Pagination.style";

export default function Pagination(props) {
  const consumer = useContext(MovieContext);
  const totalPage = consumer?.movieData?.total_pages;
  const PageNum = totalPage / 20;
  const lastPages = totalPage % 20;

  const range = (n) => [...Array(n).keys()];

  const paginationBar1 = () =>
    range(totalPage).map((num) => {
      return (
        <StyledListItem key={num}>
          <StyledLink onClick={() => props.paginate(num)} href="!#">
            {num + 1}
          </StyledLink>
        </StyledListItem>
      );
    });
  let page20 = 20
  const paginationBar2 = () =>
    range(page20).map((PageNum) => {
      return (
        <StyledListItem key={PageNum}>
          <StyledLink onClick={() => props.paginate(PageNum)} href="!#">
            {PageNum + 1}
          </StyledLink>
        </StyledListItem>
      );
    });

  const paginationBar = () => {
    if (totalPage > 20) {
      return paginationBar2();
    } else {
      return paginationBar1();
    }
  };
const NewTenPages =() => {
  paginationBar2 = () =>{}
}
  return (
    <StyledNav>
      <StyledList>
        <StyledButton>◀️</StyledButton>
        {paginationBar()}
        <StyledButton onClick={NewTenPages}>▶️</StyledButton>
      </StyledList>
    </StyledNav>
  );
}


// TODO: 2 buton var birisi ile 10 ar azaltmak birisi ile 10ar arttirmak gerekiyor.

// range(totalPage).map((num) => (
//   <StyledListItem key={num}>
//     <StyledLink
//     onClick={()=> props.paginate(num)}
//     href="!#">{num + 1}</StyledLink>
//   </StyledListItem>
// ))

// const openNewPages = (e) => {};

// const setPages = () => {
//   const PageNum = Math.floor((totalPage / 20));
//   console.log(PageNum);
//   console.log(totalPage);
//   if(PageNum != NaN) {
//     return  () => paginationBar()}
// else{alert('degil')}
//  for(let i = 1;i <= totalPage;i++){
//   else
//   {
//   let PaginationNum = totalPage % 20
//   console.log(PaginationNum)
// }}
// }
