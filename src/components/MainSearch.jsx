import styled from "styled-components";

const Page = styled.div`
    width: 100%;
    background-color: #E9F9FA;
    margin-top: 12rem;

`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 22.4375rem;
    flex-shrink: 0;
    border-radius: 6.25rem;
    background: #CAEFF4;
    margin-top: 20rem;
    margin: 0 auto;
    box-shadow: 5px 2px 8px 1px #D3D3D3;
    justify-content : center;
    width: 75rem;
`;


const Search = styled.div`
    width: 20rem;
    height: 1.5rem;
    padding: 1.25rem 1rem;
    gap: 0.5rem;
    border: 3px solid #B3E1B7;
    background: #FFF;
    margin-top:2rem;
`;

const SearchBtn = styled.div`
    width: 4rem;
    height: 1.5rem;
    padding: 1.25rem 1rem;
    gap: 0.5rem;
    border: 3px solid #B3E1B7;
    background: #B3E1B7; 
    margin-top:2rem;
    color: #FFF;
    align-items : center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2rem;
    &:hover {
        background: #fff;
        color: #B3E1B7;
        transition: all 0.3s;
        cursor: pointer;
    }
`;


function MainSearch() {
    return (
        <Page>
            <Content>
                <Search></Search>
                <SearchBtn>search</SearchBtn>
            </Content>
        </Page>
    );
}

export default MainSearch;