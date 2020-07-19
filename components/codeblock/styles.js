/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
   border: 0.025rem solid ${({theme})=> theme.colors.border};
   padding: .15rem;
   margin:1rem 0;
   border-radius:.25rem;
   background-color:transparent!important;

   & pre{
      background-color:transparent!important;
   }

   & button{
      background-color:${({theme})=> theme.colors.primary};
      border: 1px solid ${({theme})=> theme.colors.primary};
      cursor:pointer;
   }

   & div {
      background-color:${({theme})=> theme.colors.dark}!important;
      span{
         background-color:${({theme})=> theme.colors.dark}!important;
      }
   }
`