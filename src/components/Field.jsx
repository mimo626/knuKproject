import styled from "styled-components";

const FieldWrapper = styled.div`
    display: flex;
    width: 50rem;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 2.75rem;
`;
const FieldUniv = styled.div`
    display: flex;
    width: 16rem;
    height: 14rem;
    padding: 1.875rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    background: #FFF;
    margin: 0 auto;
    border-radius: 1.25rem;

`;
const FieldJob = styled.div`
    display: flex;
    width: 16rem;
    height: 14rem;
    padding: 1.875rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    background: #FFF;
    margin: 0 auto;
    border-radius: 1.25rem;

`;

const FieldStudy = styled.div`
    display: flex;
    width: 16rem;
    height: 14rem;
    padding: 1.875rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    background: #FFF;
    margin: 0 auto;
    border-radius: 1.25rem;

`;
const FieldNotice = styled.div`
    display: flex;
    width: 16rem;
    height: 14rem;
    padding: 1.875rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    background: #FFF;
    margin: 0 auto;
    border-radius: 1.25rem;

`;



function Main() {
    return (
        <FieldWrapper>
            <FieldUniv>ICT융합공학부</FieldUniv>
            <FieldJob>취창업</FieldJob>
            <FieldStudy>학습/상담</FieldStudy>
            <FieldNotice>행사/안내</FieldNotice>
        </FieldWrapper>
    );
}

export default Main;