import Link from "next/link";
import { MEDIA_QUERY_END_POINT, ROUTES } from "../../constants";
import { ROUTEDATA } from "../../types/route";
import styled from "@emotion/styled";
import { MobileNavigation } from ".";

export const Navigation = () => {
  return (
    <FlexContainer>
      <h2 className="sr-only">원티드 목록</h2>
      <PcContainer>
        {ROUTES.map((routeObject: ROUTEDATA) => {
          const { ID, PATH, LABEL, NEW, BETA } = routeObject;
          return (
            <List key={ID}>
              <Link href={PATH}>
                <Item>{LABEL}</Item>
              </Link>
              {NEW && <Plus>New</Plus>}
              {BETA && <Plus>Beta</Plus>}
            </List>
          );
        })}
      </PcContainer>
      <MobileContainer>
        <MobileNavigation />
      </MobileContainer>
    </FlexContainer>
  );
};

const FlexContainer = styled.article``;
const PcContainer = styled.ul`
  display: flex;
  margin-right: 65px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    margin-right: 85px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET2}) {
    margin-right: 40px;
    width: 50vw;
    justify-content: space-between;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET3}) {
    width: 60vw;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE1}) {
    display: none;
  }
`;
const List = styled.li`
  position: relative;
`;
const Item = styled.a`
  font-size: 14px;
  font-weight: 600;
  padding: 15px;
  box-sizing: border-box;
  :hover {
    box-shadow: inset 0 -3px #ddd;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET2}) {
    padding: 0;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET2}) {
    font-size: 13px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET3}) {
    :hover {
      box-shadow: none;
    }
  }
`;
const Plus = styled.span`
  position: absolute;
  right: -6px;
  top: -3px;
  font-size: 10px;
  color: #3366ff;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET2}) {
    right: -20px;
    top: -3px;
  }
`;
const MobileContainer = styled.nav`
  display: none;
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE1}) {
    display: block;
  }
`;
