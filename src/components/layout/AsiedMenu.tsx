import styled from "@emotion/styled";
import Link from "next/link";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const AsidMenu = () => {
  const aside = {
    user: {
      id: 0,
      proImg:
        "https://cdn.pixabay.com/photo/2021/03/31/03/12/cat-6138366_960_720.jpg",
      new: true,
    },
    alram: {
      new: true,
    },
  };
  return (
    <Container>
      <Item>
        <button>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <defs>
              <path
                id="qt2dnsql4a"
                d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
              ></path>
            </defs>
            <g fill="none" fillRule="evenodd">
              <use
                fill="#333"
                fillRule="nonzero"
                stroke="#333"
                strokeWidth=".3"
                xlinkHref="#qt2dnsql4a"
              ></use>
            </g>
          </svg>
        </button>
      </Item>
      <Item>
        <button>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <defs>
              <path
                id="bpnpn3yn0a"
                d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
              ></path>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                <mask id="1dencd96ob" fill="#fff">
                  <use xlinkHref="#bpnpn3yn0a"></use>
                </mask>
                <use
                  fillRule="nonzero"
                  stroke="currentColor"
                  strokeWidth=".3"
                  xlinkHref="#bpnpn3yn0a"
                ></use>
                <g fill="currentColor" mask="url(#1dencd96ob)">
                  <path d="M0 0H18V18H0z"></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        {aside.alram.new && <New className="alram-new">N</New>}
      </Item>
      <Item className="my-info">
        <button>
          <Img src={aside.user.proImg} alt="" />
          {aside.user.new && <New className="user-new">N</New>}
        </button>
      </Item>
      <Item className="service">
        <Link href="/dashboard/companyregister">
          <Service>?????? ?????????</Service>
        </Link>
      </Item>
      <Item className="dot">
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
              id="a"
            ></path>
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a"></use>
            </mask>
            <use fill="#333" xlinkHref="#a"></use>
            <g mask="url(#b)" fill="#333">
              <path d="M0 0h18v18H0z"></path>
            </g>
          </g>
        </svg>
      </Item>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  align-items: center;

  .dot {
    display: none;
  }
  .service::before {
    display: inline-block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    .service::before {
      margin: auto 0px;
    }
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET3}) {
    .dot {
      display: block;
    }
    .my-info {
      display: none;
    }
    .service {
      display: none;
    }
    .service::before {
      display: none;
    }
  }
`;
const Item = styled.li`
  padding: 0 10px;
  position: relative;
  .alram-new {
    position: absolute;
    top: -10px;
    right: 0;
  }
  .user-new {
    position: absolute;
    top: -2px;
    right: 8px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    padding: 0 5px;
  }
`;
const Img = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid #e0dede;
`;
const Service = styled.a`
  font-size: 13px;
  color: #666;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 5px 10px;
  margin-left: 15px;
  font-weight: 400;
`;
const New = styled.div`
  font-size: 5px;
  font-weight: 500;
  text-align: center;
  padding: 2px 3px;
  background-color: #3366ff;
  color: #fff;
  border-radius: 4px;
`;
